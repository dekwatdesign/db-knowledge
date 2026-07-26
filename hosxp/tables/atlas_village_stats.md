# `atlas_village_stats`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_id | int(11) | NO | PRI | 0 |  |  |
| count_house | bigint(20) | YES |  | NULL |  |  |
| count_person | bigint(20) | YES |  | NULL |  |  |
| count_person_anc | bigint(20) | YES |  | NULL |  |  |
| count_person_elder | bigint(20) | YES |  | NULL |  |  |
| count_person_child | bigint(20) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | village_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
