# `sti_patient_register_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_cause_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_register_cause_type_name | sti_patient_register_cause_type_name | yes | 1 |
| PRIMARY | sti_patient_register_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sti_patient_register_cause_type_id": 1,
    "sti_patient_register_cause_type_name": "ตรวจสุขภาพ",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 2,
    "sti_patient_register_cause_type_name": "มีอาการผิดปกติ",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 3,
    "sti_patient_register_cause_type_name": "คู่เพศสัมพันธ์ส่งตรวจ/คู่เพศสัมพันธ์มีอาการ",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 4,
    "sti_patient_register_cause_type_name": "ข้อบังคับของสถานบริการ (ระบุชื่อ)",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 5,
    "sti_patient_register_cause_type_name": "ใบติดตามผู้สัมผัส (ระบุเลขที่)",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 6,
    "sti_patient_register_cause_type_name": "ติดตามผลการรักษา",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 7,
    "sti_patient_register_cause_type_name": "ฟังผลตรวจทางห้องปฏิบัติการ",
    "hos_guid": null
  },
  {
    "sti_patient_register_cause_type_id": 8,
    "sti_patient_register_cause_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
