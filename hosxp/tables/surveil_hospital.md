# `surveil_hospital`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 1,
    "name": "รพ.ศูนย์",
    "hos_guid": null
  },
  {
    "id": 2,
    "name": "รพ.ทั่วไป",
    "hos_guid": null
  },
  {
    "id": 3,
    "name": "รพ.ชุมชน",
    "hos_guid": null
  },
  {
    "id": 4,
    "name": "คลินิก",
    "hos_guid": null
  },
  {
    "id": 5,
    "name": "สถานีอนามัย",
    "hos_guid": null
  }
]
```
