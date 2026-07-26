# `pay_debt_rcv_payment_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pay_debt_rcv_payment_item_id | int(11) | NO | PRI | 0 |  |  |
| pay_debt_rcv_payment_id | int(11) | YES | MUL | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| create_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_hn | hn | no | 1 |
| ix_idx_pay_debt_invoice_id | finance_number | no | 1 |
| ix_idx_pay_debt_rcv_payment_id | pay_debt_rcv_payment_id | no | 1 |
| ix_idx_pttype | pttype | no | 1 |
| PRIMARY | pay_debt_rcv_payment_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
