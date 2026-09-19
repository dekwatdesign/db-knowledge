# `work_plan_kpi_approval_templates`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| template_key | varchar(100) | NO | UNI | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| is_default | char(1) | NO |  | N |  |  |
| is_active | char(1) | NO |  | Y |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_plan_kpi_approval_template | template_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "template_key": "default",
    "title": "อนุมัติการเปลี่ยนแปลง KPI",
    "is_default": "Y",
    "is_active": "Y",
    "created_at": "2026-04-25 00:09:13",
    "updated_at": "2026-04-25 00:09:13"
  }
]
```
