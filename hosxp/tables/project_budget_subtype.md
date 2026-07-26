# `project_budget_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_budget_subtype_id | int(11) | NO | PRI | 0 |  |  |
| project_budget_subtype_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_budget_subtype_name | project_budget_subtype_name | yes | 1 |
| PRIMARY | project_budget_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "project_budget_subtype_id": 1,
    "project_budget_subtype_name": "งบบุคลากร"
  },
  {
    "project_budget_subtype_id": 2,
    "project_budget_subtype_name": "งบดำเนินงาน"
  },
  {
    "project_budget_subtype_id": 3,
    "project_budget_subtype_name": "งบลงทุน"
  },
  {
    "project_budget_subtype_id": 4,
    "project_budget_subtype_name": "งบเงินอุดหนุน"
  },
  {
    "project_budget_subtype_id": 5,
    "project_budget_subtype_name": "งบรายจ่ายอื่นๆ"
  }
]
```
