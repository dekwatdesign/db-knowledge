# `village_nursery_child`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_nursery_child_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| village_nursery_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_nursery_child_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
