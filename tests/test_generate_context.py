"""ตรวจการต่อ generator กับ service โดยจำลองฐานข้อมูลและไม่โหลด .env จริง"""
import io
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import MagicMock, patch

import generate_context as generator
from ai_service import AIServiceError


class GeneratorTests(unittest.TestCase):
    def test_sample_projection_limits_payload_before_fetch(self):
        projection = generator.sample_projection([
            {"COLUMN_NAME": "id", "COLUMN_TYPE": "int unsigned"},
            {"COLUMN_NAME": "attachment", "COLUMN_TYPE": "longblob"},
            {"COLUMN_NAME": "description", "COLUMN_TYPE": "longtext"},
            {"COLUMN_NAME": "payload", "COLUMN_TYPE": "json"},
        ], 1000)
        self.assertTrue(projection.startswith("`id`, "))
        self.assertIn("OCTET_LENGTH(`attachment`)", projection)
        self.assertIn("CASE WHEN `attachment` IS NULL THEN NULL", projection)
        self.assertIn("LEFT(`description`, 1000)", projection)
        self.assertIn("LEFT(`payload`, 1000)", projection)
        self.assertIn("[truncated]", projection)
        with self.assertRaisesRegex(ValueError, "Unsafe MySQL identifier"):
            generator.sample_projection([{"COLUMN_NAME": "id`; DROP TABLE demo", "COLUMN_TYPE": "int"}], 1000)

    def test_binary_json_does_not_expand_or_expose_payload(self):
        result = generator.dump_json({"blob": b"PRIVATE_BINARY_SENTINEL" * 100000})
        self.assertIn("<binary 2300000 bytes>", result)
        self.assertNotIn("PRIVATE_BINARY_SENTINEL", result)
        self.assertLess(len(result), 100)

    def test_invalid_sample_limit_stops_before_database(self):
        with patch.dict(os.environ, {"SAMPLE_MAX_CHARS": "10001"}, clear=True), \
                patch.object(generator, "load_dotenv"), patch.object(generator.sys, "argv", ["generate_context.py"]), \
                patch.object(generator.mysql.connector, "connect") as connect:
            with self.assertRaisesRegex(ValueError, "SAMPLE_MAX_CHARS"):
                generator.main()
            connect.assert_not_called()

    def test_invalid_service_config_stops_before_database_and_output(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "output"
            with patch.dict(os.environ, {"AI_API_TYPE": "invalid", "OUTPUT_DIR": str(output)}, clear=True), \
                    patch.object(generator, "load_dotenv"), patch.object(generator.sys, "argv", ["generate_context.py"]), \
                    patch.object(generator.mysql.connector, "connect") as connect:
                with self.assertRaises(ValueError):
                    generator.main()
                connect.assert_not_called()
                self.assertFalse(output.exists())

    def test_generator_metadata_boundary_and_fallback(self):
        for fail in (False, True):
            with self.subTest(fail=fail), tempfile.TemporaryDirectory() as folder:
                output = Path(folder) / "output"
                cursor = MagicMock()
                cursor.fetchall.side_effect = [
                    [{"TABLE_NAME": "demo", "TABLE_COMMENT": "test metadata"}],
                    [],
                    [{"COLUMN_NAME": "id", "COLUMN_TYPE": "int", "IS_NULLABLE": "NO",
                      "COLUMN_KEY": "PRI", "COLUMN_DEFAULT": None, "EXTRA": "", "COLUMN_COMMENT": ""}],
                    [],
                    [{"id": 1, "private_value": "SAMPLE_SENTINEL_DO_NOT_SEND"}],
                ]
                db = MagicMock()
                db.cursor.return_value = cursor
                values = {"DB_HOST": "unused", "DB_NAME": "synthetic_db", "DB_USER": "unused",
                          "OUTPUT_DIR": str(output), "AI_API_TYPE": "openai",
                          "AI_BASE_URL": "http://127.0.0.1:9999/v1", "AI_MODEL": "test-model"}
                with patch.dict(os.environ, values, clear=True), patch.object(generator, "load_dotenv"), \
                        patch.object(generator.sys, "argv", ["generate_context.py"]), \
                        patch.object(generator.mysql.connector, "connect", return_value=db), \
                        patch.object(generator.AIService, "generate", return_value="# synthetic overview") as generate, \
                        patch.object(generator.sys, "stderr", new_callable=io.StringIO) as stderr, \
                        patch.object(generator.sys, "stdout", new_callable=io.StringIO):
                    if fail:
                        generate.side_effect = AIServiceError("AI service HTTP 503")
                    self.assertEqual(generator.main(), 0)
                    prompt = generate.call_args.args[0]
                    self.assertIn("synthetic_db", prompt)
                    self.assertIn("test metadata", prompt)
                    self.assertNotIn("SAMPLE_SENTINEL_DO_NOT_SEND", prompt)
                    for call in cursor.execute.call_args_list:
                        self.assertTrue(call.args[0].startswith("SELECT "))
                    self.assertIn("SAMPLE_SENTINEL_DO_NOT_SEND", (output / "tables/demo.md").read_text(encoding="utf-8"))
                    text = (output / "AI_CONTEXT.md").read_text(encoding="utf-8")
                    if fail:
                        self.assertIn("AI service summary unavailable", text)
                        self.assertIn("503", stderr.getvalue())
                    else:
                        self.assertIn("synthetic overview", text)
                    self.assertTrue((output / "README.md").exists())
                    self.assertTrue((output / "relationships.md").exists())
                    cursor.close.assert_called_once()
                    db.close.assert_called_once()

    def test_legacy_callable(self):
        with patch.dict(os.environ, {}, clear=True), patch.object(generator.AIService, "generate", return_value="legacy result"):
            self.assertEqual(generator.call_ollama({"tables": []}, "http://localhost:11434", "old-model", 20), "legacy result")


if __name__ == "__main__":
    unittest.main()
