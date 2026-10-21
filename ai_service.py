"""บริการเรียก AI ผ่าน API โดยแยก protocol ออกจากชื่อผู้ให้บริการ"""
from __future__ import annotations

import ipaddress
import json
import os
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from typing import Mapping, Any


class AIServiceError(RuntimeError):
    """ข้อผิดพลาดที่รายงานได้โดยไม่เปิดเผย API key หรือข้อมูลจาก API"""


class _NoRedirect(urllib.request.HTTPRedirectHandler):
    """ป้องกันการส่ง metadata หรือ credential ต่อไปยังปลายทางอื่น"""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


@dataclass(frozen=True)
class AIServiceConfig:
    api_type: str
    base_url: str
    model: str
    api_key: str = field(default="", repr=False)
    timeout_seconds: int = 180
    max_output_tokens: int = 4096
    allow_remote: bool = False

    @classmethod
    def from_env(cls, values: Mapping[str, str] | None = None) -> AIServiceConfig:
        values = os.environ if values is None else values
        api_type = values.get("AI_API_TYPE", "ollama").strip().lower()
        defaults = {
            "ollama": values.get("OLLAMA_HOST", "http://127.0.0.1:11434"),
            "openai": "https://api.openai.com/v1",
            "anthropic": "https://api.anthropic.com/v1",
            "gemini": "https://generativelanguage.googleapis.com/v1beta",
        }
        if api_type not in defaults:
            raise ValueError("AI_API_TYPE must be ollama, openai, anthropic, or gemini")
        base_url = values.get("AI_BASE_URL", "").strip() or defaults[api_type]
        model = values.get("AI_MODEL", "").strip()
        if not model and api_type == "ollama":
            model = values.get("OLLAMA_MODEL", "qwen2.5-coder:7b").strip()
        if not model:
            raise ValueError("Missing required environment variable: AI_MODEL")
        timeout = values.get("AI_TIMEOUT_SECONDS", "").strip()
        if not timeout:
            timeout = values.get("OLLAMA_TIMEOUT_SECONDS", "180") if api_type == "ollama" else "180"
        remote = values.get("AI_ALLOW_REMOTE", "false").strip().lower()
        if remote not in {"true", "false"}:
            raise ValueError("AI_ALLOW_REMOTE must be true or false")
        config = cls(api_type, base_url.rstrip("/"), model,
                     values.get("AI_API_KEY", "").strip(), int(timeout),
                     int(values.get("AI_MAX_OUTPUT_TOKENS", "4096")), remote == "true")
        config.validate()
        return config

    def validate(self) -> None:
        if self.api_type not in {"ollama", "openai", "anthropic", "gemini"}:
            raise ValueError("Unsupported AI_API_TYPE")
        if not self.model.strip():
            raise ValueError("AI_MODEL must not be empty")
        if self.timeout_seconds <= 0 or self.max_output_tokens <= 0:
            raise ValueError("AI timeout and output token limit must be positive")
        url = urllib.parse.urlsplit(self.base_url)
        if (url.scheme not in {"http", "https"} or not url.hostname
                or url.username is not None or url.password is not None
                or url.query or url.fragment):
            raise ValueError("AI_BASE_URL must be an HTTP(S) URL without credentials, query, or fragment")
        try:
            url.port
        except ValueError:
            raise ValueError("AI_BASE_URL has an invalid port") from None
        local = url.hostname.lower() == "localhost"
        try:
            local = local or ipaddress.ip_address(url.hostname).is_loopback
        except ValueError:
            pass
        if not local and not self.allow_remote:
            raise ValueError("Remote AI service requires AI_ALLOW_REMOTE=true after metadata sharing approval")
        if self.api_key and url.scheme != "https" and not local:
            raise ValueError("Remote AI service with an API key requires HTTPS")
        if self.api_type in {"anthropic", "gemini"} and not self.api_key:
            raise ValueError("Missing required environment variable: AI_API_KEY")


