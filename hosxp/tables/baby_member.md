# `baby_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| baby_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| birth_weight | int(11) | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| baby_nutrition_id | int(11) | YES |  | NULL |  |  |
| last_pttype | char(2) | YES |  | NULL |  |  |
| discharge | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_discharge | discharge | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | baby_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
