# `james_f43_procedure_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| WARDSTAY | varchar(5) | YES |  | NULL |  |  |
| PROCEDCODE | varchar(7) | YES |  | NULL |  |  |
| TIMESTART | varchar(14) | YES |  | NULL |  |  |
| TIMEFINISH | varchar(14) | YES |  | NULL |  |  |
| SERVICEPRICE | varchar(11) | YES |  | NULL |  |  |
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
