# `moo_home_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moid | varchar(8) | YES | MUL | NULL |  |  |
| home_number | varchar(10) | YES | MUL | NULL |  |  |
| water_container_type | tinyint(4) | YES |  | NULL |  |  |
| water_container_size | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| home_number_water_container_type_unique | home_number | yes | 1 |
| home_number_water_container_type_unique | water_container_type | yes | 2 |
| home_number_water_container_type_unique | moid | yes | 3 |
| ix_home_number_water_container_type_unique | home_number | yes | 1 |
| ix_home_number_water_container_type_unique | moid | yes | 2 |
| ix_home_number_water_container_type_unique | water_container_type | yes | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| moid_home_number_unique | moid | yes | 1 |
| moid_home_number_unique | home_number | yes | 2 |
| moid_home_number_unique | water_container_type | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
