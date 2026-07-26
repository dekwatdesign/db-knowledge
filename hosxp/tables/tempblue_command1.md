# `tempblue_command1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | YES |  | NULL |  |  |
| code | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| disease | varchar(250) | YES |  | NULL |  |  |
| fm_name | varchar(250) | YES |  | NULL |  |  |
| dx_list | varchar(250) | YES |  | NULL |  |  |
| ptname | varchar(250) | YES |  | NULL |  |  |
| address | varchar(250) | YES |  | NULL |  |  |
| sex | varchar(4) | YES |  | NULL |  |  |
| age | varchar(100) | YES |  | NULL |  |  |
| marrystatus | varchar(20) | YES |  | NULL |  |  |
| nationality | varchar(250) | YES |  | NULL |  |  |
| occupation | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an_code_unique | an | yes | 1 |
| an_code_unique | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
