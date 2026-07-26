# `nhso_fee_schedule_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_fee_schedule_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_fee_schedule_type_name | varchar(200) | YES | UNI | NULL |  |  |
| nhso_fee_schedule_type_code | varchar(20) | YES |  | NULL |  |  |
| age_y_min | int(11) | YES |  | NULL |  |  |
| age_y_max | int(11) | YES |  | NULL |  |  |
| nhso_fee_schedule_type_group | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_fee_schedule_type_name | nhso_fee_schedule_type_name | yes | 1 |
| PRIMARY | nhso_fee_schedule_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_fee_schedule_type_id": 1,
    "nhso_fee_schedule_type_name": "บริการการตรวจคัดกรองมะเร็งปากมดลูก",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 2,
    "nhso_fee_schedule_type_name": "บริการฝากครรภ์",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 3,
    "nhso_fee_schedule_type_name": "บริการการป้องกันและควบคุมโรคโลหิตจางธาลัสซีเมียในหญิงตั้งครรภ์",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 4,
    "nhso_fee_schedule_type_name": "บริการป้องกันและควบคุมกลุ่มอาการดาวน์ในหญิงตั้งครรภ์",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 5,
    "nhso_fee_schedule_type_name": "บริการป้องกันและควบคุมภาวะพร่องฮอร์โมนไทรอยด์ (TSH) และ โรคฟินิลคีโตนูเรีย (PKU) ในเด็กแรกเกิด",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 6,
    "nhso_fee_schedule_type_name": "บริการป้องกัน การยุติการตั้งครรภ์ที่ไม่ปลอดภัย",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 7,
    "nhso_fee_schedule_type_name": "บริการแว่นตาเด็กที่มีสายตาผิดปกติ",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  },
  {
    "nhso_fee_schedule_type_id": 8,
    "nhso_fee_schedule_type_name": "บริการตรวจคัดกรองและค้นหาวัณโรคในกลุ่มเสี่ยงสูง",
    "nhso_fee_schedule_type_code": null,
    "age_y_min": null,
    "age_y_max": null,
    "nhso_fee_schedule_type_group": null
  }
]
```