class AIService:
    """ใช้ config เดียวกันกับ API แบบ native และ OpenAI-compatible"""

    def __init__(self, config: AIServiceConfig):
        config.validate()
        self.config = config
        self._opener = urllib.request.build_opener(_NoRedirect())

    def _request(self, prompt: str) -> urllib.request.Request:
        c = self.config
        headers = {"Content-Type": "application/json", "Accept": "application/json"}
        if c.api_type == "ollama":
            path = "/api/generate"
            body: dict[str, Any] = {"model": c.model, "prompt": prompt, "stream": False,
                                    "options": {"temperature": 0, "num_predict": c.max_output_tokens}}
        elif c.api_type == "openai":
            path = "/chat/completions"
            # ไม่ส่ง temperature/token parameter ที่บางโมเดลหรือ gateway ไม่รองรับ
            body = {"model": c.model, "messages": [{"role": "user", "content": prompt}], "stream": False}
        elif c.api_type == "anthropic":
            path = "/messages"
            body = {"model": c.model, "messages": [{"role": "user", "content": prompt}],
                    "max_tokens": c.max_output_tokens}
            headers.update({"x-api-key": c.api_key, "anthropic-version": "2023-06-01"})
        else:
            model = c.model.removeprefix("models/")
            path = "/models/" + urllib.parse.quote(model, safe="") + ":generateContent"
            body = {"contents": [{"role": "user", "parts": [{"text": prompt}]}],
                    "generationConfig": {"maxOutputTokens": c.max_output_tokens}}
            headers["x-goog-api-key"] = c.api_key
        if c.api_key and c.api_type in {"ollama", "openai"}:
            headers["Authorization"] = "Bearer " + c.api_key
        return urllib.request.Request(c.base_url.rstrip("/") + path,
                                      data=json.dumps(body, ensure_ascii=False).encode("utf-8"),
                                      headers=headers, method="POST")

    def generate(self, prompt: str) -> str:
        try:
            with self._opener.open(self._request(prompt), timeout=self.config.timeout_seconds) as response:
                payload = json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as error:
            status = error.code
            error.close()
            raise AIServiceError(f"AI service HTTP {status}; check endpoint, model, credentials, and quota") from None
        except (urllib.error.URLError, TimeoutError, OSError):
            raise AIServiceError("AI service connection failed or timed out") from None
        except (json.JSONDecodeError, UnicodeDecodeError):
            raise AIServiceError("AI service returned invalid JSON") from None
        try:
            if payload.get("error"):
                raise AIServiceError("AI service returned an error response")
            if self.config.api_type == "ollama":
                if payload.get("done_reason") == "length":
                    raise AIServiceError("AI service output was truncated; increase AI_MAX_OUTPUT_TOKENS")
                result = payload["response"]
            elif self.config.api_type == "openai":
                choice = payload["choices"][0]
                if choice.get("finish_reason") in {"length", "content_filter"}:
                    raise AIServiceError("AI service output was truncated or blocked")
                result = choice["message"]["content"]
            elif self.config.api_type == "anthropic":
                if payload.get("stop_reason") == "max_tokens":
                    raise AIServiceError("AI service output was truncated; increase AI_MAX_OUTPUT_TOKENS")
                result = "\n".join(block["text"] for block in payload["content"] if block.get("type") == "text")
            else:
                candidate = payload["candidates"][0]
                if candidate.get("finishReason", "STOP") != "STOP":
                    raise AIServiceError("AI service output was truncated or blocked")
                result = "\n".join(part["text"] for part in candidate["content"]["parts"]
                                   if "text" in part and not part.get("thought"))
            if not isinstance(result, str) or not result.strip():
                raise AIServiceError("AI service returned an empty text response")
            return result.strip()
        except (KeyError, IndexError, TypeError, AttributeError):
            raise AIServiceError("AI service returned an unexpected response format") from None
