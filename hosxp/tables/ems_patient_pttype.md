# `ems_patient_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_patient_pttype_id | int(11) | NO | PRI | 0 |  |  |
| ems_patient_pttype_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_patient_pttype_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_patient_pttype_name | ems_patient_pttype_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_patient_pttype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "ems_patient_pttype_id": 1,
    "ems_patient_pttype_name": "บัตรทอง",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 2,
    "ems_patient_pttype_name": "ข้าราชการ",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 3,
    "ems_patient_pttype_name": "ประกันสังคม",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 4,
    "ems_patient_pttype_name": "แรงงานต่างด้าวขึ้นทะเบียน",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 5,
    "ems_patient_pttype_name": "ไม่มีหลักประกัน",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 6,
    "ems_patient_pttype_name": "ประกันชีวิต",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  },
  {
    "ems_patient_pttype_id": 7,
    "ems_patient_pttype_name": "ผู้ประสบภัยจากรถ",
    "ems_patient_pttype_code": null,
    "hos_guid": null
  }
]
```
