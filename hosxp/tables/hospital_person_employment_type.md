# `hospital_person_employment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_employment_type_id | int(11) | NO | PRI | 0 |  |  |
| hospital_person_employment_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_person_employment_type_name | hospital_person_employment_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_employment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "hospital_person_employment_type_id": 1,
    "hospital_person_employment_type_name": "ข้าร้าชการ",
    "hos_guid": null
  },
  {
    "hospital_person_employment_type_id": 2,
    "hospital_person_employment_type_name": "ลูกจ้างประจำ",
    "hos_guid": null
  },
  {
    "hospital_person_employment_type_id": 3,
    "hospital_person_employment_type_name": "ลูกจ้างชั่วคราว",
    "hos_guid": null
  }
]
```
