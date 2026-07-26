# `psych_addict_frequency`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_addict_frequency_id | int(11) | NO | PRI | 0 |  |  |
| psych_addict_frequency_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_addict_frequency_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "psych_addict_frequency_id": 1,
    "psych_addict_frequency_name": "ไม่เคย",
    "active": null
  },
  {
    "psych_addict_frequency_id": 2,
    "psych_addict_frequency_name": "เพียง 1-2 ครั้ง",
    "active": null
  },
  {
    "psych_addict_frequency_id": 3,
    "psych_addict_frequency_name": "เดือนละ 1-3 ครั้ง",
    "active": null
  },
  {
    "psych_addict_frequency_id": 4,
    "psych_addict_frequency_name": "สัปดาห์ละ 1-4 ครั้ง",
    "active": null
  },
  {
    "psych_addict_frequency_id": 5,
    "psych_addict_frequency_name": "เกือบทุกวัน (สัปดาห์ 5-7)",
    "active": null
  }
]
```
