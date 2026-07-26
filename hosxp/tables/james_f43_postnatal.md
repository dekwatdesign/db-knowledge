# `james_f43_postnatal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| GRAVIDA | varchar(2) | YES |  | NULL |  |  |
| BDATE | varchar(8) | YES |  | NULL |  |  |
| PPCARE | varchar(8) | YES |  | NULL |  |  |
| PPPLACE | varchar(5) | YES |  | NULL |  |  |
| PPRESULT | varchar(1) | YES |  | NULL |  |  |
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
