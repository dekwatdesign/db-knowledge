# `gis_village`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| DOLACODE | varchar(255) | YES |  | NULL |  |  |
| VILL_NO | varchar(255) | YES |  | NULL |  |  |
| MUBAN | varchar(255) | YES |  | NULL |  |  |
| TAMBOL | varchar(255) | YES |  | NULL |  |  |
| AMPHOE | varchar(255) | YES |  | NULL |  |  |
| CHANGWAT | varchar(255) | YES |  | NULL |  |  |
| VERSION | double(32,10) | YES |  | NULL |  |  |
| X | double(32,10) | YES |  | NULL |  |  |
| Y | double(32,10) | YES |  | NULL |  |  |
| ogc_geom | geometry | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
