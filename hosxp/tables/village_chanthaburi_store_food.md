# `village_chanthaburi_store_food`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_chanthaburi_store_food_id | int(11) | NO | PRI | 0 |  |  |
| village_store_id | int(11) | YES |  | NULL |  |  |
| survey_chanthaburi_year_id | int(11) | YES |  | NULL |  |  |
| village_chanthaburi_store_food_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | village_chanthaburi_store_food_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
