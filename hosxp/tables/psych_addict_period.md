# `psych_addict_period`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_addict_period_id | int(11) | NO | PRI | 0 |  |  |
| psych_addict_period_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_addict_period_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psych_addict_period_id": 1,
    "psych_addict_period_name": "ก่อน 3 เดือนที่ผ่านมา",
    "active": null
  },
  {
    "psych_addict_period_id": 2,
    "psych_addict_period_name": "ช่วง 3 เดือนที่ผ่านมา",
    "active": null
  }
]
```
