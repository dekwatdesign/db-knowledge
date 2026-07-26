# `patient_relation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_relation_type_id | int(11) | NO | PRI | 0 |  |  |
| patient_relation_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_relation_type_name | patient_relation_type_name | yes | 1 |
| PRIMARY | patient_relation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_relation_type_id": 1,
    "patient_relation_type_name": "บิดา",
    "hos_guid": null
  },
  {
    "patient_relation_type_id": 2,
    "patient_relation_type_name": "มารดา",
    "hos_guid": null
  },
  {
    "patient_relation_type_id": 3,
    "patient_relation_type_name": "คู่สมรส",
    "hos_guid": null
  },
  {
    "patient_relation_type_id": 4,
    "patient_relation_type_name": "ผู้แจ้ง",
    "hos_guid": null
  }
]
```
