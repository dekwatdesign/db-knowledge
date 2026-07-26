# `patient_family_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_family_status_id | int(11) | NO | PRI | 0 |  |  |
| patient_family_status_name | varchar(200) | YES | UNI | NULL |  |  |
| person_house_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_family_status_name | patient_family_status_name | yes | 1 |
| PRIMARY | patient_family_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_family_status_id": 0,
    "patient_family_status_name": "ไม่ทราบ",
    "person_house_position_id": null
  },
  {
    "patient_family_status_id": 1,
    "patient_family_status_name": "เจ้าบ้าน",
    "person_house_position_id": null
  },
  {
    "patient_family_status_id": 2,
    "patient_family_status_name": "ผู้อาศัย",
    "person_house_position_id": null
  }
]
```
