# `ipt_labour_place`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_place_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_place_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ipt_labour_place_name | ipt_labour_place_name | yes | 1 |
| PRIMARY | ipt_labour_place_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_labour_place_id": 1,
    "ipt_labour_place_name": "คลินิก",
    "hos_guid": null
  },
  {
    "ipt_labour_place_id": 2,
    "ipt_labour_place_name": "อนามัย",
    "hos_guid": null
  },
  {
    "ipt_labour_place_id": 3,
    "ipt_labour_place_name": "โรงพยาบาล",
    "hos_guid": null
  }
]
```
