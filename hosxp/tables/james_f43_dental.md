# `james_f43_dental`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| DENTTYPE | varchar(1) | YES |  | NULL |  |  |
| SERVPLACE | varchar(1) | YES |  | NULL |  |  |
| PTEETH | varchar(2) | YES |  | NULL |  |  |
| PCARIES | varchar(2) | YES |  | NULL |  |  |
| PFILLING | varchar(2) | YES |  | NULL |  |  |
| PEXTRACT | varchar(2) | YES |  | NULL |  |  |
| DTEETH | varchar(2) | YES |  | NULL |  |  |
| DCARIES | varchar(2) | YES |  | NULL |  |  |
| DFILLING | varchar(2) | YES |  | NULL |  |  |
| DEXTRACT | varchar(2) | YES |  | NULL |  |  |
| NEED_FLUORIDE | varchar(1) | YES |  | NULL |  |  |
| NEED_SCALING | varchar(1) | YES |  | NULL |  |  |
| NEED_SEALANT | varchar(2) | YES |  | NULL |  |  |
| NEED_PFILLING | varchar(2) | YES |  | NULL |  |  |
| NEED_DFILLING | varchar(2) | YES |  | NULL |  |  |
| NEED_PEXTRACT | varchar(2) | YES |  | NULL |  |  |
| NEED_DEXTRACT | varchar(2) | YES |  | NULL |  |  |
| NPROSTHESIS | varchar(1) | YES |  | NULL |  |  |
| PERMANENT_PERMANENT | varchar(2) | YES |  | NULL |  |  |
| PERMANENT_PROSTHESIS | varchar(2) | YES |  | NULL |  |  |
| PROSTHESIS_PROSTHESIS | varchar(2) | YES |  | NULL |  |  |
| GUM | varchar(6) | YES |  | NULL |  |  |
| SCHOOLTYPE | varchar(1) | YES |  | NULL |  |  |
| CLASS | varchar(1) | YES |  | NULL |  |  |
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
