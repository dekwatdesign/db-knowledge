# `medreturn_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_return_number | int(11) | NO | PRI | 0 |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| return_price | double(15,3) | YES |  | NULL |  |  |
| return_date | date | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| med_rx_number | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| return_staff | varchar(25) | YES |  | NULL |  |  |
| confirm_return | char(1) | YES |  | NULL |  |  |
| confirm_return_date | date | YES |  | NULL |  |  |
| confirm_return_staff | varchar(20) | YES |  | NULL |  |  |
| medreturn_type_id | int(11) | YES |  | NULL |  |  |
| confirm_finance | char(1) | YES |  | NULL |  |  |
| confirm_return_time | time | YES |  | NULL |  |  |
| return_stock_department_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| med_plan_number | med_plan_number | no | 1 |
| med_rx_number | med_rx_number | no | 1 |
| PRIMARY | med_return_number | yes | 1 |
| return_date | return_date | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
