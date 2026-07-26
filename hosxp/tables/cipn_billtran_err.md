# `cipn_billtran_err`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cipn_billtran_err_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| err_code | varchar(20) | YES |  | NULL |  |  |
| err_desc | varchar(200) | YES |  | NULL |  |  |
| is_mark | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | cipn_billtran_err_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
