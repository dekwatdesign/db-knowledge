# `opd_opi_fn_cr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_fn_cr_detail_id | int(11) | NO | PRI | 0 |  |  |
| opd_opi_fn_cr_list_id | int(11) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| amount_paidst_01 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_02 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_03 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04 | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| original_total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| arrear_amount | double(15,3) | YES |  | NULL |  |  |
| remain_arrear_amount | double(15,3) | YES |  | NULL |  |  |
| amount_arrear_01 | double(15,3) | YES |  | NULL |  |  |
| amount_arrear_03 | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_05 | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_list_id | opd_opi_fn_cr_list_id | no | 1 |
| PRIMARY | opd_opi_fn_cr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_opi_fn_cr_detail_id": 1,
    "opd_opi_fn_cr_list_id": 1,
    "income": "12",
    "amount_paidst_01": null,
    "amount_paidst_02": 50.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 50.0,
    "original_total_amount": 50.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 2,
    "opd_opi_fn_cr_list_id": 2,
    "income": "03",
    "amount_paidst_01": null,
    "amount_paidst_02": 315.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 315.0,
    "original_total_amount": 315.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 3,
    "opd_opi_fn_cr_list_id": 2,
    "income": "12",
    "amount_paidst_01": null,
    "amount_paidst_02": 50.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 50.0,
    "original_total_amount": 50.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 4,
    "opd_opi_fn_cr_list_id": 3,
    "income": "03",
    "amount_paidst_01": null,
    "amount_paidst_02": 2137.5,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 2137.5,
    "original_total_amount": 2137.5,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 5,
    "opd_opi_fn_cr_list_id": 3,
    "income": "12",
    "amount_paidst_01": null,
    "amount_paidst_02": 50.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 50.0,
    "original_total_amount": 50.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 6,
    "opd_opi_fn_cr_list_id": 4,
    "income": "03",
    "amount_paidst_01": null,
    "amount_paidst_02": 2230.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 2230.0,
    "original_total_amount": 2230.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 7,
    "opd_opi_fn_cr_list_id": 4,
    "income": "12",
    "amount_paidst_01": null,
    "amount_paidst_02": 50.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 50.0,
    "original_total_amount": 50.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  },
  {
    "opd_opi_fn_cr_detail_id": 8,
    "opd_opi_fn_cr_list_id": 4,
    "income": "14",
    "amount_paidst_01": null,
    "amount_paidst_02": 200.0,
    "amount_paidst_03": null,
    "amount_paidst_04": 0.0,
    "total_amount": 200.0,
    "original_total_amount": 200.0,
    "hos_guid": null,
    "arrear_amount": 0.0,
    "remain_arrear_amount": null,
    "amount_arrear_01": 0.0,
    "amount_arrear_03": 0.0,
    "amount_paidst_05": null
  }
]
```
