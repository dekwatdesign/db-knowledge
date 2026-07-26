# `incith_cashier`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| incith_cashier_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| send_date_time | datetime | YES |  | NULL |  |  |
| send_staff | varchar(25) | YES |  | NULL |  |  |
| print_rcpt | char(1) | YES | MUL | NULL |  |  |
| send_depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | incith_cashier_id | yes | 1 |
| print_rcpt | print_rcpt | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
