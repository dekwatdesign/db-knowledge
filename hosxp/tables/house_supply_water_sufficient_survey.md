# `house_supply_water_sufficient_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_supply_water_sufficient_survey_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| house_supply_water_sufficient_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | house_supply_water_sufficient_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
