# `deformed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| deformed_id | int(11) | NO | PRI | 0 |  |  |
| deformed_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deformed_name | deformed_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | deformed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "deformed_id": 1,
    "deformed_name": "พิการด้านการมองเห็น",
    "hos_guid": null
  },
  {
    "deformed_id": 2,
    "deformed_name": "พิการทางการได้ยินหรือการสื่อสาร",
    "hos_guid": null
  },
  {
    "deformed_id": 3,
    "deformed_name": "พิการทางการเคลื่อนไหว",
    "hos_guid": null
  },
  {
    "deformed_id": 4,
    "deformed_name": "พิการทางจิตหรือพฤติกรรม",
    "hos_guid": null
  },
  {
    "deformed_id": 5,
    "deformed_name": "พิการทางสติปัญญาหรือการเรียนรู้",
    "hos_guid": null
  },
  {
    "deformed_id": 6,
    "deformed_name": "พิการซ้ำซ้อน",
    "hos_guid": null
  }
]
```
