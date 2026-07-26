# `village_factory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_factory_id | int(11) | NO | PRI | 0 |  |  |
| village_factory_name | varchar(200) | YES |  | NULL |  |  |
| village_factory_type_id | int(11) | YES |  | NULL |  |  |
| village_factory_owner_name | varchar(200) | YES |  | NULL |  |  |
| village_factory_open_date | date | YES |  | NULL |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| gis_latitude | varchar(100) | YES |  | NULL |  |  |
| gis_longitude | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_id | village_id | no | 1 |
| PRIMARY | village_factory_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
