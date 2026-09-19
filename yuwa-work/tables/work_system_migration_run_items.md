# `work_system_migration_run_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| run_id | int | NO | MUL | NULL |  |  |
| feature_id | varchar(100) | NO | MUL | NULL |  |  |
| feature_title | varchar(255) | NO |  | NULL |  |  |
| feature_group | varchar(255) | YES |  | NULL |  |  |
| feature_kind | varchar(50) | YES |  | NULL |  |  |
| target_id | varchar(100) | NO |  | NULL |  |  |
| target_label | varchar(255) | YES |  | NULL |  |  |
| target_type | varchar(50) | YES |  | NULL |  |  |
| status | varchar(30) | NO | MUL | pending |  |  |
| risk_level | varchar(20) | YES |  | NULL |  |  |
| checksum | varchar(64) | YES |  | NULL |  |  |
| reason_text | text | YES |  | NULL |  |  |
| blocked_reasons_json | longtext | YES |  | NULL |  |  |
| warnings_json | longtext | YES |  | NULL |  |  |
| state_snapshot_json | longtext | YES |  | NULL |  |  |
| logs_json | longtext | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| executed_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| finished_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_system_migration_items_feature_target | feature_id | no | 1 |
| idx_system_migration_items_feature_target | target_id | no | 2 |
| idx_system_migration_items_run | run_id | no | 1 |
| idx_system_migration_items_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "run_id": 1,
    "feature_id": "sql_migration_official_travel_public_tile",
    "feature_title": "20250121000055 Official Travel Public Tile (self-service)",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "4bb3144c6f901cd137789234cf56a1f2e1831ad538f5ebc5ac0f2411dc0137be",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"1 rows\"},{\"index\":3,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"1 rows\"},{\"index\":4,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"1 rows\"},{\"index\":5,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"8 rows\"},{\"index\":6,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"6 rows\"},{\"index\":7,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"6 rows\"},{\"index\":8,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"6 rows\"},{\"index\":9,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"8 rows\"}]",
    "created_at": "2026-06-13 13:31:56",
    "executed_at": "2026-06-13 13:31:56",
    "finished_at": "2026-06-13 13:31:56",
    "updated_at": "2026-06-13 13:31:56"
  },
  {
    "id": 2,
    "run_id": 2,
    "feature_id": "sql_migration_official_travel_cqi_phase1",
    "feature_title": "20250121000057 Official Travel CQI Phase 1",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "3315a5dcecbc0eac4a8f7d31ab7f2858c6777c574a54bbf35831fce1905b6e2b",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":3,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":4,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":5,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":6,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":7,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":8,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":9,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":10,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":11,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":12,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":13,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":14,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":15,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":16,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":17,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":18,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":19,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":20,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":21,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":22,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":23,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":24,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":25,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":26,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":27,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":28,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":29,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":30,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":31,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":32,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":33,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":34,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":35,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":36,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":37,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":38,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":39,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":40,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":41,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":42,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":43,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":44,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":45,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":46,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":47,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":48,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":49,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":50,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":51,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":52,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":53,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":54,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":55,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":56,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":57,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":58,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":59,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":60,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":61,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":62,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":63,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":64,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":65,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":66,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":67,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":68,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":69,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":70,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":71,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":72,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":73,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":74,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":75,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":76,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":77,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":78,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":79,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":80,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":81,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":82,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":83,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":84,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":85,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":86,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":87,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":88,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"368 rows\"},{\"index\":89,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":90,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"8 rows\"},{\"index\":91,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"15 rows\"},{\"index\":92,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"1 rows\"}]",
    "created_at": "2026-06-13 13:32:25",
    "executed_at": "2026-06-13 13:32:25",
    "finished_at": "2026-06-13 13:32:25",
    "updated_at": "2026-06-13 13:32:25"
  },
  {
    "id": 3,
    "run_id": 3,
    "feature_id": "sql_migration_official_travel_cqi_phase1_legacy_workflow_backfill",
    "feature_title": "20250121000058 Official Travel CQI Phase 1 Legacy Workflow Backfill",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "0a06c3727cc25b94ee01601d35c458c26c6640bee316305cd4b6f5c1077a06e9",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"368 rows\"},{\"index\":3,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"1 rows\"}]",
    "created_at": "2026-06-13 13:35:17",
    "executed_at": "2026-06-13 13:35:17",
    "finished_at": "2026-06-13 13:35:17",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 4,
    "run_id": 4,
    "feature_id": "sql_migration_official_travel_cqi_phase2_uat_roles",
    "feature_title": "20250121000059 Official Travel CQI Phase 2 UAT Roles",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "9cf158e1fa6eb4c257f1b70eb99a526515e52a0b5cd163ebcfedb248b9f50230",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"3 rows\"},{\"index\":3,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"18 rows\"},{\"index\":4,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"6 rows\"}]",
    "created_at": "2026-06-13 13:55:17",
    "executed_at": "2026-06-13 13:55:17",
    "finished_at": "2026-06-13 13:55:17",
    "updated_at": "2026-06-13 13:55:17"
  },
  {
    "id": 5,
    "run_id": 5,
    "feature_id": "sql_migration_official_travel_cqi_phase2_quality_flags",
    "feature_title": "20250121000060 Official Travel CQI Phase 2 Quality Flags",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "0448c9ea78fbe5f0feb8599c949f2cd2c7c5f785c9ade45c63539ed9875c9b1b",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":3,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"368 rows\"},{\"index\":4,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"1 rows\"}]",
    "created_at": "2026-06-13 13:55:26",
    "executed_at": "2026-06-13 13:55:26",
    "finished_at": "2026-06-13 13:55:26",
    "updated_at": "2026-06-13 13:55:26"
  },
  {
    "id": 6,
    "run_id": 6,
    "feature_id": "sql_migration_official_travel_v5",
    "feature_title": "20250121000047 Official Travel (v5)",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "d029455b4177336e0f681939720d51e40fb9bff15f46f5a73ba802f1216bfe17",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":3,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":4,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":5,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":6,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":7,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":8,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":9,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":10,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":11,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":12,\"type\":\"OTHER\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":13,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"2 rows\"}]",
    "created_at": "2026-06-13 19:31:36",
    "executed_at": "2026-06-13 19:31:36",
    "finished_at": "2026-06-13 19:31:36",
    "updated_at": "2026-06-13 19:31:36"
  },
  {
    "id": 7,
    "run_id": 7,
    "feature_id": "sql_migration_official_travel_cqi_phase3_quality_backfill",
    "feature_title": "20250121000061 Official Travel CQI Phase 3 Legacy Quality Backfill",
    "feature_group": "HR",
    "feature_kind": "sql",
    "target_id": "work",
    "target_label": "WORK DB",
    "target_type": "mysql",
    "status": "ok",
    "risk_level": "safe",
    "checksum": "5faa359274db91fca9b9b84d44191982e7080fea1a6448d9b37c3470e1ea249d",
    "reason_text": "completed",
    "blocked_reasons_json": null,
    "warnings_json": "[]",
    "state_snapshot_json": null,
    "logs_json": "[{\"index\":1,\"type\":\"SET\",\"status\":\"ok\",\"message\":\"0 rows\"},{\"index\":2,\"type\":\"CREATE\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":3,\"type\":\"ALTER\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":4,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":5,\"type\":\"UPDATE\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":6,\"type\":\"INSERT\",\"status\":\"ok\",\"message\":\"50 rows\"},{\"index\":7,\"type\":\"SELECT\",\"status\":\"ok\",\"message\":\"1 rows\"}]",
    "created_at": "2026-06-13 19:42:39",
    "executed_at": "2026-06-13 19:42:39",
    "finished_at": "2026-06-13 19:42:39",
    "updated_at": "2026-06-13 19:42:39"
  }
]
```
