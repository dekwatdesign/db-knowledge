"""ตรวจ protocol และขอบเขตข้อมูลด้วย HTTP server ในเครื่อง ไม่มีข้อมูลจริง"""
import json
import threading
import unittest
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from unittest.mock import patch

from ai_service import AIService, AIServiceConfig, AIServiceError


class ConfigTests(unittest.TestCase):
    def test_legacy_and_defaults(self):
        config = AIServiceConfig.from_env({})
        self.assertEqual(config.model, "qwen2.5-coder:7b")
        legacy = AIServiceConfig.from_env({"OLLAMA_HOST": "http://localhost:11434",
                                           "OLLAMA_MODEL": "legacy", "OLLAMA_TIMEOUT_SECONDS": "99"})
        self.assertEqual((legacy.base_url, legacy.model, legacy.timeout_seconds),
                         ("http://localhost:11434", "legacy", 99))

    def test_new_config_overrides_legacy(self):
        config = AIServiceConfig.from_env({"AI_MODEL": "new", "OLLAMA_MODEL": "old",
                                          "AI_BASE_URL": "http://127.0.0.1:9999/",
                                          "AI_TIMEOUT_SECONDS": "20", "OLLAMA_TIMEOUT_SECONDS": "99"})
        self.assertEqual((config.model, config.base_url, config.timeout_seconds),
                         ("new", "http://127.0.0.1:9999", 20))

    def test_invalid_config(self):
        cases = [
            {"AI_API_TYPE": "unknown"},
            {"AI_API_TYPE": "openai", "AI_ALLOW_REMOTE": "true"},
            {"AI_BASE_URL": "https://external.example"},
            {"AI_BASE_URL": "http://192.168.1.1"},
            {"AI_BASE_URL": "http://external.example", "AI_ALLOW_REMOTE": "true", "AI_API_KEY": "secret"},
            {"AI_BASE_URL": "http://secret@localhost"},
            {"AI_BASE_URL": "http://localhost?key=secret"},
            {"AI_BASE_URL": "file:///tmp/model"},
            {"AI_TIMEOUT_SECONDS": "0"},
            {"AI_MAX_OUTPUT_TOKENS": "-1"},
            {"AI_ALLOW_REMOTE": "yes"},
            {"AI_API_TYPE": "anthropic", "AI_MODEL": "model", "AI_ALLOW_REMOTE": "true"},
        ]
        for values in cases:
            with self.subTest(values=values), self.assertRaises(ValueError):
                AIServiceConfig.from_env(values)

    def test_remote_opt_in_and_secret_repr(self):
        config = AIServiceConfig.from_env({"AI_API_TYPE": "openai", "AI_MODEL": "model",
                                          "AI_ALLOW_REMOTE": "true", "AI_API_KEY": "private-key"})
        self.assertEqual(config.base_url, "https://api.openai.com/v1")
        self.assertNotIn("private-key", repr(config))


