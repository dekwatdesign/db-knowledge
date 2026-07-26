# `rcpt_print_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_list_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| amt_01 | double(15,3) | YES |  | NULL |  |  |
| amt_02 | double(15,3) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| special_discount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| PRIMARY | rcpt_print_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
