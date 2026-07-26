# `person_bc_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_status_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_status_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_status_name | person_bc_status_name | yes | 1 |
| PRIMARY | person_bc_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_bc_status_id": 1,
    "person_bc_status_name": "มีชีวิต",
    "hos_guid": null
  },
  {
    "person_bc_status_id": 2,
    "person_bc_status_name": "เสียชีวิต  จากมะเร็งเต้านมหรือโรคที่สืบเนื่องจากมะเร็งเต้านม",
    "hos_guid": null
  },
  {
    "person_bc_status_id": 3,
    "person_bc_status_name": "เสียชีวิตด้วยโรคอื่นๆ",
    "hos_guid": null
  }
]
```
