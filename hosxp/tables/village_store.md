# `village_store`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_store_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| village_store_name | varchar(200) | YES | MUL | NULL |  |  |
| village_store_address | varchar(200) | YES |  | NULL |  |  |
| village_store_phone | varchar(100) | YES |  | NULL |  |  |
| village_store_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| latitude | varchar(100) | YES |  | NULL |  |  |
| longitude | varchar(100) | YES |  | NULL |  |  |
| sell_cigar | char(1) | YES |  | NULL |  |  |
| sell_alcohol | char(1) | YES |  | NULL |  |  |
| owner_person_id | int(11) | YES |  | NULL |  |  |
| owner_person_name | varchar(150) | YES |  | NULL |  |  |
| pass_cfgt | char(1) | YES |  | NULL |  |  |
| has_health_menu | char(1) | YES |  | NULL |  |  |
| has_5star | char(1) | YES |  | NULL |  |  |
| in_hospital | char(1) | YES |  | NULL |  |  |
| pass_noodle_standard | char(1) | YES |  | NULL |  |  |
| village_store_location_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| ix_village_store_name | village_store_name | no | 1 |
| PRIMARY | village_store_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
