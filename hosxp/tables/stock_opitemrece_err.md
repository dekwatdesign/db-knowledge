# `stock_opitemrece_err`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_opitemrece_err_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_list_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| resolve_status | varchar(10) | YES |  | NULL |  |  |
| cost | double(15,5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_opitemrece_err_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
