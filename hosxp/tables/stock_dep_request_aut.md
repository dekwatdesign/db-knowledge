# `stock_dep_request_aut`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_dep_request_aut_id | int(11) | NO | PRI | 0 |  |  |
| stock_dep_request_id | int(11) | YES | MUL | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| authorize_datetime | datetime | YES |  | NULL |  |  |
| authorize_computer | varchar(100) | YES |  | NULL |  |  |
| stock_authorize_position_id | int(11) | YES |  | NULL |  |  |
| authorize_ok | char(1) | YES |  | NULL |  |  |
| authorize_enable | char(1) | YES |  | NULL |  |  |
| authorize_note | varchar(200) | YES |  | NULL |  |  |
| stock_dep_request_list_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_dep_request_id | no | 1 |
| ix_stock_dep_request_list_id | stock_dep_request_list_id | no | 1 |
| PRIMARY | stock_dep_request_aut_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
