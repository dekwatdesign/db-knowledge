# `grecord_withdraw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| WITHDRAW_ID | int | NO | PRI | NULL | auto_increment |  |
| WITHDRAW_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | WITHDRAW_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "WITHDRAW_ID": 1,
    "WITHDRAW_NAME": "ไม่ประสงค์เบิกค่าใช้จ่าย"
  },
  {
    "WITHDRAW_ID": 2,
    "WITHDRAW_NAME": "เบิกจากเงินบำรุง"
  },
  {
    "WITHDRAW_ID": 3,
    "WITHDRAW_NAME": "เบิกจากเงินงบประมาณ"
  },
  {
    "WITHDRAW_ID": 4,
    "WITHDRAW_NAME": "เบิกจากผู้จัด"
  }
]
```
