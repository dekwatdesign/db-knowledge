# `james_f43_rehabilitation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATE_ADMIT | varchar(14) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| DATE_START | varchar(8) | YES |  | NULL |  |  |
| DATE_FINISH | varchar(8) | YES |  | NULL |  |  |
| REHABCODE | varchar(7) | YES |  | NULL |  |  |
| AT_DEVICE | varchar(10) | YES |  | NULL |  |  |
| AT_NO | varchar(2) | YES |  | NULL |  |  |
| REHABPLACE | varchar(5) | YES |  | NULL |  |  |
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
