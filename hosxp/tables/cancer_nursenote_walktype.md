# `cancer_nursenote_walktype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| walktype_id | int(11) | NO | PRI | 0 |  |  |
| walktype_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | walktype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "walktype_id": 1,
    "walktype_name": "เดิน",
    "hos_guid": null
  },
  {
    "walktype_id": 2,
    "walktype_name": "นั่งแปล",
    "hos_guid": null
  },
  {
    "walktype_id": 3,
    "walktype_name": "เปลนอน",
    "hos_guid": null
  }
]
```
