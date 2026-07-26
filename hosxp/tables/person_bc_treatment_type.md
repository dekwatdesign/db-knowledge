# `person_bc_treatment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_treatment_type_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_treatment_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_treatment_type_name | person_bc_treatment_type_name | yes | 1 |
| PRIMARY | person_bc_treatment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "person_bc_treatment_type_id": 1,
    "person_bc_treatment_type_name": "Surgery - Breast Conservation Surgery",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 2,
    "person_bc_treatment_type_name": "Surgery - Modified Radical Mastectomy (MRM)",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 3,
    "person_bc_treatment_type_name": "Surgery - ผ่าตัดอื่นๆ",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 4,
    "person_bc_treatment_type_name": "Radiation",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 5,
    "person_bc_treatment_type_name": "Chemo therapy",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 6,
    "person_bc_treatment_type_name": "Hormone therapy",
    "hos_guid": null
  },
  {
    "person_bc_treatment_type_id": 7,
    "person_bc_treatment_type_name": "Targeted therapy",
    "hos_guid": null
  }
]
```
