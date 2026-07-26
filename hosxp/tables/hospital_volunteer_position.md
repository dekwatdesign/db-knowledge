# `hospital_volunteer_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_volunteer_position_id | int(11) | NO | PRI | 0 |  |  |
| hospital_volunteer_position_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospital_volunteer_position_name | hospital_volunteer_position_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hospital_volunteer_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "hospital_volunteer_position_id": 1,
    "hospital_volunteer_position_name": "ไม่มีตำแหน่ง",
    "hos_guid": null
  },
  {
    "hospital_volunteer_position_id": 2,
    "hospital_volunteer_position_name": "สท.",
    "hos_guid": null
  },
  {
    "hospital_volunteer_position_id": 3,
    "hospital_volunteer_position_name": "สอบต.",
    "hos_guid": null
  },
  {
    "hospital_volunteer_position_id": 4,
    "hospital_volunteer_position_name": "ผู้ใหญ่บ้าน",
    "hos_guid": null
  },
  {
    "hospital_volunteer_position_id": 5,
    "hospital_volunteer_position_name": "กำนัน",
    "hos_guid": null
  }
]
```
