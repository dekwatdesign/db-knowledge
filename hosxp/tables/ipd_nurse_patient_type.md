# `ipd_nurse_patient_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_patient_type_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_patient_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_patient_type_name | ipd_nurse_patient_type_name | yes | 1 |
| PRIMARY | ipd_nurse_patient_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ipd_nurse_patient_type_id": 1,
    "ipd_nurse_patient_type_name": "พักฟื้น"
  },
  {
    "ipd_nurse_patient_type_id": 2,
    "ipd_nurse_patient_type_name": "อาการหนักปานกลาง"
  },
  {
    "ipd_nurse_patient_type_id": 3,
    "ipd_nurse_patient_type_name": "อาการหนัก"
  },
  {
    "ipd_nurse_patient_type_id": 4,
    "ipd_nurse_patient_type_name": "อาการหนักมาก"
  },
  {
    "ipd_nurse_patient_type_id": 0,
    "ipd_nurse_patient_type_name": null
  }
]
```
