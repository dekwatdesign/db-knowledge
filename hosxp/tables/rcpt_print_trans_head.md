# `rcpt_print_trans_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_trans_head_id | int(11) | NO | PRI | 0 |  |  |
| trans_date | date | YES |  | NULL |  |  |
| trans_time | time | YES |  | NULL |  |  |
| trans_staff | varchar(50) | YES |  | NULL |  |  |
| min_finance_number | varchar(7) | YES |  | NULL |  |  |
| max_finance_number | varchar(7) | YES |  | NULL |  |  |
| rcpt_count | int(11) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| trans_amount | double(15,3) | YES |  | NULL |  |  |
| acc_posted | char(1) | YES |  | NULL |  |  |
| acc_posted_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rcpt_print_trans_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
