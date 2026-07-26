# `james_f43_surveillance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| SYNDROME | varchar(4) | YES |  | NULL |  |  |
| DIAGCODE | varchar(6) | YES |  | NULL |  |  |
| CODE506 | varchar(2) | YES |  | NULL |  |  |
| DIAGCODELAST | varchar(6) | YES |  | NULL |  |  |
| CODE506LAST | varchar(2) | YES |  | NULL |  |  |
| ILLDATE | varchar(8) | YES |  | NULL |  |  |
| ILLHOUSE | varchar(75) | YES |  | NULL |  |  |
| ILLVILLAGE | varchar(2) | YES |  | NULL |  |  |
| ILLTAMBON | varchar(2) | YES |  | NULL |  |  |
| ILLAMPUR | varchar(2) | YES |  | NULL |  |  |
| ILLCHANGWAT | varchar(2) | YES |  | NULL |  |  |
| LATITUDE | varchar(10) | YES |  | NULL |  |  |
| LONGITUDE | varchar(10) | YES |  | NULL |  |  |
| PTSTATUS | varchar(1) | YES |  | NULL |  |  |
| DATE_DEATH | varchar(8) | YES |  | NULL |  |  |
| COMPLICATION | varchar(3) | YES |  | NULL |  |  |
| ORGANISM | varchar(4) | YES |  | NULL |  |  |
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
