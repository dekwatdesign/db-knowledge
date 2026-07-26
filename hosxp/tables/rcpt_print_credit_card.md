# `rcpt_print_credit_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_credit_card_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| credit_card_id | int(11) | YES |  | NULL |  |  |
| credit_card_no | varchar(50) | YES |  | NULL |  |  |
| credit_card_amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| credit_card_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| PRIMARY | rcpt_print_credit_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
