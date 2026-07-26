# `village_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_water_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES |  | NULL |  |  |
| village_water_name | varchar(150) | YES | UNI | NULL |  |  |
| village_water_type_id | int(11) | YES |  | NULL |  |  |
| village_water_status | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_water_name | village_water_name | yes | 1 |
| PRIMARY | village_water_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
