# `ems_conscious_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_conscious_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_conscious_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_conscious_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_conscious_type_name | ems_conscious_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_conscious_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ems_conscious_type_id": 1,
    "ems_conscious_type_name": "รู้สึกตัวดี",
    "ems_conscious_type_code": null,
    "hos_guid": null
  },
  {
    "ems_conscious_type_id": 2,
    "ems_conscious_type_name": "ซึม",
    "ems_conscious_type_code": null,
    "hos_guid": null
  },
  {
    "ems_conscious_type_id": 3,
    "ems_conscious_type_name": "หมดสติปลุกตื่น",
    "ems_conscious_type_code": null,
    "hos_guid": null
  },
  {
    "ems_conscious_type_id": 4,
    "ems_conscious_type_name": "หมดสติปลุกไม่ตื่น",
    "ems_conscious_type_code": null,
    "hos_guid": null
  },
  {
    "ems_conscious_type_id": 5,
    "ems_conscious_type_name": "เอะอะโวยวาย",
    "ems_conscious_type_code": null,
    "hos_guid": null
  }
]
```
