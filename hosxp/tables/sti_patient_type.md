# `sti_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sti_patient_type_id | yes | 1 |
| sti_patient_type_name | sti_patient_type_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "sti_patient_type_id": 1,
    "sti_patient_type_name": "ชายที่มีเพศสัมพันธ์กับชาย (MSM)",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 2,
    "sti_patient_type_name": "พนักงานบริการ",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 3,
    "sti_patient_type_name": "ผู้ใช้ยาด้วยวิธีฉีด",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 4,
    "sti_patient_type_name": "แรงงานข้ามชาติ เยาวชน",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 5,
    "sti_patient_type_name": "ผู้ต้องขัง",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 6,
    "sti_patient_type_name": "เยาวชน",
    "hos_guid": null
  },
  {
    "sti_patient_type_id": 7,
    "sti_patient_type_name": "ประชาชนทั่วไป",
    "hos_guid": null
  }
]
```
