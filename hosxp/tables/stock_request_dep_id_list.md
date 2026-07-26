# `stock_request_dep_id_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_request_dep_id_list_id | int(11) | NO | PRI | 0 |  |  |
| request_id | int(11) | YES | MUL | NULL |  |  |
| stock_dep_request_id | int(11) | YES | MUL | NULL |  |  |
| stock_dep_request_list_id | int(11) | YES |  | NULL |  |  |
| ref_request_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_request_id | request_id | no | 1 |
| ix_stock_dep_request_id | stock_dep_request_id | no | 1 |
| ix_stock_dep_request_id2 | request_id | no | 1 |
| ix_stock_dep_request_id2 | stock_dep_request_id | no | 2 |
| PRIMARY | stock_request_dep_id_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
