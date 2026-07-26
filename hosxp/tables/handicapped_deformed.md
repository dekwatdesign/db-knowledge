# `handicapped_deformed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_deformed_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_deformed_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_deformed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "handicapped_deformed_id": 1,
    "handicapped_deformed_name": "ทางการเรียนรู้",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 2,
    "handicapped_deformed_name": "พิการด้านการมองเห็น",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 3,
    "handicapped_deformed_name": "พิการทางการเคลื่อนไหวหรือร่างกาย",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 4,
    "handicapped_deformed_name": "พิการทางการได้ยินหรือการสื่อความหมาย",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 5,
    "handicapped_deformed_name": "พิการทางจิตหรือพฤติกรรม",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 6,
    "handicapped_deformed_name": "พิการทางสติปัญญา",
    "hos_guid": null
  },
  {
    "handicapped_deformed_id": 7,
    "handicapped_deformed_name": "ออทิสติก",
    "hos_guid": null
  }
]
```
