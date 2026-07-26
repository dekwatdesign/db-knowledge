# `officer_task`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_task_id | int(11) | NO | PRI | 0 |  |  |
| officer_task_name | varchar(200) | YES | UNI | NULL |  |  |
| officer_task_code | varchar(100) | YES | MUL | NULL |  |  |
| officer_module_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_task_code | officer_task_code | no | 1 |
| ix_officer_task_name | officer_task_name | yes | 1 |
| PRIMARY | officer_task_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "officer_task_id": 1,
    "officer_task_name": "เวชระเบียนผู้ป่วย",
    "officer_task_code": "OPDCARD",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 2,
    "officer_task_name": "ข้อมูลเสียชีวิต",
    "officer_task_code": "PATIENT_DEATH",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 3,
    "officer_task_name": "ข้อมูลสิทธิการรักษาประจำตัว",
    "officer_task_code": "OPDCARD_PTTYPE",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 4,
    "officer_task_name": "ข้อมูลโรคเรื้อรัง",
    "officer_task_code": "CLINICMEMBER",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 5,
    "officer_task_name": "ข้อมูลบันทึกประจำตัวผู้ป่วย (Note)",
    "officer_task_code": "PATIENT_NOTE",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 6,
    "officer_task_name": "ข้อมูลการนัดหมาย",
    "officer_task_code": "APPOINTMENT",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 7,
    "officer_task_name": "ยืมแฟ้มเวชระเบียน ผู้ป่วยนอก",
    "officer_task_code": "OPDCARD_RENT",
    "officer_module_id": 1
  },
  {
    "officer_task_id": 8,
    "officer_task_name": "ยืมแฟ้มเวชระเบียน ผู้ป่วยใน",
    "officer_task_code": "IPDCARD_RENT",
    "officer_module_id": 1
  }
]
```
