# `james_f43_chronic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| DATE_DIAG | varchar(8) | YES |  | NULL |  |  |
| CHRONIC | varchar(10) | YES |  | NULL |  |  |
| HOSP_DX | varchar(5) | YES |  | NULL |  |  |
| HOSP_RX | varchar(5) | YES |  | NULL |  |  |
| DATE_DISCH | varchar(8) | YES |  | NULL |  |  |
| TYPEDISCH | varchar(2) | YES |  | NULL |  |  |
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
