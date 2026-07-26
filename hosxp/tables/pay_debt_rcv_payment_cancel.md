# `pay_debt_rcv_payment_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pay_debt_rcv_payment_cancel_id | int(11) | NO | PRI | 0 |  |  |
| pay_debt_rcv_payment_id | int(11) | YES | MUL | NULL |  |  |
| cancel_reason | text | YES |  | NULL |  |  |
| cancel_by | varchar(50) | YES |  | NULL |  |  |
| cancel_date | date | YES | MUL | NULL |  |  |
| cancel_time | time | YES |  | NULL |  |  |
| create_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_cancel_date | cancel_date | no | 1 |
| ix_idx_pay_debt_rcv_payment_id | pay_debt_rcv_payment_id | no | 1 |
| PRIMARY | pay_debt_rcv_payment_cancel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