class HTTPTests(unittest.TestCase):
    def setUp(self):
        owner = self
        self.calls = []
        self.status = 200
        self.payload = {}
        self.raw = None
        self.redirect = None

        class Handler(BaseHTTPRequestHandler):
            def do_POST(self):
                body = json.loads(self.rfile.read(int(self.headers["Content-Length"])))
                owner.calls.append((self.path, {key.lower(): value for key, value in self.headers.items()}, body))
                self.send_response(owner.status)
                if owner.redirect:
                    self.send_header("Location", owner.redirect)
                self.end_headers()
                self.wfile.write(owner.raw if owner.raw is not None else json.dumps(owner.payload).encode())

            def log_message(self, *args):
                pass

        self.server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        self.base = f"http://127.0.0.1:{self.server.server_port}"

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join()

    def service(self, api_type, suffix="", key=""):
        return AIService(AIServiceConfig(api_type, self.base + suffix, "demo-model", key, 2))

    def test_protocols_over_http(self):
        cases = [
            ("ollama", "", "", {"response": " result "}, "/api/generate"),
            ("openai", "/custom/v1", "test-key", {"choices": [{"message": {"content": "result"}}]}, "/custom/v1/chat/completions"),
            ("anthropic", "/v1", "test-key", {"content": [{"type": "thinking", "thinking": "hidden"}, {"type": "text", "text": "result"}]}, "/v1/messages"),
            ("gemini", "/v1beta", "test-key", {"candidates": [{"content": {"parts": [{"text": "hidden", "thought": True}, {"text": "result"}]}}]}, "/v1beta/models/demo-model:generateContent"),
        ]
        for kind, suffix, key, payload, path in cases:
            with self.subTest(kind=kind):
                self.payload = payload
                self.assertEqual(self.service(kind, suffix, key).generate("ทดสอบ"), "result")
                actual_path, headers, body = self.calls[-1]
                self.assertEqual(actual_path, path)
                self.assertEqual(body.get("model", "demo-model"), "demo-model")
                if kind == "ollama":
                    self.assertFalse(body["stream"])
                    self.assertEqual(body["prompt"], "ทดสอบ")
                    self.assertNotIn("authorization", headers)
                elif kind == "openai":
                    self.assertEqual(headers["authorization"], "Bearer test-key")
                    self.assertEqual(body["messages"][0]["content"], "ทดสอบ")
                elif kind == "anthropic":
                    self.assertEqual(headers["x-api-key"], "test-key")
                    self.assertEqual(headers["anthropic-version"], "2023-06-01")
                    self.assertEqual(body["max_tokens"], 4096)
                else:
                    self.assertEqual(headers["x-goog-api-key"], "test-key")
                    self.assertEqual(body["contents"][0]["parts"][0]["text"], "ทดสอบ")
                    self.assertNotIn("test-key", actual_path)

    def test_errors_do_not_leak_response_or_key(self):
        self.status = 401
        self.payload = {"error": "private-key sensitive metadata"}
        with self.assertRaises(AIServiceError) as caught:
            self.service("openai", "/v1", "private-key").generate("sensitive prompt")
        self.assertIn("401", str(caught.exception))
        self.assertNotIn("private-key", str(caught.exception))
        self.assertNotIn("sensitive", str(caught.exception))

    def test_redirect_is_not_followed(self):
        self.status = 307
        self.redirect = self.base + "/redirected"
        with self.assertRaises(AIServiceError):
            self.service("ollama").generate("private metadata")
        self.assertEqual(len(self.calls), 1)

    def test_bad_responses(self):
        for payload in [{}, [], {"response": " "}, {"response": None}, {"error": "secret"},
                        {"response": "partial", "done_reason": "length"}]:
            with self.subTest(payload=payload), self.assertRaises(AIServiceError):
                self.payload = payload
                self.service("ollama").generate("test")
        self.raw = b"not json"
        with self.assertRaisesRegex(AIServiceError, "invalid JSON"):
            self.service("ollama").generate("test")

    def test_provider_truncation(self):
        cases = [
            ("openai", {"choices": [{"finish_reason": "length", "message": {"content": "partial"}}]}),
            ("anthropic", {"stop_reason": "max_tokens", "content": [{"type": "text", "text": "partial"}]}),
            ("gemini", {"candidates": [{"finishReason": "MAX_TOKENS", "content": {"parts": [{"text": "partial"}]}}]}),
        ]
        for kind, payload in cases:
            with self.subTest(kind=kind), self.assertRaises(AIServiceError):
                self.payload = payload
                self.service(kind, key="test-key").generate("test")

    def test_timeout(self):
        service = self.service("ollama")
        with patch.object(service._opener, "open", side_effect=TimeoutError):
            with self.assertRaisesRegex(AIServiceError, "timed out"):
                service.generate("test")


if __name__ == "__main__":
    unittest.main()
