# `stock_manual_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_manual_detail_id | int(11) | NO | PRI | 0 |  |  |
| stock_draw_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_manual_id | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| reference_id | int(11) | YES | MUL | NULL |  |  |
| stock_manual_item_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| transaction_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_reference_id | reference_id | no | 1 |
| PRIMARY | stock_manual_detail_id | yes | 1 |
| stock_draw_list_id | stock_draw_list_id | no | 1 |
| stock_manual_id | stock_manual_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
