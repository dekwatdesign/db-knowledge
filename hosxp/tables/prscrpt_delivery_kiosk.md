# `prscrpt_delivery_kiosk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_kiosk_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| delivery_kiosk_datetime | datetime | YES |  | NULL |  |  |
| coverage_type | varchar(100) | YES |  | NULL |  |  |
| coverage_price | decimal(10,0) | YES |  | NULL |  |  |
| courier_order_type | varchar(50) | YES |  | NULL |  |  |
| courier_name | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_company_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_add_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_kiosk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
