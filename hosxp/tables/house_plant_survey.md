# `house_plant_survey`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_plant_survey_id | int(11) | NO | PRI | 0 |  |  |
| house_id | int(11) | YES | MUL | NULL |  |  |
| house_plant_id | int(11) | YES |  | NULL |  |  |
| house_plant_area_1 | int(11) | YES |  | NULL |  |  |
| house_plant_area_2 | int(11) | YES |  | NULL |  |  |
| house_plant_area_3 | int(11) | YES |  | NULL |  |  |
| house_plant_produce_kg | int(11) | YES |  | NULL |  |  |
| house_plant_produce_count_per_year | int(11) | YES |  | NULL |  |  |
| house_plant_manure_organic | char(1) | YES |  | NULL |  |  |
| house_plant_manure_chemistry | char(1) | YES |  | NULL |  |  |
| house_plant_manure_mixed | char(1) | YES |  | NULL |  |  |
| house_plant_use_chemistry | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_id | house_id | no | 1 |
| PRIMARY | house_plant_survey_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
