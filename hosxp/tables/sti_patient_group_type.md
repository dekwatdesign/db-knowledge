# `sti_patient_group_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_group_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_group_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_group_type_name | sti_patient_group_type_name | yes | 1 |
| PRIMARY | sti_patient_group_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sti_patient_group_type_id": 1,
    "sti_patient_group_type_name": "หญิงตั้งครรภ์ (ฝากครรภ์)",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 2,
    "sti_patient_group_type_name": "หญิงตั้งครรภ์ (คลอด)",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 3,
    "sti_patient_group_type_name": "สามีหญิงตั้งครรภ์",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 4,
    "sti_patient_group_type_name": "แพทย์สงสัยมีอาการสัมพันธ์กันโรคเอดส์",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 5,
    "sti_patient_group_type_name": "ผู้ป่วยวัณโรค",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 6,
    "sti_patient_group_type_name": "มีอาการของโรคติดต่อทางเพศสัมพันธ์",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 7,
    "sti_patient_group_type_name": "เป็นคู่เพศสัมพันธ์ของผู้ที่มีอาการโรคติดต่อทางเพศสัมพันธ์",
    "hos_guid": null
  },
  {
    "sti_patient_group_type_id": 8,
    "sti_patient_group_type_name": "เป็นคู่ของผู้ติดเชื้อเอชไอวี",
    "hos_guid": null
  }
]
```
