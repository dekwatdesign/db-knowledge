# `rcpt_print_trans_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_trans_detail_id | int(11) | NO | PRI | 0 |  |  |
| rcpt_print_trans_head_id | int(11) | YES | MUL | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| ix_uni | rcpt_print_trans_head_id | yes | 1 |
| ix_uni | finance_number | yes | 2 |
| ix_uni_index | finance_number | yes | 1 |
| ix_uni_index | rcpt_print_trans_head_id | yes | 2 |
| PRIMARY | rcpt_print_trans_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
