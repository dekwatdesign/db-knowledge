# `supplies_budget`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| BUDGET_ID | int | NO | PRI | NULL | auto_increment |  |
| BUDGET_NAME | varchar(50) | YES |  |  |  |  |
| BUDGET_NUM | varchar(10) | YES | UNI |  |  |  |
| ACTIVE | enum('True','False') | YES |  | False |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_BUDGET_ID | BUDGET_ID | no | 1 |
| IX_BUDGET_NUM | BUDGET_NUM | yes | 1 |
| PRIMARY | BUDGET_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "BUDGET_ID": 1,
    "BUDGET_NAME": "งบประมาณ",
    "BUDGET_NUM": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "BUDGET_ID": 2,
    "BUDGET_NAME": "เงิน UC",
    "BUDGET_NUM": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "BUDGET_ID": 3,
    "BUDGET_NAME": "เงินบำรุง",
    "BUDGET_NUM": null,
    "ACTIVE": "True",
    "updated_at": "2019-09-11 11:16:10",
    "created_at": null
  },
  {
    "BUDGET_ID": 4,
    "BUDGET_NAME": "เงินบริจาค",
    "BUDGET_NUM": null,
    "ACTIVE": "True",
    "updated_at": null,
    "created_at": null
  },
  {
    "BUDGET_ID": 5,
    "BUDGET_NAME": "เงินอื่นๆ",
    "BUDGET_NUM": null,
    "ACTIVE": "False",
    "updated_at": null,
    "created_at": null
  },
  {
    "BUDGET_ID": 6,
    "BUDGET_NAME": "เงินค่าบริการทางการแพทย์ที่เบิกจ่ายในลักษณะงบลงทุน",
    "BUDGET_NUM": "",
    "ACTIVE": "False",
    "updated_at": null,
    "created_at": null
  }
]
```
