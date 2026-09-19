# `work_plan_kpi_periods`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| fiscal_year | smallint | NO | MUL | NULL |  |  |
| period_month | tinyint | NO |  | 0 |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| date_start | date | YES |  | NULL |  |  |
| date_end | date | YES |  | NULL |  |  |
| status | enum('open','closed') | NO | MUL | open |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_period_status | status | no | 1 |
| PRIMARY | id | yes | 1 |
| uk_plan_kpi_period | fiscal_year | yes | 1 |
| uk_plan_kpi_period | period_month | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 1,
    "fiscal_year": 2026,
    "period_month": 4,
    "title": "ปีงบประมาณ 2026 เดือน 4",
    "date_start": "2026-04-01",
    "date_end": "2026-04-30",
    "status": "open",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-04-25 00:09:47",
    "updated_at": "2026-04-25 00:09:47"
  },
  {
    "id": 2,
    "fiscal_year": 2026,
    "period_month": 6,
    "title": "ปีงบประมาณ 2026 เดือน 6",
    "date_start": "2026-06-01",
    "date_end": "2026-06-30",
    "status": "open",
    "created_by": 253,
    "updated_by": 253,
    "created_at": "2026-06-13 23:38:19",
    "updated_at": "2026-06-13 23:38:19"
  }
]
```
