# `blb_stock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_stock_id | int(11) | NO | PRI | 0 |  |  |
| blb_warehouse_id | int(11) | YES | MUL | NULL |  |  |
| blb_stock_approve | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| blb_stock_status_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_reg_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_id | int(11) | YES | MUL | NULL |  |  |
| blb_return_id | int(11) | YES | MUL | NULL |  |  |
| blb_stock_date | date | YES |  | NULL |  |  |
| blb_stock_time | time | YES |  | NULL |  |  |
| blb_stock_doctor | varchar(6) | YES |  | NULL |  |  |
| blb_stock_cc | double(13,3) | YES |  | NULL |  |  |
| blb_stock_qty | double(13,3) | YES |  | NULL |  |  |
| blb_discharge_id | int(11) | YES | MUL | NULL |  |  |
| blb_pay_hos_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_blood_reg_id | blb_blood_reg_id | no | 1 |
| ix_blb_discharge_id | blb_discharge_id | no | 1 |
| ix_blb_pay_id | blb_pay_id | no | 1 |
| ix_blb_return_id | blb_return_id | no | 1 |
| ix_blb_stock_status_id | blb_stock_status_id | no | 1 |
| ix_blb_warehouse_id | blb_warehouse_id | no | 1 |
| PRIMARY | blb_stock_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
