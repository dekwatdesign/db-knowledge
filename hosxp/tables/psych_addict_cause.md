# `psych_addict_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_addict_cause_id | int(11) | NO | PRI | 0 |  |  |
| psych_addict_cause_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_addict_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "psych_addict_cause_id": 1,
    "psych_addict_cause_name": "เพื่อนชวน",
    "active": null
  },
  {
    "psych_addict_cause_id": 2,
    "psych_addict_cause_name": "อยากลอง",
    "active": null
  },
  {
    "psych_addict_cause_id": 3,
    "psych_addict_cause_name": "ความสนุกสนาน",
    "active": null
  },
  {
    "psych_addict_cause_id": 4,
    "psych_addict_cause_name": "ทำให้หายป่วย",
    "active": null
  },
  {
    "psych_addict_cause_id": 5,
    "psych_addict_cause_name": "ไม่สบายใจ",
    "active": null
  },
  {
    "psych_addict_cause_id": 6,
    "psych_addict_cause_name": "ช่วยงานอาชีพ",
    "active": null
  },
  {
    "psych_addict_cause_id": 7,
    "psych_addict_cause_name": "อื่นๆ",
    "active": null
  }
]
```
