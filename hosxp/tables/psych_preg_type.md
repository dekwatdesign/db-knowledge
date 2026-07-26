# `psych_preg_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_preg_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_preg_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_preg_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psych_preg_type_id": 1,
    "psych_preg_type_name": "ปกติ",
    "active": null
  },
  {
    "psych_preg_type_id": 2,
    "psych_preg_type_name": "มีความผิดปกติทางกาย",
    "active": null
  },
  {
    "psych_preg_type_id": 3,
    "psych_preg_type_name": "ใช้ยา สารเสพติด",
    "active": null
  },
  {
    "psych_preg_type_id": 4,
    "psych_preg_type_name": "ไม่สบายใจระหว่างที่ตั้งครรภ์",
    "active": null
  }
]
```
