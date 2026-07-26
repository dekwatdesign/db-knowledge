# `vct_patient_register_cause_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_cause_type_id | int(11) | NO | PRI | 0 |  |  |
| vct_patient_register_cause_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_cause_type_name | vct_patient_register_cause_type_name | yes | 1 |
| PRIMARY | vct_patient_register_cause_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vct_patient_register_cause_type_id": 1,
    "vct_patient_register_cause_type_name": "ตรวจสุขภาพ",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 2,
    "vct_patient_register_cause_type_name": "ตรวจก่อนการทำหัตถการ/ผ่าตัด",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 3,
    "vct_patient_register_cause_type_name": "มีพฤติกรรมเสี่ยงทางเพศสัมพันธ์ เช่น ไม่ใช้ถุงยางอนามัย หรือ แตก รั่ว หลุด",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 4,
    "vct_patient_register_cause_type_name": "การติดต่อทางเลือดจากประวัติถ่ายเลือดและปลูกถ่ายอวัยวะ",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 5,
    "vct_patient_register_cause_type_name": "การติดต่อทางเลือดจากการใช้เข็มฉีดยา กระบอกฉีดยาและอุปกรณ์ฉีดยาอื่นๆ ร่วมกัน",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 6,
    "vct_patient_register_cause_type_name": "การติดต่อทางเลือดจากสักยันต์ หรือเจาะร่างกายโดยใช้อุปกรณ์ร่วมกัน",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 7,
    "vct_patient_register_cause_type_name": "การกระจายเชื้อจากแม่สู่ลูก ก่อน/ระหว่าง การคลอด หรือ ระหว่างการเลี้ยงลูกด้วยนมแม่",
    "hos_guid": null
  },
  {
    "vct_patient_register_cause_type_id": 8,
    "vct_patient_register_cause_type_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
