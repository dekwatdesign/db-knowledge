# `hospital_person_education`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_education_id | int(11) | NO | PRI | 0 |  |  |
| hospital_person_education_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_person_education_name | hospital_person_education_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_education_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "hospital_person_education_id": 1,
    "hospital_person_education_name": "ต่ำกว่าปริญญาตรี",
    "hos_guid": null
  },
  {
    "hospital_person_education_id": 2,
    "hospital_person_education_name": "ปริญญาตรี",
    "hos_guid": null
  },
  {
    "hospital_person_education_id": 3,
    "hospital_person_education_name": "ปริญญาโท",
    "hos_guid": null
  },
  {
    "hospital_person_education_id": 4,
    "hospital_person_education_name": "ปริญญาเอก",
    "hos_guid": null
  }
]
```
