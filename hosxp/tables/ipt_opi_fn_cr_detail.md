# `ipt_opi_fn_cr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_opi_fn_cr_detail_id | int(11) | NO | PRI | 0 |  |  |
| ipt_opi_fn_cr_list_id | int(11) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| amount_paidst_01 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_02 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_03 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04 | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| ipt_opi_fn_tr_list_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| original_total_amount | double(15,3) | YES |  | NULL |  |  |
| remain_arrear_amount | double(15,3) | YES |  | NULL |  |  |
| amount_arrear_01 | double(15,3) | YES |  | NULL |  |  |
| amount_arrear_03 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_05 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04a | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04b | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_list_id | ipt_opi_fn_cr_list_id | no | 1 |
| PRIMARY | ipt_opi_fn_cr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
