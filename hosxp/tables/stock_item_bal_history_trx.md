# `stock_item_bal_history_trx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_draw_list_id | int(11) | NO | PRI | 0 |  |  |
| need_calc | char(1) | YES | MUL | NULL |  |  |
| last_calc_unix_time | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_needc_time | need_calc | no | 1 |
| ix_needc_time | last_calc_unix_time | no | 2 |
| ix_needc_time_index | last_calc_unix_time | no | 1 |
| ix_needc_time_index | need_calc | no | 2 |
| ix_need_calc | need_calc | no | 1 |
| PRIMARY | stock_draw_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
