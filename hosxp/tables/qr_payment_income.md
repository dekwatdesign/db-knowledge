# `qr_payment_income`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| qr_payment_income_id | int(11) | NO | PRI | 0 |  |  |
| qr_payment_income_name | varchar(255) | YES |  | NULL |  |  |
| qr_payment_paist01 | double(15,2) | YES |  | NULL |  |  |
| qr_payment_paist03 | double(15,2) | YES |  | NULL |  |  |
| qr_payment_total_amount | double(15,2) | YES |  | NULL |  |  |
| qr_payment_transaction_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | qr_payment_income_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
