# `supplies_material_plan_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_MATERIAL_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| ID_SUP_TYPE | int | NO |  | NULL |  |  |
| SUP_MATERIAL_VALUE | varchar(350) | YES |  | NULL |  |  |
| DATE_SAVE | date | NO |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| BUDGET_YEAR_MATERIAL | varchar(250) | YES |  | NULL |  |  |
| PLAN_SUPPLIES_ID_YEAR | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUP_MATERIAL_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SUP_MATERIAL_ID": 1,
    "ID_SUP_TYPE": 12,
    "SUP_MATERIAL_VALUE": "1",
    "DATE_SAVE": "2022-10-03",
    "updated_at": "2022-10-03 15:55:45",
    "created_at": "2022-10-03 15:55:52",
    "BUDGET_YEAR_MATERIAL": "2566",
    "PLAN_SUPPLIES_ID_YEAR": null
  }
]
```
