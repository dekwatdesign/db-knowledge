# `doctor_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_code | varchar(15) | NO | PRI |  |  |  |
| online_depcode | char(3) | YES |  | NULL |  |  |
| online_computer_name | varchar(100) | YES |  | NULL |  |  |
| last_active | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "doctor_code": "187",
    "online_depcode": "008",
    "online_computer_name": "A56-0114",
    "last_active": 1777474783
  },
  {
    "doctor_code": "999",
    "online_depcode": "008",
    "online_computer_name": "COM-PC",
    "last_active": 1610979648
  }
]
```
