# `ems_wound_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ems_wound_type_id | int(11) | NO | PRI | 0 |  |  |
| ems_wound_type_name | varchar(100) | YES | UNI | NULL |  |  |
| ems_wound_type_code | varchar(10) | YES |  | NULL |  |  |
| ems_wound_type_level_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ems_wound_type_name | ems_wound_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ems_wound_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ems_wound_type_id": 1,
    "ems_wound_type_name": "แผลถลอก.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 2,
    "ems_wound_type_name": "ฉีกขาด.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 3,
    "ems_wound_type_name": "ของมีคม.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 4,
    "ems_wound_type_name": "ถูกแทง.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 5,
    "ems_wound_type_name": "ถูกยิง.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 6,
    "ems_wound_type_name": "ฟกซ้ำ.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 7,
    "ems_wound_type_name": "เลือดออกมาก.",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 1,
    "hos_guid": null
  },
  {
    "ems_wound_type_id": 8,
    "ems_wound_type_name": "ไม่มีบาดแผล..",
    "ems_wound_type_code": null,
    "ems_wound_type_level_id": 2,
    "hos_guid": null
  }
]
```
