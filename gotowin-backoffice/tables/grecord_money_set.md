# `grecord_money_set`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MONEY_ID | int | NO | PRI | NULL | auto_increment |  |
| MONEY_NAME | varchar(255) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MONEY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "MONEY_ID": 1,
    "MONEY_NAME": "ค่าเบี้ยเลี้ยง"
  },
  {
    "MONEY_ID": 2,
    "MONEY_NAME": "ค่าที่พัก"
  },
  {
    "MONEY_ID": 3,
    "MONEY_NAME": "ค่ายานพาหนะ"
  },
  {
    "MONEY_ID": 4,
    "MONEY_NAME": "ค่าลงทะเบียน"
  }
]
```
