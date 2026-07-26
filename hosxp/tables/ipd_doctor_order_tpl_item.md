# `ipd_doctor_order_tpl_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_item_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_tpl_id | int(11) | YES | MUL | NULL |  |  |
| item_type | varchar(15) | YES |  | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| item_flag | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_tplx_id | ipd_doctor_order_tpl_id | no | 1 |
| ix_ipd_doctor_order_tplx_id | item_id | no | 2 |
| ix_ipd_doctor_order_tplx_id | item_type | no | 3 |
| ix_ipd_doctor_order_tpl_id | ipd_doctor_order_tpl_id | no | 1 |
| PRIMARY | ipd_doctor_order_tpl_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
