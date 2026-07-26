# `ktb_payment_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ktb_payment_print_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |
| rcpno | varchar(20) | YES |  | NULL |  |  |
| ktb_payment_print_datetime | datetime | YES |  | NULL |  |  |
| ktb_payment_print_status | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ktb_payment_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
