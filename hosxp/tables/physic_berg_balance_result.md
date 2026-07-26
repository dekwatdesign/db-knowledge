# `physic_berg_balance_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_berg_balance_result_id | int(11) | NO | PRI | 0 |  |  |
| begin_value | int(11) | YES |  | NULL |  |  |
| end_value | int(11) | YES |  | NULL |  |  |
| result_name | varchar(150) | YES |  | NULL |  |  |
| result_name_en | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_berg_balance_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_berg_balance_result_id": 1,
    "begin_value": 0,
    "end_value": 20,
    "result_name": "มีความเสี่ยงในการล้มสูง",
    "result_name_en": "high fall risk"
  },
  {
    "physic_berg_balance_result_id": 2,
    "begin_value": 21,
    "end_value": 40,
    "result_name": "มีความเสี่ยงในการล้มปานกลาง",
    "result_name_en": "medium fall risk"
  },
  {
    "physic_berg_balance_result_id": 3,
    "begin_value": 41,
    "end_value": 56,
    "result_name": "มีความเสี่ยงในการล้มต่ำ",
    "result_name_en": "low fall risk"
  }
]
```
