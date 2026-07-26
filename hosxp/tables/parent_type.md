# `parent_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| parent_type_id | int(11) | NO | PRI | 0 |  |  |
| parent_type_name | varchar(100) | YES | UNI | NULL |  |  |
| parent_type_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_parent_type_name | parent_type_name | yes | 1 |
| PRIMARY | parent_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "parent_type_id": 1,
    "parent_type_name": "บิดา",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 2,
    "parent_type_name": "มารดา",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 3,
    "parent_type_name": "พี่",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 4,
    "parent_type_name": "น้อง",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 5,
    "parent_type_name": "ปู่",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 6,
    "parent_type_name": "ย่า",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 7,
    "parent_type_name": "ตา",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "parent_type_id": 8,
    "parent_type_name": "ยาย",
    "parent_type_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
