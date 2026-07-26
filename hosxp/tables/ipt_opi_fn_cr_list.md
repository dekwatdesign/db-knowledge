# `ipt_opi_fn_cr_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_opi_fn_cr_list_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| ipt_opi_finance_clear_date | date | YES |  | NULL |  |  |
| ipt_opi_finance_clear_time | time | YES |  | NULL |  |  |
| ipt_opi_finance_clear_staff | varchar(50) | YES |  | NULL |  |  |
| clear_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| status_ok | char(1) | YES |  | NULL |  |  |
| ipt_opi_fn_cr_date | date | YES |  | NULL |  |  |
| ipt_opi_fn_cr_time | time | YES |  | NULL |  |  |
| ipt_opi_fn_cr_staff | varchar(50) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_opi_fn_cr_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
