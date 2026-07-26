# `physic_doctor_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_doctor_position_id | int(11) | NO | PRI | 0 |  |  |
| physic_doctor_position_name | varchar(255) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_doctor_position_name | physic_doctor_position_name | no | 1 |
| PRIMARY | physic_doctor_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "physic_doctor_position_id": 1,
    "physic_doctor_position_name": "ผู้รักษา",
    "active_status": null
  },
  {
    "physic_doctor_position_id": 2,
    "physic_doctor_position_name": "ผู้ช่วยเหลือ",
    "active_status": null
  },
  {
    "physic_doctor_position_id": 3,
    "physic_doctor_position_name": "ผู้รับส่งผู้ป่วย",
    "active_status": null
  }
]
```
