# `patient_hhc_medication_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_medication_group_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_medication_group_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_medication_group_name | patient_hhc_medication_group_name | yes | 1 |
| PRIMARY | patient_hhc_medication_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_hhc_medication_group_id": 1,
    "patient_hhc_medication_group_name": "ยาเบาหวาน",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 2,
    "patient_hhc_medication_group_name": "ยาความดัน",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 3,
    "patient_hhc_medication_group_name": "ยาลดไขมัน",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 4,
    "patient_hhc_medication_group_name": "ยาโรคหัวใจ",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 5,
    "patient_hhc_medication_group_name": "ยาป้องกันหลอดเลือดอุดตัน",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 6,
    "patient_hhc_medication_group_name": "ยาโรคหอบหืด",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 7,
    "patient_hhc_medication_group_name": "ยาแก้อักเสบ/ฆ่าเชื้อ",
    "hos_guid": null
  },
  {
    "patient_hhc_medication_group_id": 8,
    "patient_hhc_medication_group_name": "ยาแก้ปวด",
    "hos_guid": null
  }
]
```
