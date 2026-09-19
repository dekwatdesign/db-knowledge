# `work_payroll_runs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| period_year | smallint | NO | MUL | NULL |  |  |
| period_month | tinyint | NO |  | NULL |  |  |
| run_type | varchar(100) | NO |  | NULL |  |  |
| run_name | varchar(255) | NO |  | NULL |  |  |
| date_start | date | YES |  | NULL |  |  |
| date_end | date | YES |  | NULL |  |  |
| status | enum('draft','published') | NO | MUL | draft |  |  |
| created_by | int | YES |  | NULL |  |  |
| published_by | int | YES |  | NULL |  |  |
| published_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_period | period_year | no | 1 |
| idx_period | period_month | no | 2 |
| idx_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "period_year": 2026,
    "period_month": 1,
    "run_type": "เงินเดือน",
    "run_name": "งวดปกติ",
    "date_start": "2025-12-27",
    "date_end": "2026-01-27",
    "status": "published",
    "created_by": 29,
    "published_by": 29,
    "published_at": "2026-04-01 16:13:52",
    "created_at": "2026-03-31 11:13:55",
    "updated_at": "2026-04-01 16:13:52"
  },
  {
    "id": 2,
    "period_year": 2026,
    "period_month": 2,
    "run_type": "เงินเดือน",
    "run_name": "งวดปกติ",
    "date_start": "2026-01-28",
    "date_end": "2026-02-24",
    "status": "published",
    "created_by": 29,
    "published_by": 29,
    "published_at": "2026-04-09 13:29:55",
    "created_at": "2026-03-31 11:14:41",
    "updated_at": "2026-04-09 13:29:55"
  },
  {
    "id": 3,
    "period_year": 2026,
    "period_month": 3,
    "run_type": "เงินเดือน",
    "run_name": "งวดปกติ",
    "date_start": "2026-02-25",
    "date_end": "2026-03-26",
    "status": "published",
    "created_by": 29,
    "published_by": 29,
    "published_at": "2026-04-10 18:07:37",
    "created_at": "2026-04-01 11:44:51",
    "updated_at": "2026-04-10 18:07:37"
  },
  {
    "id": 4,
    "period_year": 2026,
    "period_month": 4,
    "run_type": "เงินเดือน",
    "run_name": "งวดปกติ",
    "date_start": "2026-03-27",
    "date_end": "2026-04-27",
    "status": "draft",
    "created_by": 29,
    "published_by": null,
    "published_at": null,
    "created_at": "2026-04-23 10:58:59",
    "updated_at": "2026-04-23 10:58:59"
  }
]
```
