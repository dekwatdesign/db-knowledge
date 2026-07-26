# `ipt_opi_finance_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_opi_finance_summary_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| total_paidst_01 | double(15,3) | YES |  | NULL |  |  |
| total_paidst_02 | double(15,3) | YES |  | NULL |  |  |
| total_paidst_03 | double(15,3) | YES |  | NULL |  |  |
| total_paidst_04 | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| clear_amount | double(15,3) | YES |  | NULL |  |  |
| balance_amount | double(15,3) | YES |  | NULL |  |  |
| total_clear_01 | double(15,3) | YES |  | NULL |  |  |
| total_clear_02 | double(15,3) | YES |  | NULL |  |  |
| total_clear_03 | double(15,3) | YES |  | NULL |  |  |
| total_clear_04 | double(15,3) | YES |  | NULL |  |  |
| total_balance_01 | double(15,3) | YES |  | NULL |  |  |
| total_balance_02 | double(15,3) | YES |  | NULL |  |  |
| total_balance_03 | double(15,3) | YES |  | NULL |  |  |
| total_balance_04 | double(15,3) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| status_ok | char(1) | YES |  | NULL |  |  |
| total_arrear | double(15,3) | YES |  | NULL |  |  |
| rcp_no_list | varchar(250) | YES |  | NULL |  |  |
| total_clear_05 | double(15,3) | YES |  | NULL |  |  |
| total_paidst_04a | double(15,3) | YES |  | NULL |  |  |
| total_paidst_04b | double(15,3) | YES |  | NULL |  |  |
| total_clear_04a | double(15,3) | YES |  | NULL |  |  |
| total_clear_04b | double(15,3) | YES |  | NULL |  |  |
| total_balance_04a | double(15,3) | YES |  | NULL |  |  |
| total_balance_04b | double(15,3) | YES |  | NULL |  |  |
| total_amount_a | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_opi_finance_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
