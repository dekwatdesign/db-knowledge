# `hospital_person_field`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_field_id | int(11) | NO | PRI | 0 |  |  |
| hospital_person_field_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_person_field_name | hospital_person_field_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_field_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hospital_person_field_id": 1,
    "hospital_person_field_name": "แพทย์",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 2,
    "hospital_person_field_name": "ทันตแพทย์",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 3,
    "hospital_person_field_name": "เภสัชกร",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 4,
    "hospital_person_field_name": "พยาบาลวิชาชีพ",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 5,
    "hospital_person_field_name": "วิสัญญีพยาบาล",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 6,
    "hospital_person_field_name": "นักวิชาการสาธารณสุข",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 7,
    "hospital_person_field_name": "นักจัดการบริหารงานทั่วไป",
    "hos_guid": null
  },
  {
    "hospital_person_field_id": 8,
    "hospital_person_field_name": "เจ้าหน้าที่บริหารงานสาธารณสุขชุมชน",
    "hos_guid": null
  }
]
```
