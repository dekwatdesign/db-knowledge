# `work_system_migration_versions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| version | varchar(14) | NO |  | NULL |  |  |
| file | varchar(255) | NO |  | NULL |  |  |
| db_key | varchar(20) | NO | MUL | NULL |  |  |
| checksum | varchar(64) | NO |  | NULL |  |  |
| status | varchar(30) | NO | MUL | success |  |  |
| execution_time_ms | int unsigned | YES |  | NULL |  |  |
| run_id | int | YES |  | NULL |  |  |
| executed_at | datetime | YES | MUL | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_system_migration_versions_executed | executed_at | no | 1 |
| idx_system_migration_versions_status | status | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_system_migration_versions_db | db_key | yes | 1 |
| uk_system_migration_versions_db | version | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "version": "20250121000055",
    "file": "migration_official_travel_public_tile.sql",
    "db_key": "work",
    "checksum": "4bb3144c6f901cd137789234cf56a1f2e1831ad538f5ebc5ac0f2411dc0137be",
    "status": "success",
    "execution_time_ms": 16,
    "run_id": 1,
    "executed_at": "2026-06-13 13:31:56",
    "created_at": "2026-06-13 13:31:56",
    "updated_at": "2026-06-13 13:31:56"
  },
  {
    "id": 2,
    "version": "20250121000057",
    "file": "migration_official_travel_cqi_phase1.sql",
    "db_key": "work",
    "checksum": "3315a5dcecbc0eac4a8f7d31ab7f2858c6777c574a54bbf35831fce1905b6e2b",
    "status": "success",
    "execution_time_ms": 488,
    "run_id": 2,
    "executed_at": "2026-06-13 13:32:25",
    "created_at": "2026-06-13 13:32:25",
    "updated_at": "2026-06-13 13:32:25"
  },
  {
    "id": 3,
    "version": "20250121000058",
    "file": "migration_official_travel_cqi_phase1_legacy_workflow_backfill.sql",
    "db_key": "work",
    "checksum": "0a06c3727cc25b94ee01601d35c458c26c6640bee316305cd4b6f5c1077a06e9",
    "status": "success",
    "execution_time_ms": 21,
    "run_id": 3,
    "executed_at": "2026-06-13 13:35:17",
    "created_at": "2026-06-13 13:35:17",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 4,
    "version": "20250121000059",
    "file": "migration_official_travel_cqi_phase2_uat_roles.sql",
    "db_key": "work",
    "checksum": "9cf158e1fa6eb4c257f1b70eb99a526515e52a0b5cd163ebcfedb248b9f50230",
    "status": "success",
    "execution_time_ms": 7,
    "run_id": 4,
    "executed_at": "2026-06-13 13:55:17",
    "created_at": "2026-06-13 13:55:17",
    "updated_at": "2026-06-13 13:55:17"
  },
  {
    "id": 5,
    "version": "20250121000060",
    "file": "migration_official_travel_cqi_phase2_quality_flags.sql",
    "db_key": "work",
    "checksum": "0448c9ea78fbe5f0feb8599c949f2cd2c7c5f785c9ade45c63539ed9875c9b1b",
    "status": "success",
    "execution_time_ms": 21,
    "run_id": 5,
    "executed_at": "2026-06-13 13:55:26",
    "created_at": "2026-06-13 13:55:26",
    "updated_at": "2026-06-13 13:55:26"
  },
  {
    "id": 6,
    "version": "20250121000047",
    "file": "migration_official_travel_v5.sql",
    "db_key": "work",
    "checksum": "d029455b4177336e0f681939720d51e40fb9bff15f46f5a73ba802f1216bfe17",
    "status": "success",
    "execution_time_ms": 62,
    "run_id": 6,
    "executed_at": "2026-06-13 19:31:36",
    "created_at": "2026-06-13 19:31:36",
    "updated_at": "2026-06-13 19:31:36"
  },
  {
    "id": 7,
    "version": "20250121000061",
    "file": "migration_official_travel_cqi_phase3_quality_backfill.sql",
    "db_key": "work",
    "checksum": "5faa359274db91fca9b9b84d44191982e7080fea1a6448d9b37c3470e1ea249d",
    "status": "success",
    "execution_time_ms": 25,
    "run_id": 7,
    "executed_at": "2026-06-13 19:42:39",
    "created_at": "2026-06-13 19:42:39",
    "updated_at": "2026-06-13 19:42:39"
  }
]
```
