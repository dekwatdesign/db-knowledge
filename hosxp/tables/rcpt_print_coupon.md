# `rcpt_print_coupon`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_coupon_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| rcpt_coupon_type_id | int(11) | YES |  | NULL |  |  |
| coupon_no | varchar(50) | YES |  | NULL |  |  |
| coupon_amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| coupon_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| PRIMARY | rcpt_print_coupon_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
