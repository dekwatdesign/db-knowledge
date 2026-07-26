# `tb_charge_scan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| charge_type | varchar(100) | NO | PRI |  |  |  |
| regdate | date | YES |  | NULL |  |  |
| pname | varchar(50) | YES |  | NULL |  |  |
| fname | varchar(255) | YES |  | NULL |  |  |
| lname | varchar(255) | YES |  | NULL |  |  |
| dchtype | varchar(255) | YES |  | NULL |  |  |
| dchdate | date | YES |  | NULL |  |  |
| file_name | varchar(255) | YES |  | NULL |  |  |
| import_round | varchar(50) | NO | PRI |  |  |  |
| file_name_last | varchar(255) | YES |  | NULL |  |  |
| file_name_new | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | an | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | import_round | yes | 3 |
| PRIMARY | charge_type | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
