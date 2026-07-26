# `ovst_nhso_eligible`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_nhso_eligible_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| nhso_eligible_type_id | int(11) | YES | MUL | NULL |  |  |
| eligible_status | varchar(250) | YES |  | NULL |  |  |
| eligible_note | varchar(250) | YES |  | NULL |  |  |
| eligible_check_datetime | datetime | YES |  | NULL |  |  |
| eligible_check_status_code | int(11) | YES |  | NULL |  |  |
| eligible_check_staff | varchar(50) | YES |  | NULL |  |  |
| claim_status_code | int(11) | YES |  | NULL |  |  |
| claim_status | varchar(250) | YES |  | NULL |  |  |
| claim_note | varchar(250) | YES |  | NULL |  |  |
| claim_transaction_uid | varchar(100) | YES |  | NULL |  |  |
| claim_verify_url | varchar(250) | YES |  | NULL |  |  |
| claim_staff | varchar(50) | YES |  | NULL |  |  |
| claim_datetime | datetime | YES |  | NULL |  |  |
| claim_nhso_pay_status | varchar(250) | YES |  | NULL |  |  |
| claim_lab | varchar(250) | YES |  | NULL |  |  |
| claim_icd10 | varchar(250) | YES |  | NULL |  |  |
| claim_nhso_pay_check_datetime | datetime | YES |  | NULL |  |  |
| claim_nhso_pay_check_staff | varchar(50) | YES |  | NULL |  |  |
| mohpromt_did_status | varchar(100) | YES |  | NULL |  |  |
| mohpromt_did_check_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_id | vn | yes | 1 |
| ix_vn_id | nhso_eligible_type_id | yes | 2 |
| ix_vn_id_index | nhso_eligible_type_id | yes | 1 |
| ix_vn_id_index | vn | yes | 2 |
| PRIMARY | ovst_nhso_eligible_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_nhso_eligible_id": 1,
    "vn": "670118083020",
    "nhso_eligible_type_id": 2,
    "eligible_status": "success",
    "eligible_note": "ผู้รับบริการมีสิทธิ์เบิกจ่ายบริการ HT",
    "eligible_check_datetime": "2024-01-18 13:55:11",
    "eligible_check_status_code": 200,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 2,
    "vn": "670118083020",
    "nhso_eligible_type_id": 1,
    "eligible_status": "success",
    "eligible_note": "ผู้รับบริการมีสิทธิ์เบิกจ่ายบริการ DM",
    "eligible_check_datetime": "2024-01-18 13:55:11",
    "eligible_check_status_code": 200,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 3,
    "vn": "670130093012",
    "nhso_eligible_type_id": 2,
    "eligible_status": "success",
    "eligible_note": "ผู้รับบริการมีสิทธิ์เบิกจ่ายบริการ HT",
    "eligible_check_datetime": "2024-01-30 15:42:14",
    "eligible_check_status_code": 200,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 4,
    "vn": "670130093012",
    "nhso_eligible_type_id": 1,
    "eligible_status": "success",
    "eligible_note": "ผู้รับบริการมีสิทธิ์เบิกจ่ายบริการ DM",
    "eligible_check_datetime": "2024-01-30 15:42:14",
    "eligible_check_status_code": 200,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 5,
    "vn": "670213091606",
    "nhso_eligible_type_id": 2,
    "eligible_status": "invalid inscl",
    "eligible_note": "ผู้รับบริการไม่มีสิทธิ์เคลมบริการนี้ เนื่องจากสิทธิไม่ตรง",
    "eligible_check_datetime": "2024-02-13 10:53:39",
    "eligible_check_status_code": 400,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 6,
    "vn": "670213091606",
    "nhso_eligible_type_id": 1,
    "eligible_status": "invalid inscl",
    "eligible_note": "ผู้รับบริการไม่มีสิทธิ์เคลมบริการนี้ เนื่องจากสิทธิไม่ตรง",
    "eligible_check_datetime": "2024-02-13 10:53:39",
    "eligible_check_status_code": 400,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": null,
    "claim_icd10": null,
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 7,
    "vn": "670327140026",
    "nhso_eligible_type_id": 2,
    "eligible_status": "invalid inscl",
    "eligible_note": "ผู้รับบริการไม่มีสิทธิ์เคลมบริการนี้ เนื่องจากสิทธิไม่ตรง",
    "eligible_check_datetime": "2024-03-27 17:41:41",
    "eligible_check_status_code": 400,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": "''",
    "claim_icd10": "''",
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  },
  {
    "ovst_nhso_eligible_id": 8,
    "vn": "670327140026",
    "nhso_eligible_type_id": 1,
    "eligible_status": "invalid inscl",
    "eligible_note": "ผู้รับบริการไม่มีสิทธิ์เคลมบริการนี้ เนื่องจากสิทธิไม่ตรง",
    "eligible_check_datetime": "2024-03-27 17:41:41",
    "eligible_check_status_code": 400,
    "eligible_check_staff": "187",
    "claim_status_code": null,
    "claim_status": null,
    "claim_note": null,
    "claim_transaction_uid": null,
    "claim_verify_url": null,
    "claim_staff": null,
    "claim_datetime": null,
    "claim_nhso_pay_status": null,
    "claim_lab": "''",
    "claim_icd10": "''",
    "claim_nhso_pay_check_datetime": null,
    "claim_nhso_pay_check_staff": null,
    "mohpromt_did_status": null,
    "mohpromt_did_check_datetime": null
  }
]
```
