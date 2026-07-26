# `stock_draw_list_tx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_list_id | int(11) | NO | PRI | 0 |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| need_calc | char(1) | YES | MUL | NULL |  |  |
| msg | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_need_calc | need_calc | no | 1 |
| PRIMARY | stock_draw_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
