# `work_plan_export_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| template_id | int | YES | MUL | NULL |  |  |
| export_type | varchar(80) | NO |  | custom |  |  |
| format | varchar(20) | NO |  | xlsx |  |  |
| filters_json | longtext | YES |  | NULL |  |  |
| file_name | varchar(255) | YES |  | NULL |  |  |
| status | enum('success','error','queued') | NO |  | success |  |  |
| message | text | YES |  | NULL |  |  |
| created_by | int | YES | MUL | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_export_created | created_by | no | 1 |
| idx_plan_export_created | created_at | no | 2 |
| idx_plan_export_template | template_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "template_id": 2,
    "export_type": "kpi",
    "format": "csv",
    "filters_json": "{\"status\":\"active\",\"owner_type\":\"all\",\"category_id\":0,\"dimension_key\":\"\",\"search\":\"\"}",
    "file_name": "plan_kpi_20260425_171606.csv",
    "status": "success",
    "message": null,
    "created_by": 253,
    "created_at": "2026-04-25 17:16:06"
  }
]
```
