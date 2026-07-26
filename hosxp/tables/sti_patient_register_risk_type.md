# `sti_patient_register_risk_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_risk_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_risk_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_register_risk_type_name | sti_patient_register_risk_type_name | yes | 1 |
| PRIMARY | sti_patient_register_risk_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "sti_patient_register_risk_type_id": 1,
    "sti_patient_register_risk_type_name": "มีเพศสัมพันธ์กับหญิง/ชาย ให้บริการทางเพศ โดยไม่ใช้ถุงยางอนามัย",
    "hos_guid": null
  },
  {
    "sti_patient_register_risk_type_id": 2,
    "sti_patient_register_risk_type_name": "มีคู่เพศสัมพันธ์มากกว่า 1 คน",
    "hos_guid": null
  },
  {
    "sti_patient_register_risk_type_id": 3,
    "sti_patient_register_risk_type_name": "มีคู่เพศสัมพันธ์คนใหม่",
    "hos_guid": null
  },
  {
    "sti_patient_register_risk_type_id": 4,
    "sti_patient_register_risk_type_name": "มีคู่เพศสัมพันธ์เป็นโรคติดต่อทางเพศสัมพันธ์",
    "hos_guid": null
  },
  {
    "sti_patient_register_risk_type_id": 5,
    "sti_patient_register_risk_type_name": "มีเพศสัมพันธ์โดยไม่ใช้ถุงยางอนามัย หรือถุงยางอนามัยแตก รั่ว หลุด",
    "hos_guid": null
  }
]
```
