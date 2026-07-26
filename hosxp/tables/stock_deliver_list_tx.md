# `stock_deliver_list_tx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_deliver_list_id | int(11) | NO | PRI | 0 |  |  |
| need_calc | char(1) | YES | MUL | NULL |  |  |
| msg | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_need_calc | need_calc | no | 1 |
| PRIMARY | stock_deliver_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
