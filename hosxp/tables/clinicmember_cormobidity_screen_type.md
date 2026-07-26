# `clinicmember_cormobidity_screen_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_cormobidity_screen_type_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_cormobidity_screen_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hospital_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_cormobidity_screen_type_name | clinicmember_cormobidity_screen_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_cormobidity_screen_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "clinicmember_cormobidity_screen_type_id": 1,
    "clinicmember_cormobidity_screen_type_name": "ตรวจตา",
    "hospital_type_id": 1,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 2,
    "clinicmember_cormobidity_screen_type_name": "ตรวจเท้า",
    "hospital_type_id": 1,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 3,
    "clinicmember_cormobidity_screen_type_name": "ตรวจไต",
    "hospital_type_id": 2,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 4,
    "clinicmember_cormobidity_screen_type_name": "ตรวจ Cardio vascular",
    "hospital_type_id": 2,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 5,
    "clinicmember_cormobidity_screen_type_name": "ตรวจ Cerebro vascular",
    "hospital_type_id": 2,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 6,
    "clinicmember_cormobidity_screen_type_name": "ตรวจ Peripheral vascular",
    "hospital_type_id": 2,
    "hos_guid": null
  },
  {
    "clinicmember_cormobidity_screen_type_id": 7,
    "clinicmember_cormobidity_screen_type_name": "ตรวจฟัน (ปริทันต์)",
    "hospital_type_id": 1,
    "hos_guid": null
  }
]
```
