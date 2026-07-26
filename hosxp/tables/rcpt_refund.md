# `rcpt_refund`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_refund_id | int(11) | NO | PRI | 0 |  |  |
| department | char(3) | YES |  | NULL |  |  |
| finance_number | varchar(9) | YES |  | NULL |  |  |
| refund_date | date | YES |  | NULL |  |  |
| refund_time | time | YES |  | NULL |  |  |
| refund_staff | varchar(25) | YES |  | NULL |  |  |
| receive_amount | double(15,3) | YES |  | NULL |  |  |
| pay_amount | double(15,3) | YES |  | NULL |  |  |
| refund_amount | double(15,3) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | rcpt_refund_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
