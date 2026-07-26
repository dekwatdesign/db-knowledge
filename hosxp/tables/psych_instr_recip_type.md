# `psych_instr_recip_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_instr_recip_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_instr_recip_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_instr_recip_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_instr_recip_type_id": 1,
    "psych_instr_recip_type_name": "ผู้ป่วย",
    "active": null
  },
  {
    "psych_instr_recip_type_id": 2,
    "psych_instr_recip_type_name": "ญาติ",
    "active": null
  },
  {
    "psych_instr_recip_type_id": 3,
    "psych_instr_recip_type_name": "อื่นๆ",
    "active": null
  }
]
```
