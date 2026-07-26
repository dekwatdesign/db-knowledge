# `sti_patient_register_condom_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_condom_type_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_condom_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sti_patient_register_condom_type_name | sti_patient_register_condom_type_name | yes | 1 |
| PRIMARY | sti_patient_register_condom_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "sti_patient_register_condom_type_id": 1,
    "sti_patient_register_condom_type_name": "#49",
    "hos_guid": null
  },
  {
    "sti_patient_register_condom_type_id": 2,
    "sti_patient_register_condom_type_name": "#52",
    "hos_guid": null
  },
  {
    "sti_patient_register_condom_type_id": 3,
    "sti_patient_register_condom_type_name": "#54",
    "hos_guid": null
  },
  {
    "sti_patient_register_condom_type_id": 4,
    "sti_patient_register_condom_type_name": "#อื่นๆ",
    "hos_guid": null
  },
  {
    "sti_patient_register_condom_type_id": 5,
    "sti_patient_register_condom_type_name": "สารหล่อลื่น",
    "hos_guid": null
  }
]
```
