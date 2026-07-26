# `psych_doctor_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_doctor_position_id | int(11) | NO | PRI | 0 |  |  |
| psych_doctor_position_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_doctor_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psych_doctor_position_id": 1,
    "psych_doctor_position_name": "ผู้รักษา",
    "active": null
  },
  {
    "psych_doctor_position_id": 2,
    "psych_doctor_position_name": "ผู้ช่วยรักษา",
    "active": null
  }
]
```
