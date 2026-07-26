# `james_f43_ncdscreen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| SERVPLACE | varchar(1) | YES |  | NULL |  |  |
| SMOKE | varchar(1) | YES |  | NULL |  |  |
| ALCOHOL | varchar(1) | YES |  | NULL |  |  |
| DMFAMILY | varchar(1) | YES |  | NULL |  |  |
| HTFAMILY | varchar(1) | YES |  | NULL |  |  |
| WEIGHT | varchar(5) | YES |  | NULL |  |  |
| HEIGHT | varchar(3) | YES |  | NULL |  |  |
| WAIST_CM | varchar(3) | YES |  | NULL |  |  |
| SBP_1 | varchar(3) | YES |  | NULL |  |  |
| DBP_1 | varchar(3) | YES |  | NULL |  |  |
| SBP_2 | varchar(3) | YES |  | NULL |  |  |
| DBP_2 | varchar(3) | YES |  | NULL |  |  |
| BSLEVEL | varchar(6) | YES |  | NULL |  |  |
| BSTEST | varchar(1) | YES |  | NULL |  |  |
| SCREENPLACE | varchar(5) | YES |  | NULL |  |  |
| PROVIDER | varchar(15) | YES |  | NULL |  |  |
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
