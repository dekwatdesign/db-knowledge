# `ovst_finance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| finance_status | int(11) | YES |  | NULL |  |  |
| department_type | char(3) | YES |  | NULL |  |  |
| check_pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| ed_amount | double(15,3) | YES |  | NULL |  |  |
| ned_amount | double(15,3) | YES |  | NULL |  |  |
| other_amount | double(15,3) | YES |  | NULL |  |  |
| paidst_01_amount | double(15,3) | YES |  | NULL |  |  |
| paidst_02_amount | double(15,3) | YES |  | NULL |  |  |
| paidst_03_amount | double(15,3) | YES |  | NULL |  |  |
| paidst_01_03_wait_amount | double(15,3) | YES |  | NULL |  |  |
| paidst_04_amount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "",
    "finance_status": 1,
    "department_type": "IPD",
    "check_pttype": null,
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "051017175759",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "10",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250101153511",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "74",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250109164252",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "11",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250112144831",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "11",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250119130001",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "11",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250201113358",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "02",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  },
  {
    "vn": "250201135641",
    "finance_status": 1,
    "department_type": "OPD",
    "check_pttype": "74",
    "hos_guid": null,
    "ed_amount": null,
    "ned_amount": null,
    "other_amount": null,
    "paidst_01_amount": null,
    "paidst_02_amount": null,
    "paidst_03_amount": null,
    "paidst_01_03_wait_amount": null,
    "paidst_04_amount": null
  }
]
```
