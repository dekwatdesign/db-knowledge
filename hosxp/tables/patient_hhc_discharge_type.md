# `patient_hhc_discharge_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_discharge_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_discharge_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_hhc_discharge_type_name | patient_hhc_discharge_type_name | yes | 1 |
| PRIMARY | patient_hhc_discharge_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_hhc_discharge_type_id": 1,
    "patient_hhc_discharge_type_name": "ช่วยเหลือตนเองได้ (Independent)",
    "hos_guid": null
  },
  {
    "patient_hhc_discharge_type_id": 2,
    "patient_hhc_discharge_type_name": "ช่วยเหลือตนเองได้บ้าง ต้องมีผู้ช่วยเหลือบางส่วน (Partial dependent)",
    "hos_guid": null
  },
  {
    "patient_hhc_discharge_type_id": 3,
    "patient_hhc_discharge_type_name": "ไม่สามารถช่วยเหลือตนเองได้ ต้องมีผู้ช่วยเหลือทั้งหมด (Total dependent)",
    "hos_guid": null
  }
]
```
