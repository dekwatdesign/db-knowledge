# `gis_tambol`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| SDIST_CODE | varchar(255) | YES |  | NULL |  |  |
| TAMBOL | varchar(255) | YES |  | NULL |  |  |
| SUBDISTRIC | varchar(255) | YES |  | NULL |  |  |
| AMPHOE | varchar(255) | YES |  | NULL |  |  |
| DISTRICT | varchar(255) | YES |  | NULL |  |  |
| CHANGWAT | varchar(255) | YES |  | NULL |  |  |
| PROVINCE | varchar(255) | YES |  | NULL |  |  |
| MALE | bigint(20) | YES |  | NULL |  |  |
| FEMALE | bigint(20) | YES |  | NULL |  |  |
| TOTAL_POP | bigint(20) | YES |  | NULL |  |  |
| HOUSE | bigint(20) | YES |  | NULL |  |  |
| PROVCODE | varchar(255) | YES |  | NULL |  |  |
| AMP_CODE | varchar(255) | YES |  | NULL |  |  |
| TAM_NAME | varchar(255) | YES |  | NULL |  |  |
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
