# `patient_finance_deposit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_finance_deposit_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| deposit_date | date | YES | MUL | NULL |  |  |
| deposit_time | time | YES |  | NULL |  |  |
| deposit_staff | varchar(50) | YES |  | NULL |  |  |
| deposit_computer | varchar(50) | YES |  | NULL |  |  |
| deposit_amount | double(15,3) | YES |  | NULL |  |  |
| void_status | char(1) | YES |  | NULL |  |  |
| deposit_note | text | YES |  | NULL |  |  |
| rcpt_deposit_type_id | int(11) | YES |  | NULL |  |  |
| credit_card_no | varchar(50) | YES |  | NULL |  |  |
| credit_card_id | int(11) | YES |  | NULL |  |  |
| money_transmit | char(1) | YES |  | NULL |  |  |
| rcpt_deposit_trans_head_id | int(11) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| anvn | varchar(12) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deposit_date | deposit_date | no | 1 |
| ix_hn | hn | no | 1 |
| ix_rcpt_deposit_trans_head_id | rcpt_deposit_trans_head_id | no | 1 |
| PRIMARY | patient_finance_deposit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
