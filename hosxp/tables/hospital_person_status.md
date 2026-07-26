# `hospital_person_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_status_id | int(11) | NO | PRI | 0 |  |  |
| hospital_person_status_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_person_status_name | hospital_person_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "hospital_person_status_id": 1,
    "hospital_person_status_name": "ทำงานประจำ",
    "hos_guid": null
  },
  {
    "hospital_person_status_id": 2,
    "hospital_person_status_name": "ลาศึกษาต่อ",
    "hos_guid": null
  },
  {
    "hospital_person_status_id": 3,
    "hospital_person_status_name": "ย้าย",
    "hos_guid": null
  },
  {
    "hospital_person_status_id": 4,
    "hospital_person_status_name": "ลาออก",
    "hos_guid": null
  }
]
```
