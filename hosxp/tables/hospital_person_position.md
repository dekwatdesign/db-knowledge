# `hospital_person_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_person_position_id | int(11) | NO | PRI | 0 |  |  |
| hospital_person_position_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_person_position_name | hospital_person_position_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_person_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hospital_person_position_id": 1,
    "hospital_person_position_name": "ปฏิบัติงาน",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 2,
    "hospital_person_position_name": "ปฏิบัติการ",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 3,
    "hospital_person_position_name": "ชำนาญการ",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 4,
    "hospital_person_position_name": "ชำนาญการพิเศษ",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 5,
    "hospital_person_position_name": "เชี่ยวชาญ",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 6,
    "hospital_person_position_name": "ชำนาญงาน",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 7,
    "hospital_person_position_name": "อาวุโส",
    "hos_guid": null
  },
  {
    "hospital_person_position_id": 8,
    "hospital_person_position_name": "ระดับต้น",
    "hos_guid": null
  }
]
```
