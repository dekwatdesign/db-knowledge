# `opd_opi_fn_tr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_fn_tr_detail_id | int(11) | NO | PRI | 0 |  |  |
| opd_opi_fn_tr_list_id | int(11) | YES | MUL | NULL |  |  |
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
| opd_opi_fn_cr_list_id | int(11) | YES | MUL | NULL |  |  |
| prcess_flag | char(1) | YES |  | NULL |  |  |
| process_order | int(11) | YES |  | NULL |  |  |
| amount_paidst_04a | double(15,3) | YES |  | NULL |  |  |
| amount_paidst_04b | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cr_list_id | opd_opi_fn_cr_list_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opd_fn_tr_list_id | opd_opi_fn_tr_list_id | no | 1 |
| PRIMARY | opd_opi_fn_tr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_opi_fn_tr_detail_id": 1,
    "opd_opi_fn_tr_list_id": 1,
    "income": "07",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": -100.0,
    "amount_paidst_04": 100.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 2,
    "opd_opi_fn_tr_list_id": 2,
    "income": "07",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": -70.0,
    "amount_paidst_04": 70.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 3,
    "opd_opi_fn_tr_list_id": 3,
    "income": "12",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 50.0,
    "amount_paidst_03": 0.0,
    "total_amount": 50.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": 1,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 4,
    "opd_opi_fn_tr_list_id": 4,
    "income": "03",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": 0.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 5,
    "opd_opi_fn_tr_list_id": 5,
    "income": "03",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": 0.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 6,
    "opd_opi_fn_tr_list_id": 6,
    "income": "03",
    "pttype": "02",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": 0.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 7,
    "opd_opi_fn_tr_list_id": 7,
    "income": "03",
    "pttype": "13",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": 0.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  },
  {
    "opd_opi_fn_tr_detail_id": 8,
    "opd_opi_fn_tr_list_id": 8,
    "income": "16",
    "pttype": "13",
    "amount_paidst_01": 0.0,
    "amount_paidst_02": 0.0,
    "amount_paidst_03": 0.0,
    "total_amount": 0.0,
    "amount_paidst_04": 0.0,
    "opd_opi_finance_clear_list_id": null,
    "amount_clear_01": null,
    "amount_clear_02": null,
    "amount_clear_03": null,
    "amount_clear_04": null,
    "hos_guid": null,
    "opd_opi_fn_cr_list_id": null,
    "prcess_flag": null,
    "process_order": 1000,
    "amount_paidst_04a": 0.0,
    "amount_paidst_04b": 0.0
  }
]
```
