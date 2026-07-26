# `blood_rh`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rh_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rh_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rh_id": 1,
    "name": "Rh +",
    "hos_guid": null
  },
  {
    "rh_id": 2,
    "name": "Rh -",
    "hos_guid": null
  }
]
```
