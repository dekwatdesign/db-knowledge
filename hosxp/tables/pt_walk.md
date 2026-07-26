# `pt_walk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| walk_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| is_default | char(1) | YES |  | NULL |  |  |
| walk_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | walk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "walk_id": 1,
    "name": "เดินมา",
    "hos_guid": null,
    "is_default": null,
    "walk_code": null
  },
  {
    "walk_id": 2,
    "name": "อุ้มมา",
    "hos_guid": null,
    "is_default": null,
    "walk_code": null
  },
  {
    "walk_id": 3,
    "name": "รถเข็น",
    "hos_guid": null,
    "is_default": null,
    "walk_code": null
  },
  {
    "walk_id": 4,
    "name": "รถนอน",
    "hos_guid": null,
    "is_default": null,
    "walk_code": null
  }
]
```
