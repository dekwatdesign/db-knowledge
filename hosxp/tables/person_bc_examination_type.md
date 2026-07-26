# `person_bc_examination_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_examination_type_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_examination_type_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_bc_examination_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_bc_examination_type_id": 1,
    "person_bc_examination_type_name": "สม่ำเสมอทุกเดือน",
    "hos_guid": null
  },
  {
    "person_bc_examination_type_id": 2,
    "person_bc_examination_type_name": "ไม่สม่ำเสมอทุกเดือน",
    "hos_guid": null
  },
  {
    "person_bc_examination_type_id": 3,
    "person_bc_examination_type_name": "ไม่ได้ตรวจเต้านม",
    "hos_guid": null
  }
]
```
