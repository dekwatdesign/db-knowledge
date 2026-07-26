# `stock_return_cutpay_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_return_cutpay_list_id | int(11) | NO | PRI | 0 |  |  |
| stock_return_cutpay_id | int(11) | YES |  | NULL |  |  |
| item_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_return_cutpay_qty | int(11) | YES |  | NULL |  |  |
| stock_cutpay_list_id | int(11) | YES | MUL | NULL |  |  |
| stock_return_cutpay_unit_qty | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_list_id | item_list_id | no | 1 |
| ix_stock_draw_list_id | stock_cutpay_list_id | no | 1 |
| PRIMARY | stock_return_cutpay_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
