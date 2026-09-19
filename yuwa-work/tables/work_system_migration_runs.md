# `work_system_migration_runs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| trace_id | varchar(64) | NO | UNI | NULL |  |  |
| mode | varchar(20) | NO |  | safe |  |  |
| status | varchar(30) | NO | MUL | running |  |  |
| triggered_by | int | YES |  | NULL |  |  |
| triggered_name | varchar(255) | YES |  | NULL |  |  |
| summary_json | longtext | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| started_at | datetime | NO | MUL | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| finished_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_system_migration_runs_started | started_at | no | 1 |
| idx_system_migration_runs_status | status | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_system_migration_runs_trace | trace_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "trace_id": "20260613_133154_0054523f",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[55],\"versions\":[\"20250121000055\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_133154_0054523f\"}",
    "created_at": "2026-06-13 13:31:56",
    "started_at": "2026-06-13 13:31:56",
    "finished_at": "2026-06-13 13:31:56",
    "updated_at": "2026-06-13 13:31:56"
  },
  {
    "id": 2,
    "trace_id": "20260613_133224_d36decc0",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[57],\"versions\":[\"20250121000057\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_133224_d36decc0\"}",
    "created_at": "2026-06-13 13:32:25",
    "started_at": "2026-06-13 13:32:25",
    "finished_at": "2026-06-13 13:32:25",
    "updated_at": "2026-06-13 13:32:25"
  },
  {
    "id": 3,
    "trace_id": "20260613_133516_db3c81cf",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[58],\"versions\":[\"20250121000058\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_133516_db3c81cf\"}",
    "created_at": "2026-06-13 13:35:17",
    "started_at": "2026-06-13 13:35:17",
    "finished_at": "2026-06-13 13:35:17",
    "updated_at": "2026-06-13 13:35:17"
  },
  {
    "id": 4,
    "trace_id": "20260613_135517_e6a8cb9d",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[59],\"versions\":[\"20250121000059\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_135517_e6a8cb9d\"}",
    "created_at": "2026-06-13 13:55:17",
    "started_at": "2026-06-13 13:55:17",
    "finished_at": "2026-06-13 13:55:17",
    "updated_at": "2026-06-13 13:55:17"
  },
  {
    "id": 5,
    "trace_id": "20260613_135525_8b40e934",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[60],\"versions\":[\"20250121000060\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_135525_8b40e934\"}",
    "created_at": "2026-06-13 13:55:26",
    "started_at": "2026-06-13 13:55:26",
    "finished_at": "2026-06-13 13:55:26",
    "updated_at": "2026-06-13 13:55:26"
  },
  {
    "id": 6,
    "trace_id": "20260613_193135_761904f4",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[47],\"versions\":[\"20250121000047\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_193135_761904f4\"}",
    "created_at": "2026-06-13 19:31:35",
    "started_at": "2026-06-13 19:31:35",
    "finished_at": "2026-06-13 19:31:36",
    "updated_at": "2026-06-13 19:31:36"
  },
  {
    "id": 7,
    "trace_id": "20260613_194239_ca63a417",
    "mode": "cli",
    "status": "success",
    "triggered_by": null,
    "triggered_name": "tools/db_migrate.php",
    "summary_json": "{\"steps\":[61],\"versions\":[\"20250121000061\"],\"dry_run\":false,\"backup_dir\":\"C:\\\\laragon\\\\www\\\\yuwa_work\\\\storage\\\\backups\\\\db_migrations\\\\20260613_194239_ca63a417\"}",
    "created_at": "2026-06-13 19:42:39",
    "started_at": "2026-06-13 19:42:39",
    "finished_at": "2026-06-13 19:42:39",
    "updated_at": "2026-06-13 19:42:39"
  }
]
```
