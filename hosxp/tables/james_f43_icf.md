# `james_f43_icf`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| DISABID | varchar(13) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERRV | varchar(8) | YES |  | NULL |  |  |
| ICF | varchar(6) | YES |  | NULL |  |  |
| QUALIFIER | varchar(1) | YES |  | NULL |  |  |
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
