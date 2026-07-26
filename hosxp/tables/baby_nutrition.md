# `baby_nutrition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| baby_nutrition_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | baby_nutrition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "baby_nutrition_id": 1,
    "name": "นมแม่",
    "hos_guid": null
  },
  {
    "baby_nutrition_id": 2,
    "name": "นมผง",
    "hos_guid": null
  }
]
```
