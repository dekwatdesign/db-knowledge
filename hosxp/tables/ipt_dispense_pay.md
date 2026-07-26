# `ipt_dispense_pay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_dispense_pay_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_no | int(11) | YES | MUL | NULL |  |  |
| pay_datetime | datetime | YES |  | NULL |  |  |
| pay_staff | varchar(100) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_order_no | order_no | no | 1 |
| PRIMARY | ipt_dispense_pay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
