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
    // Cap test connection timeout to at most 15 seconds to avoid UI/network hang
    let mut test_config = config.clone();
    test_config.timeout_seconds = test_config.timeout_seconds.clamp(5, 15);
    call_provider(&test_config, test_prompt)
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
                let status = resp.status();
                let err_text = resp.text().unwrap_or_default();
                return Err(format!("Ollama returned HTTP {}: {}", status, err_text));
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
                let status = resp.status();
                let err_text = resp.text().unwrap_or_default();
                return Err(format!("Anthropic returned HTTP {}: {}", status, err_text));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse Anthropic JSON: {}", e))?;

            let text = data
                .get("content")
                .and_then(|v| v.as_array())
                .map(|blocks| {
                    blocks
                        .iter()
                        .filter_map(|b| {
                            if b.get("type").and_then(|t| t.as_str()) == Some("text") {
                                b.get("text").and_then(|t| t.as_str())
                            } else {
                                None
                            }
                        })
                        .collect::<Vec<_>>()
                        .join("\n")
                })
                .unwrap_or_default();

            if text.trim().is_empty() {
                return Err("Anthropic response missing text content".to_string());
            }

            Ok(text.trim().to_string())
        }
        "gemini" => {
            // Strip any leading "models/" or trailing ":generateContent" that users might copy-paste
            let clean_model = config.model.trim()
                .trim_start_matches("models/")
                .trim_end_matches(":generateContent");

            let url = if config.api_key.is_empty() {
                format!("{}/models/{}:generateContent", base_url, clean_model)
            } else {
                format!(
                    "{}/models/{}:generateContent?key={}",
                    base_url, clean_model, config.api_key
                )
            };

            let body = serde_json::json!({
                "contents": [
                    {
                        "role": "user",
                        "parts": [
                            { "text": prompt }
                        ]
                    }
                ],
                "generationConfig": {
                    "maxOutputTokens": config.max_output_tokens
                }
            });

            let mut req = client.post(&url);
            if !config.api_key.is_empty() {
                req = req.header("x-goog-api-key", &config.api_key);
            }

            let resp = req
                .json(&body)
                .send()
                .map_err(|e| format!("Gemini request failed: {}", e))?;

            if !resp.status().is_success() {
                let status = resp.status();
                let err_text = resp.text().unwrap_or_default();
                return Err(format!("Gemini returned HTTP {}: {}", status, err_text));
            }

            let data: serde_json::Value = resp
                .json()
                .map_err(|e| format!("Failed to parse Gemini response: {}", e))?;

            // Extract candidate text while filtering out "thought" parts from thinking models
            let parts = data
                .pointer("/candidates/0/content/parts")
                .and_then(|v| v.as_array());

            let text = if let Some(parts_arr) = parts {
                parts_arr
                    .iter()
                    .filter_map(|p| {
                        let is_thought = p.get("thought").and_then(|v| v.as_bool()).unwrap_or(false);
                        if !is_thought {
                            p.get("text").and_then(|v| v.as_str())
                        } else {
                            None
                        }
                    })
                    .collect::<Vec<_>>()
                    .join("\n")
            } else {
                String::new()
            };

            if text.trim().is_empty() {
                let fallback = data
                    .pointer("/candidates/0/content/parts/0/text")
                    .and_then(|v| v.as_str())
                    .unwrap_or_default();
                if fallback.trim().is_empty() {
                    return Err("Gemini response missing text candidate".to_string());
                }
                Ok(fallback.trim().to_string())
            } else {
                Ok(text.trim().to_string())
            }
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_disabled_ai() {
        let config = AiConfig {
            api_type: "disabled".to_string(),
            base_url: String::new(),
            model: String::new(),
            api_key: String::new(),
            timeout_seconds: 180,
            max_output_tokens: 4096,
            allow_remote: false,
        };
        let res = test_ai_connection(&config);
        assert!(res.is_ok());
        assert_eq!(res.unwrap(), "AI service is currently disabled");
    }

    #[test]
    fn test_gemini_model_cleaning() {
        let raw = "models/gemini-flash-latest:generateContent";
        let cleaned = raw
            .trim()
            .trim_start_matches("models/")
            .trim_end_matches(":generateContent");
        assert_eq!(cleaned, "gemini-flash-latest");
    }

    #[test]
    fn test_gemini_connection_twice() {
        let config = AiConfig {
            api_type: "gemini".to_string(),
            base_url: "https://generativelanguage.googleapis.com/v1beta".to_string(),
            model: "gemini-3.5-flash-lite".to_string(),
            api_key: "AQ.Ab8RN6JeMpNOnAlEwNBQzeEMMgSXah5UACPNZZ1bxQjosR6jDg".to_string(),
            timeout_seconds: 15,
            max_output_tokens: 100,
            allow_remote: true,
        };
        // 1st call
        let res1 = test_ai_connection(&config);
        assert!(res1.is_ok(), "First call failed: {:?}", res1.err());
        assert_eq!(res1.unwrap(), "OK");

        // 2nd call (verifying 2nd call works without hanging or error)
        let res2 = test_ai_connection(&config);
        assert!(res2.is_ok(), "Second call failed: {:?}", res2.err());
        assert_eq!(res2.unwrap(), "OK");
    }
}
