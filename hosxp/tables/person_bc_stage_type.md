# `person_bc_stage_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_stage_type_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_stage_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_stage_type_name | person_bc_stage_type_name | yes | 1 |
| PRIMARY | person_bc_stage_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "person_bc_stage_type_id": 1,
    "person_bc_stage_type_name": "Stage 0 (Ca in situ )",
    "hos_guid": null
  },
  {
    "person_bc_stage_type_id": 2,
    "person_bc_stage_type_name": "Stage1",
    "hos_guid": null
  },
  {
    "person_bc_stage_type_id": 3,
    "person_bc_stage_type_name": "Stage2",
    "hos_guid": null
  },
  {
    "person_bc_stage_type_id": 4,
    "person_bc_stage_type_name": "Stage 3",
    "hos_guid": null
  },
  {
    "person_bc_stage_type_id": 5,
    "person_bc_stage_type_name": "Stage4",
    "hos_guid": null
  },
  {
    "person_bc_stage_type_id": 6,
    "person_bc_stage_type_name": "ไม่ระบุ Stage",
    "hos_guid": null
  }
]
```
