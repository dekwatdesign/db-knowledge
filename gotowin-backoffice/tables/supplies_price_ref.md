# `supplies_price_ref`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PRICE_REF_ID | int | NO | PRI | NULL | auto_increment |  |
| PRICE_REF_NAME | varchar(50) | YES |  |  |  |  |
| DEFALTS | enum('True','False') | YES |  | False |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | PRICE_REF_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "PRICE_REF_ID": 1,
    "PRICE_REF_NAME": "สำนักงบประมาณ",
    "DEFALTS": "False",
    "updated_at": "2022-01-19 07:50:10",
    "created_at": null
  },
  {
    "PRICE_REF_ID": 2,
    "PRICE_REF_NAME": "ราคาซื้อล่าสุด",
    "DEFALTS": "True",
    "updated_at": null,
    "created_at": null
  }
]
```
