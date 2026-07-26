# `gis_amphur`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| AMP_CODE | varchar(255) | YES |  | NULL |  |  |
| AMPHOE | varchar(255) | YES |  | NULL |  |  |
| CHANGWAT | varchar(255) | YES |  | NULL |  |  |
| MALE | double(32,10) | YES |  | NULL |  |  |
| FEMALE | double(32,10) | YES |  | NULL |  |  |
| TOTAL_POP | double(32,10) | YES |  | NULL |  |  |
| HOUSE | double(32,10) | YES |  | NULL |  |  |
| PROVCODE | varchar(255) | YES |  | NULL |  |  |
| AMP_NAME | varchar(255) | YES |  | NULL |  |  |
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
