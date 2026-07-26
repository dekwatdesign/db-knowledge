# `visit_pttype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| pttype | char(2) | NO | PRI |  |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| rcpt_amount | double(15,3) | YES |  | NULL |  |  |
| debt_amount | double(15,3) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| hospmain | varchar(9) | YES |  | NULL |  |  |
| hospsub | varchar(9) | YES |  | NULL |  |  |
| pttypeno | varchar(50) | YES | MUL | NULL |  |  |
| pttype_number | int(11) | YES |  | NULL |  |  |
| pttype_order | int(11) | YES |  | NULL |  |  |
| discount_percent | double(15,3) | YES |  | NULL |  |  |
| company_id | int(11) | YES |  | NULL |  |  |
| contract_id | int(11) | YES |  | NULL |  |  |
| max_debt_amount | double(15,3) | YES |  | NULL |  |  |
| paid_amount | double(15,3) | YES |  | NULL |  |  |
| claim_code | varchar(25) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| limit_hour | int(11) | YES |  | NULL |  |  |
| check_limit_hour | char(1) | YES |  | NULL |  |  |
| finance_clear_ok | char(1) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| confirm_and_locked_datetime | datetime | YES |  | NULL |  |  |
| confirm_and_locked | char(1) | YES |  | NULL |  |  |
| confirm_and_locked_staff | varchar(20) | YES |  | NULL |  |  |
| nhso_govcode | varchar(10) | YES |  | NULL |  |  |
| nhso_govname | varchar(200) | YES |  | NULL |  |  |
| nhso_docno | varchar(30) | YES |  | NULL |  |  |
| nhso_ownright_pid | varchar(13) | YES |  | NULL |  |  |
| nhso_ownright_name | varchar(150) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| emp_privilege | char(1) | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| pttype_service_charge | char(1) | YES |  | NULL |  |  |
| pttype_note | text | YES |  | NULL |  |  |
| auth_code | varchar(15) | YES | MUL | NULL |  |  |
| rcpno_list | varchar(250) | YES |  | NULL |  |  |
| project_code | varchar(10) | YES | MUL | NULL |  |  |
| depcode_service_charge | char(1) | YES |  | NULL |  |  |
| request_funds | char(1) | YES |  | NULL |  |  |
| auth_datetime | datetime | YES |  | NULL |  |  |
| nhso_ucae_type_code | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| auth_code | auth_code | no | 1 |
| claim_code | claim_code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_pttypeno | pttypeno | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | pttype | yes | 2 |
| project_code | project_code | no | 1 |
| pttype | pttype | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "",
    "pttype": "",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": null,
    "expire_date": null,
    "hospmain": null,
    "hospsub": null,
    "pttypeno": null,
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": null,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": "{8E05FC5E-4764-4CFA-9E39-B6256B361744}",
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": "Y",
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "051017175759",
    "pttype": "10",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "1990-01-01",
    "expire_date": "1990-01-01",
    "hospmain": "",
    "hospsub": "",
    "pttypeno": "",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "240614151330",
    "pttype": "02",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "1990-01-01",
    "expire_date": "2013-06-21",
    "hospmain": "12251",
    "hospsub": "12251",
    "pttypeno": "",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "250101153511",
    "pttype": "74",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "1990-01-01",
    "expire_date": "2011-10-13",
    "hospmain": "10685",
    "hospsub": "10685",
    "pttypeno": "7420487144",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "250109164252",
    "pttype": "11",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": null,
    "expire_date": "2012-01-09",
    "hospmain": "11775",
    "hospsub": "24023",
    "pttypeno": "71441575330",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "250112144831",
    "pttype": "11",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "2019-05-07",
    "expire_date": "2024-08-21",
    "hospmain": "11775",
    "hospsub": "11775",
    "pttypeno": "ท7191772847",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "250119130001",
    "pttype": "11",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "1990-01-01",
    "expire_date": "2012-01-19",
    "hospmain": "11775",
    "hospsub": "11775",
    "pttypeno": "7162395005",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  },
  {
    "vn": "250201113358",
    "pttype": "02",
    "staff": null,
    "rcpt_amount": null,
    "debt_amount": null,
    "discount_amount": null,
    "begin_date": "2013-04-19",
    "expire_date": "2015-04-19",
    "hospmain": "12251",
    "hospsub": "12251",
    "pttypeno": "",
    "pttype_number": 1,
    "pttype_order": null,
    "discount_percent": null,
    "company_id": null,
    "contract_id": 0,
    "max_debt_amount": null,
    "paid_amount": null,
    "claim_code": null,
    "hos_guid": null,
    "limit_hour": null,
    "check_limit_hour": null,
    "finance_clear_ok": null,
    "hos_guid_ext": null,
    "confirm_and_locked_datetime": null,
    "confirm_and_locked": null,
    "confirm_and_locked_staff": null,
    "nhso_govcode": null,
    "nhso_govname": null,
    "nhso_docno": null,
    "nhso_ownright_pid": null,
    "nhso_ownright_name": null,
    "update_datetime": null,
    "emp_privilege": null,
    "emp_id": null,
    "pttype_service_charge": null,
    "pttype_note": null,
    "auth_code": null,
    "rcpno_list": null,
    "project_code": null,
    "depcode_service_charge": null,
    "request_funds": null,
    "auth_datetime": null,
    "nhso_ucae_type_code": null
  }
]
```
