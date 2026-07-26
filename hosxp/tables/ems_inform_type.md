# `ems_inform_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_inform_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_inform_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ems_inform_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_inform_type_name | ems_inform_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_inform_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ems_inform_type_id": 1,
    "ems_inform_type_name": "โทรศัพท์หมายเลข 1669  โดยตรง",
    "ems_inform_type_code": null,
    "hos_guid": null
  },
  {
    "ems_inform_type_id": 2,
    "ems_inform_type_name": "โทรศัพท์หมายเลข 1669  ผ่านบุคคล/หน่วยงาน อื่นๆ",
    "ems_inform_type_code": null,
    "hos_guid": null
  },
  {
    "ems_inform_type_id": 3,
    "ems_inform_type_name": "โทรศัพท์หมายเลขอื่นๆ",
    "ems_inform_type_code": null,
    "hos_guid": null
  },
  {
    "ems_inform_type_id": 4,
    "ems_inform_type_name": "วิทยุสื่อสาร",
    "ems_inform_type_code": null,
    "hos_guid": null
  },
  {
    "ems_inform_type_id": 5,
    "ems_inform_type_name": "วิธีอื่นๆ",
    "ems_inform_type_code": null,
    "hos_guid": null
  }
]
```
