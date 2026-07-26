# `james_f43_accident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATETIME_SERV | varchar(14) | YES |  | NULL |  |  |
| DATETIME_AE | varchar(14) | YES |  | NULL |  |  |
| AETYPE | varchar(2) | YES |  | NULL |  |  |
| AEPLACE | varchar(2) | YES |  | NULL |  |  |
| TYPEIN_AE | varchar(1) | YES |  | NULL |  |  |
| TRAFFIC | varchar(1) | YES |  | NULL |  |  |
| VEHICLE | varchar(2) | YES |  | NULL |  |  |
| ALCOHOL | varchar(1) | YES |  | NULL |  |  |
| NACROTIC_DRUG | varchar(1) | YES |  | NULL |  |  |
| BELT | varchar(1) | YES |  | NULL |  |  |
| HELMET | varchar(1) | YES |  | NULL |  |  |
| AIRWAY | varchar(1) | YES |  | NULL |  |  |
| STOPBLEED | varchar(1) | YES |  | NULL |  |  |
| SPLINT | varchar(1) | YES |  | NULL |  |  |
| FLUID | varchar(1) | YES |  | NULL |  |  |
| URGENCY | varchar(1) | YES |  | NULL |  |  |
| COMA_EYE | varchar(1) | YES |  | NULL |  |  |
| COMA_SPEAK | varchar(1) | YES |  | NULL |  |  |
| COMA_MOVEMENT | varchar(1) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PID | PID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
