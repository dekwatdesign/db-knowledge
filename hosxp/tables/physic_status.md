# `physic_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_status_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | physic_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "physic_status_id": 1,
    "name": "กำลังรักษา",
    "hos_guid": null
  },
  {
    "physic_status_id": 2,
    "name": "จำหน่าย",
    "hos_guid": null
  }
]
```
