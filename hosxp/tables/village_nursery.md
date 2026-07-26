# `village_nursery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_nursery_id | int(11) | NO | PRI | 0 |  |  |
| village_nursery_name | varchar(250) | YES | UNI | NULL |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_nursery_name | village_nursery_name | yes | 1 |
| PRIMARY | village_nursery_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
