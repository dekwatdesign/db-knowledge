# `village_temple_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_temple_type_id | int(11) | NO | PRI | 0 |  |  |
| village_temple_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_temple_type_name | village_temple_type_name | yes | 1 |
| PRIMARY | village_temple_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "village_temple_type_id": 1,
    "village_temple_type_name": "วัดศาสนาพุทธ",
    "hos_guid": null
  },
  {
    "village_temple_type_id": 2,
    "village_temple_type_name": "โบสถ์ศาสนาคริสต์",
    "hos_guid": null
  },
  {
    "village_temple_type_id": 3,
    "village_temple_type_name": "มัสยิดศาสนาอิสลาม",
    "hos_guid": null
  }
]
```
