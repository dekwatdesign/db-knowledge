# `village_store_training_course`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_training_course_id | int(11) | NO | PRI | 0 |  |  |
| village_store_training_course_name | varchar(250) | YES |  | NULL |  |  |
| bdg_year | int(11) | YES | MUL | NULL |  |  |
| training_date | date | YES |  | NULL |  |  |
| training_detail | longtext | YES |  | NULL |  |  |
| store_count | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bdg_year | bdg_year | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_store_training_course_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
