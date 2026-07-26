# `ncr_stock1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stk_code | varchar(20) | YES | MUL | NULL |  |  |
| stk_type | varchar(20) | YES |  | NULL |  |  |
| stk_des | varchar(40) | YES |  | NULL |  |  |
| stk_unit_code | varchar(20) | YES |  | NULL |  |  |
| stk_unit_cost | double(15,3) | YES |  | NULL |  |  |
| stk_pack1_code | varchar(20) | YES |  | NULL |  |  |
| stk_pack1_size | varchar(20) | YES |  | NULL |  |  |
| stk_pack2_code | varchar(20) | YES |  | NULL |  |  |
| stk_pack2_size | varchar(20) | YES |  | NULL |  |  |
| stk_discount | varchar(20) | YES |  | NULL |  |  |
| stk_price1 | double(15,3) | YES |  | NULL |  |  |
| stk_price3 | double(15,3) | YES |  | NULL |  |  |
| stk_category | varchar(20) | YES |  | NULL |  |  |
| stk_acc_rcp | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| stk_code | stk_code | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
