# `psych_addict_use`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_addict_use_id | int(11) | NO | PRI | 0 |  |  |
| psych_addict_use_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_addict_use_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_addict_use_id": 1,
    "psych_addict_use_name": "ใช้สารเสพติด",
    "active": null
  },
  {
    "psych_addict_use_id": 2,
    "psych_addict_use_name": "ไม่ใช้สารเสพติด",
    "active": null
  },
  {
    "psych_addict_use_id": 3,
    "psych_addict_use_name": "เลิกใช้สารเสพติด",
    "active": null
  }
]
```
