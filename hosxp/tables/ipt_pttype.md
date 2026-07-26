# `ipt_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_pttype_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| pttypeno | varchar(50) | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| debt_amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| pttype_number | int(11) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| max_debt_amount | double(15,3) | YES |  | NULL |  |  |
| contract_id | int(11) | YES |  | NULL |  |  |
| company_id | int(11) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| claim_code | varchar(25) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| limit_hour | int(11) | YES |  | NULL |  |  |
| check_limit_hour | char(1) | YES |  | NULL |  |  |
| nhso_govcode | varchar(10) | YES |  | NULL |  |  |
| nhso_govname | varchar(200) | YES |  | NULL |  |  |
| nhso_docno | varchar(30) | YES |  | NULL |  |  |
| nhso_ownright_pid | varchar(13) | YES |  | NULL |  |  |
| nhso_ownright_name | varchar(150) | YES |  | NULL |  |  |
| finance_clear_ok | char(1) | YES |  | NULL |  |  |
| confirm_and_locked_datetime | datetime | YES |  | NULL |  |  |
| confirm_and_locked | char(1) | YES |  | NULL |  |  |
| confirm_and_locked_staff | varchar(25) | YES |  | NULL |  |  |
| emp_privilege | char(1) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| pttype_service_charge | char(1) | YES |  | NULL |  |  |
| pttype_note | text | YES |  | NULL |  |  |
| auth_code | varchar(15) | YES | MUL | NULL |  |  |
| emergency_auth_code | varchar(25) | YES |  | NULL |  |  |
| rcpno_list | varchar(250) | YES |  | NULL |  |  |
| auth_datetime | datetime | YES |  | NULL |  |  |
| project_code | varchar(10) | YES | MUL | NULL |  |  |
| claim_service_type_code | varchar(5) | YES |  | NULL |  |  |
| service_subtype_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| auth_code | auth_code | no | 1 |
| claim_code | claim_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_an | an | no | 1 |
| ix_unique_index | an | yes | 1 |
| ix_unique_index | pttype | yes | 2 |
| PRIMARY | ipt_pttype_id | yes | 1 |
| project_code | project_code | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_pttype_id": 1,
    "an": "540000786",
    "pttype": "74",
    "pttypeno": "7463954957",
    "hospmain": "11302",
    "hospsub": "",
    "begin_date": "2009-09-15",
    "expire_date": null,
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 2,
    "an": "540000787",
    "pttype": "02",
    "pttypeno": "",
    "hospmain": "",
    "hospsub": "",
    "begin_date": "2011-10-10",
    "expire_date": null,
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 3,
    "an": "540000788",
    "pttype": "02",
    "pttypeno": "",
    "hospmain": "",
    "hospsub": "",
    "begin_date": null,
    "expire_date": null,
    "debt_amount": null,
    "staff": null,
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": 0,
    "company_id": null,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 4,
    "an": "540000789",
    "pttype": "11",
    "pttypeno": "7106249309",
    "hospmain": "10753",
    "hospsub": "",
    "begin_date": "2011-10-07",
    "expire_date": "2012-09-30",
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 5,
    "an": "540000791",
    "pttype": "11",
    "pttypeno": "7175060515",
    "hospmain": "11770",
    "hospsub": "11770",
    "begin_date": "2011-10-07",
    "expire_date": null,
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 6,
    "an": "540000792",
    "pttype": "11",
    "pttypeno": "7154497200",
    "hospmain": "10755",
    "hospsub": "00985",
    "begin_date": "2011-08-16",
    "expire_date": "2011-11-16",
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 7,
    "an": "540000793",
    "pttype": "74",
    "pttypeno": "",
    "hospmain": "",
    "hospsub": "",
    "begin_date": "1990-01-01",
    "expire_date": "1990-01-01",
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  },
  {
    "ipt_pttype_id": 8,
    "an": "540000794",
    "pttype": "11",
    "pttypeno": "ท7176243444",
    "hospmain": "10685",
    "hospsub": "00942",
    "begin_date": "2011-09-28",
    "expire_date": "2011-12-30",
    "debt_amount": null,
    "staff": "[MASKED_FULLNAME]",
    "pttype_number": 1,
    "paid_amount": null,
    "max_debt_amount": null,
    "contract_id": -1,
    "company_id": -1,
    "discount_percent": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "finance_clear_ok": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "emergency_auth_code": null,
    "rcpno_list": null,
    "auth_datetime": null,
    "project_code": null,
    "claim_service_type_code": null,
    "service_subtype_code": null
  }
]
```
