# `blood_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "blood_id": 1,
    "name": "A",
    "hos_guid": null
  },
  {
    "blood_id": 2,
    "name": "B",
    "hos_guid": null
  },
  {
    "blood_id": 3,
    "name": "AB",
    "hos_guid": null
  },
  {
    "blood_id": 4,
    "name": "O",
    "hos_guid": null
  },
  {
    "blood_id": 99,
    "name": "ไม่ทราบ",
    "hos_guid": null
  }
]
```
