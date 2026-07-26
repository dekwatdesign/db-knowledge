# `health_med_doctor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_doctor_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_doctor_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_doctor_type_name | health_med_doctor_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_doctor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "health_med_doctor_type_id": 1,
    "health_med_doctor_type_name": "มีใบประกอบวิชาชีพ",
    "hos_guid": null
  },
  {
    "health_med_doctor_type_id": 2,
    "health_med_doctor_type_name": "ไม่มีใบประกอบวิชาชีพ",
    "hos_guid": null
  }
]
```
