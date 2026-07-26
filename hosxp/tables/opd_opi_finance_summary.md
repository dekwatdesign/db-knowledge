# `opd_opi_finance_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_opi_finance_summary_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
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
| status_ok | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| total_arrear | double(15,3) | YES |  | NULL |  |  |
| inc_arrear | double(15,3) | YES |  | NULL |  |  |
| total_clear_arrear | double(15,3) | YES |  | NULL |  |  |
| rcp_no_list | varchar(250) | YES |  | NULL |  |  |
| inc_arrear_01 | double(15,3) | YES |  | NULL |  |  |
| inc_arrear_03 | double(15,3) | YES |  | NULL |  |  |
| total_clear_05 | double(15,3) | YES |  | NULL |  |  |
| total_paidst_04a | double(15,3) | YES |  | NULL |  |  |
| total_paidst_04b | double(15,3) | YES |  | NULL |  |  |
| total_balance_04a | double(15,3) | YES |  | NULL |  |  |
| total_balance_04b | double(15,3) | YES |  | NULL |  |  |
| total_clear_04a | double(15,3) | YES |  | NULL |  |  |
| total_clear_04b | double(15,3) | YES |  | NULL |  |  |
| total_amount_a | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | opd_opi_finance_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_opi_finance_summary_id": 1,
    "vn": "620815082936",
    "income": "07",
    "total_paidst_01": 0.0,
    "total_paidst_02": 0.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 100.0,
    "total_amount": -100.0,
    "clear_amount": 0.0,
    "balance_amount": -100.0,
    "total_clear_01": 0.0,
    "total_clear_02": 0.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 0.0,
    "total_balance_03": 0.0,
    "total_balance_04": 100.0,
    "pttype": "02",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": -100.0
  },
  {
    "opd_opi_finance_summary_id": 2,
    "vn": "620805095307",
    "income": "07",
    "total_paidst_01": 0.0,
    "total_paidst_02": 0.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 70.0,
    "total_amount": -70.0,
    "clear_amount": 0.0,
    "balance_amount": -70.0,
    "total_clear_01": 0.0,
    "total_clear_02": 0.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 0.0,
    "total_balance_03": 0.0,
    "total_balance_04": 70.0,
    "pttype": "02",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": -70.0
  },
  {
    "opd_opi_finance_summary_id": 3,
    "vn": "620806091743",
    "income": "12",
    "total_paidst_01": 0.0,
    "total_paidst_02": 50.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 50.0,
    "clear_amount": 50.0,
    "balance_amount": 0.0,
    "total_clear_01": 0.0,
    "total_clear_02": 50.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 0.0,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "02",
    "status_ok": "Y",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": 50.0
  },
  {
    "opd_opi_finance_summary_id": 48,
    "vn": "631118130030",
    "income": "12",
    "total_paidst_01": 0.0,
    "total_paidst_02": 50.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 50.0,
    "clear_amount": 0.0,
    "balance_amount": 50.0,
    "total_clear_01": 0.0,
    "total_clear_02": 0.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 50.0,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "13",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": 50.0
  },
  {
    "opd_opi_finance_summary_id": 50,
    "vn": "631118130030",
    "income": "17",
    "total_paidst_01": 0.0,
    "total_paidst_02": 7080.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 7080.0,
    "clear_amount": 0.0,
    "balance_amount": 7080.0,
    "total_clear_01": 0.0,
    "total_clear_02": 0.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 7080.0,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "13",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": 7080.0
  },
  {
    "opd_opi_finance_summary_id": 97,
    "vn": "650505114000",
    "income": "12",
    "total_paidst_01": 0.0,
    "total_paidst_02": 50.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 50.0,
    "clear_amount": 0.0,
    "balance_amount": 50.0,
    "total_clear_01": 0.0,
    "total_clear_02": 0.0,
    "total_clear_03": 0.0,
    "total_clear_04": 0.0,
    "total_balance_01": 0.0,
    "total_balance_02": 50.0,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "02",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": 0.0,
    "inc_arrear": 0.0,
    "total_clear_arrear": 0.0,
    "rcp_no_list": null,
    "inc_arrear_01": 0.0,
    "inc_arrear_03": 0.0,
    "total_clear_05": 0.0,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": 0.0,
    "total_clear_04a": 0.0,
    "total_clear_04b": 0.0,
    "total_amount_a": 50.0
  },
  {
    "opd_opi_finance_summary_id": 145,
    "vn": "670430130014",
    "income": "03",
    "total_paidst_01": 0.0,
    "total_paidst_02": 82.5,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 82.5,
    "clear_amount": 0.0,
    "balance_amount": 82.5,
    "total_clear_01": null,
    "total_clear_02": null,
    "total_clear_03": null,
    "total_clear_04": null,
    "total_balance_01": 0.0,
    "total_balance_02": 82.5,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "11",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": null,
    "inc_arrear": null,
    "total_clear_arrear": null,
    "rcp_no_list": null,
    "inc_arrear_01": null,
    "inc_arrear_03": null,
    "total_clear_05": null,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": null,
    "total_clear_04a": null,
    "total_clear_04b": null,
    "total_amount_a": 82.5
  },
  {
    "opd_opi_finance_summary_id": 146,
    "vn": "670430130014",
    "income": "12",
    "total_paidst_01": 0.0,
    "total_paidst_02": 50.0,
    "total_paidst_03": 0.0,
    "total_paidst_04": 0.0,
    "total_amount": 50.0,
    "clear_amount": 0.0,
    "balance_amount": 50.0,
    "total_clear_01": null,
    "total_clear_02": null,
    "total_clear_03": null,
    "total_clear_04": null,
    "total_balance_01": 0.0,
    "total_balance_02": 50.0,
    "total_balance_03": 0.0,
    "total_balance_04": 0.0,
    "pttype": "11",
    "status_ok": "N",
    "hos_guid": null,
    "total_arrear": null,
    "inc_arrear": null,
    "total_clear_arrear": null,
    "rcp_no_list": null,
    "inc_arrear_01": null,
    "inc_arrear_03": null,
    "total_clear_05": null,
    "total_paidst_04a": 0.0,
    "total_paidst_04b": 0.0,
    "total_balance_04a": 0.0,
    "total_balance_04b": null,
    "total_clear_04a": null,
    "total_clear_04b": null,
    "total_amount_a": 50.0
  }
]
```
