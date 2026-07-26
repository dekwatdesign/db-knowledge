# `rcpt_print_img`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpt_print_img_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| rcpt_print_img_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| PRIMARY | rcpt_print_img_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
