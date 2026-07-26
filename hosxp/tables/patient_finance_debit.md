# `patient_finance_debit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_finance_debit_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| debit_amount | double(15,3) | YES |  | NULL |  |  |
| debit_date | date | YES |  | NULL |  |  |
| debit_time | time | YES |  | NULL |  |  |
| debit_datetime | datetime | YES |  | NULL |  |  |
| finance_number | varchar(20) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| debit_note_text | text | YES |  | NULL |  |  |
| anvn | varchar(12) | YES | MUL | NULL |  |  |
| rcpt_deposit_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | anvn | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hn_rcpt_deposit_type_id | hn | no | 1 |
| ix_hn_rcpt_deposit_type_id | rcpt_deposit_type_id | no | 2 |
| PRIMARY | patient_finance_debit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
