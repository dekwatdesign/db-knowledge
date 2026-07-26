# `person_bc_correct_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_correct_type_id | int(11) | YES |  | NULL |  |  |
| person_bc_correct_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_person_bc_correct_type_name | person_bc_correct_type_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_bc_correct_type_id": 1,
    "person_bc_correct_type_name": "ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_bc_correct_type_id": 3,
    "person_bc_correct_type_name": "ไม่ได้ตรวจเต้านม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "person_bc_correct_type_id": 2,
    "person_bc_correct_type_name": "ไม่ถูกต้อง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
