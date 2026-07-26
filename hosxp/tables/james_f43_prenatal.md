# `james_f43_prenatal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| GRAVIDA | varchar(2) | YES |  | NULL |  |  |
| LMP | varchar(8) | YES |  | NULL |  |  |
| EDC | varchar(8) | YES |  | NULL |  |  |
| VDRL_RESULT | varchar(1) | YES |  | NULL |  |  |
| HB_RESULT | varchar(1) | YES |  | NULL |  |  |
| HIV_RESULT | varchar(1) | YES |  | NULL |  |  |
| DATE_HCT | varchar(8) | YES |  | NULL |  |  |
| HCT_RESULT | varchar(2) | YES |  | NULL |  |  |
| THALASSEMIA | varchar(1) | YES |  | NULL |  |  |
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
