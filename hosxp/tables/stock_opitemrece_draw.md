# `stock_opitemrece_draw`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_opitemrece_draw_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| unit_qty | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| dep | char(1) | YES |  | NULL |  |  |
| ipt_order_no | int(11) | YES |  | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| draw_status | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_opitemrece_draw_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
