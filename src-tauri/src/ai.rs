use crate::models::AiConfig;
use std::time::Duration;

pub fn generate_ai_context(config: &AiConfig, summary_json: &serde_json::Value) -> Result<String, String> {
    if config.api_type == "disabled" {
        return Ok(generate_fallback_summary(summary_json, "AI overview disabled by user configuration."));
    }

    let prompt = format!(
        "You are documenting a MySQL database for downstream LLM agents.\n\
         Write concise Markdown (English) with these headings exactly:\n\
         ## Database purpose\n\
         ## Key entities\n\
         ## Important relationships\n\
         ## Safe querying guidance\n\
         ## Agent notes\n\
         Use only the supplied metadata. Do not invent business facts or field meanings. Mention table and column names exactly where useful.\n\n\
         METADATA:\n{}",
        serde_json::to_string_pretty(summary_json).unwrap_or_default()
    );

    match call_provider(config, &prompt) {
        Ok(text) => Ok(text),
        Err(e) => {
            log::warn!("AI generation failed: {}, using fallback overview", e);
            Ok(generate_fallback_summary(summary_json, &format!("AI service summary unavailable: `{}`", e)))
        }
    }
}

pub fn test_ai_connection(config: &AiConfig) -> Result<String, String> {
    if config.api_type == "disabled" {
        return Ok("AI service is currently disabled".to_string());
    }
    let test_prompt = "Say 'OK' if you can read this message.";
    call_provider(config, test_prompt)
}

fn call_provider(config: &AiConfig, prompt: &str) -> Result<String, String> {
    let client = reqwest::blocking::Client::builder()
        .timeout(Duration::from_secs(config.timeout_seconds))
        .build()
        .map_err(|e| format!("Failed to create HTTP client: {}", e))?;

    let base_url = config.base_url.trim_end_matches('/');

    match config.api_type.to_lowercase().as_str() {
        "ollama" => {
            let url = format!("{}/api/generate", base_url);
            let body = serde_json::json!({
                "model": config.model,
                "prompt": prompt,
                "stream": false
            });

            let resp = client
                .post(&url)
                .json(&body)
                .send()
                .map_err(|e| format!("Ollama request failed: {}", e))?;

            if !resp.status().is_success() {
                return Err(format!("Ollama returned HTTP {}", resp.status()));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse Ollama JSON response: {}", e))?;

            let response_text = data
                .get("response")
                .and_then(|v| v.as_str())
                .ok_or_else(|| "Ollama response missing 'response' field".to_string())?;

            Ok(response_text.to_string())
        }
        "openai" => {
            let url = format!("{}/chat/completions", base_url);
            let body = serde_json::json!({
                "model": config.model,
                "messages": [
                    { "role": "user", "content": prompt }
                ]
            });

            let mut req = client.post(&url).json(&body);
            if !config.api_key.is_empty() {
                req = req.header("Authorization", format!("Bearer {}", config.api_key));
            }

            let resp = req.send().map_err(|e| format!("OpenAI request failed: {}", e))?;

            if !resp.status().is_success() {
                let status = resp.status();
                let err_text = resp.text().unwrap_or_default();
                return Err(format!("OpenAI returned HTTP {}: {}", status, err_text));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse OpenAI JSON response: {}", e))?;

            let text = data
                .pointer("/choices/0/message/content")
                .and_then(|v| v.as_str())
                .ok_or_else(|| "OpenAI response missing message content".to_string())?;

            Ok(text.to_string())
        }
        "anthropic" => {
            let url = format!("{}/messages", base_url);
            let body = serde_json::json!({
                "model": config.model,
                "max_tokens": config.max_output_tokens,
                "messages": [
                    { "role": "user", "content": prompt }
                ]
            });

            let resp = client
                .post(&url)
                .header("x-api-key", &config.api_key)
                .header("anthropic-version", "2023-06-01")
                .header("content-type", "application/json")
                .json(&body)
                .send()
                .map_err(|e| format!("Anthropic request failed: {}", e))?;

            if !resp.status().is_success() {
                return Err(format!("Anthropic returned HTTP {}", resp.status()));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse Anthropic JSON: {}", e))?;

            let text = data
                .pointer("/content/0/text")
                .and_then(|v| v.as_str())
                .ok_or_else(|| "Anthropic response missing text".to_string())?;

            Ok(text.to_string())
        }
        "gemini" => {
            let url = format!(
                "{}/models/{}:generateContent?key={}",
                base_url, config.model, config.api_key
            );
            let body = serde_json::json!({
                "contents": [
                    {
                        "parts": [
                            { "text": prompt }
                        ]
                    }
                ]
            });

            let resp = client
                .post(&url)
                .json(&body)
                .send()
                .map_err(|e| format!("Gemini request failed: {}", e))?;

            if !resp.status().is_success() {
                return Err(format!("Gemini returned HTTP {}", resp.status()));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse Gemini response: {}", e))?;

            let text = data
                .pointer("/candidates/0/content/parts/0/text")
                .and_then(|v| v.as_str())
                .ok_or_else(|| "Gemini response missing text candidate".to_string())?;

            Ok(text.to_string())
        }
        other => Err(format!("Unsupported AI API type: '{}'", other)),
    }
}

pub fn generate_fallback_summary(summary: &serde_json::Value, note: &str) -> String {
    let tables = summary
        .get("tables")
        .and_then(|v| v.as_array())
        .map(|arr| {
            arr.iter()
                .filter_map(|t| t.as_str())
                .map(|t| format!("`{}`", t))
                .collect::<Vec<_>>()
                .join(", ")
        })
        .unwrap_or_default();

    format!(
        "## Database purpose\n\n\
         Generated from MySQL metadata; semantic intent requires review.\n\n\
         ## Key entities\n\n\
         {}\n\n\
         ## Important relationships\n\n\
         See `relationships.md`.\n\n\
         ## Safe querying guidance\n\n\
         Use `SELECT`, explicit columns, and `LIMIT`; treat samples as potentially sensitive.\n\n\
         ## Agent notes\n\n\
         {}",
        tables, note
    )
}
