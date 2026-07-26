# `ipt_order_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_order_stat_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES |  | NULL |  |  |
| has_rx_order | char(1) | YES |  | NULL |  |  |
| confirm_pay | char(1) | YES |  | NULL |  |  |
| prepare_staff_list | varchar(250) | YES |  | NULL |  |  |
| pay_staff_list | varchar(250) | YES |  | NULL |  |  |
| approve_profile | char(1) | YES |  | NULL |  |  |
| approve_profile_staff | varchar(20) | YES |  | NULL |  |  |
| has_bch_order | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_date | an | no | 1 |
| ix_an_date | order_date | no | 2 |
| PRIMARY | ipt_order_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
