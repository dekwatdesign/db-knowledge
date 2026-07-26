# `ipt_opi_finance_transfer_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_opi_finance_transfer_list_id | int(11) | NO | PRI | 0 |  |  |
| ipt_opi_finance_transfer_date | date | YES |  | NULL |  |  |
| ipt_opi_finance_transfer_time | time | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| transfer_amount | double(15,3) | YES |  | NULL |  |  |
| ipt_opi_finance_transfer_staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_opi_finance_transfer_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
