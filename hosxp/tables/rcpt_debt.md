# `rcpt_debt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| debt_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| debt_date | date | YES | MUL | NULL |  |  |
| debt_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paid | char(1) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| debt_date_time | datetime | YES | MUL | NULL |  |  |
| ar_transfer | char(1) | YES | MUL | NULL |  |  |
| ar_transfer_datetime | datetime | YES |  | NULL |  |  |
| ar_transfer_staff | varchar(25) | YES |  | NULL |  |  |
| remark | varchar(50) | YES |  | NULL |  |  |
| debt_doc_id | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| status | varchar(10) | YES |  | NULL |  |  |
| sss_approval_code | varchar(50) | YES |  | NULL |  |  |
| sss_inv_no | varchar(10) | YES |  | NULL |  |  |
| sss_amount | double(15,3) | YES |  | NULL |  |  |
| special_discount_amount | double(15,3) | YES |  | NULL |  |  |
| edc_code | varchar(5) | YES |  | NULL |  |  |
| claim_status | char(1) | YES |  | NULL |  |  |
| claim_ref_code | varchar(100) | YES |  | NULL |  |  |
| ofc_paid_amount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| ix_debt_date | debt_date | no | 1 |
| ix_debt_date_pttype | debt_date | no | 1 |
| ix_debt_date_pttype | pttype | no | 2 |
| ix_debt_date_pttype_artran | debt_date | no | 1 |
| ix_debt_date_pttype_artran | pttype | no | 2 |
| ix_debt_date_pttype_artran | ar_transfer | no | 3 |
| ix_debt_date_pttype_artran_index | ar_transfer | no | 1 |
| ix_debt_date_pttype_artran_index | debt_date | no | 2 |
| ix_debt_date_pttype_artran_index | pttype | no | 3 |
| ix_finance_number | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_debt_date_time | debt_date_time | no | 1 |
| ix_ix_vn | vn | no | 1 |
| PRIMARY | debt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "debt_id": 1,
    "vn": "541007091925",
    "hn": "530115251",
    "debt_date": "2011-10-07",
    "debt_time": "10:30:01",
    "staff": "[MASKED_FULLNAME]",
    "amount": 21350.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "1",
    "pttype": "02",
    "discount_amount": 0.0,
    "total_amount": 21350.0,
    "debt_date_time": "2011-10-07 10:30:01",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "02/1",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 2,
    "vn": "541007091946",
    "hn": "530087452",
    "debt_date": "2011-10-07",
    "debt_time": "10:34:17",
    "staff": "[MASKED_FULLNAME]",
    "amount": 3560.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "2",
    "pttype": "74",
    "discount_amount": 0.0,
    "total_amount": 3560.0,
    "debt_date_time": "2011-10-07 10:34:17",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "74/1",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 3,
    "vn": "541007105838",
    "hn": "540001691",
    "debt_date": "2011-10-07",
    "debt_time": "11:42:29",
    "staff": "[MASKED_FULLNAME]",
    "amount": 50.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "3",
    "pttype": "10",
    "discount_amount": 0.0,
    "total_amount": 50.0,
    "debt_date_time": "2011-10-07 11:42:29",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "10/1",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 4,
    "vn": "541007092302",
    "hn": "530135454",
    "debt_date": "2011-10-07",
    "debt_time": "12:18:29",
    "staff": "[MASKED_FULLNAME]",
    "amount": 900.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "4",
    "pttype": "11",
    "discount_amount": 0.0,
    "total_amount": 900.0,
    "debt_date_time": "2011-10-07 12:18:29",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "11/1",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 5,
    "vn": "620806091743",
    "hn": "530220951",
    "debt_date": "2020-04-03",
    "debt_time": "15:38:01",
    "staff": "[MASKED_FULLNAME]",
    "amount": 50.0,
    "paid": null,
    "pt_type": "OPD",
    "computer": "COM-PC",
    "finance_number": "0261786",
    "pttype": "02",
    "discount_amount": 0.0,
    "total_amount": 50.0,
    "debt_date_time": "2020-04-03 15:38:01",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "02/34831",
    "hos_guid": null,
    "department": "OPD",
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": 0.0,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 6,
    "vn": "541010060007",
    "hn": "530178253",
    "debt_date": "2011-10-10",
    "debt_time": "13:33:19",
    "staff": "[MASKED_FULLNAME]",
    "amount": 450.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "6",
    "pttype": "11",
    "discount_amount": 0.0,
    "total_amount": 450.0,
    "debt_date_time": "2011-10-10 13:33:19",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "11/3",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 7,
    "vn": "541010060003",
    "hn": "530142352",
    "debt_date": "2011-10-10",
    "debt_time": "13:36:39",
    "staff": "[MASKED_FULLNAME]",
    "amount": 600.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "7",
    "pttype": "11",
    "discount_amount": 0.0,
    "total_amount": 600.0,
    "debt_date_time": "2011-10-10 13:36:39",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "11/4",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  },
  {
    "debt_id": 8,
    "vn": "541010060103",
    "hn": "540000678",
    "debt_date": "2011-10-10",
    "debt_time": "13:37:27",
    "staff": "[MASKED_FULLNAME]",
    "amount": 450.0,
    "paid": "N",
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "finance_number": "8",
    "pttype": "11",
    "discount_amount": 0.0,
    "total_amount": 450.0,
    "debt_date_time": "2011-10-10 13:37:27",
    "ar_transfer": null,
    "ar_transfer_datetime": null,
    "ar_transfer_staff": null,
    "remark": null,
    "debt_doc_id": "11/5",
    "hos_guid": null,
    "department": null,
    "status": null,
    "sss_approval_code": null,
    "sss_inv_no": null,
    "sss_amount": null,
    "special_discount_amount": null,
    "edc_code": null,
    "claim_status": null,
    "claim_ref_code": null,
    "ofc_paid_amount": null
  }
]
```
