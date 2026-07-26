# `opd_opi_finance_transfer_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_finance_transfer_detail_id | int(11) | NO | PRI | 0 |  |  |
| opd_opi_finance_transfer_list_id | int(11) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| amount_paidst_01 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_02 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_03 | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04 | double(15,3) | YES |  | NULL |  |  |
| opd_opi_finance_clear_list_id | int(11) | YES |  | NULL |  |  |
| amount_clear_01 | double(15,3) | YES |  | NULL |  |  |
| amount_clear_02 | double(15,3) | YES |  | NULL |  |  |
| amount_clear_03 | double(15,3) | YES |  | NULL |  |  |
| amount_clear_04 | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_finance_transfer_list_id | opd_opi_finance_transfer_list_id | no | 1 |
| PRIMARY | opd_opi_finance_transfer_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
