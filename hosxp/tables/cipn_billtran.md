# `cipn_billtran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cipn_billtran_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| auth_code | varchar(20) | YES |  | NULL |  |  |
| admdoctor_name | varchar(200) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| regtime | time | YES |  | NULL |  |  |
| prediag | varchar(200) | YES |  | NULL |  |  |
| dchdate | date | YES |  | NULL |  |  |
| dchtime | time | YES |  | NULL |  |  |
| dchtype_name | varchar(100) | YES |  | NULL |  |  |
| dchstts_name | varchar(100) | YES |  | NULL |  |  |
| debt_id_list | varchar(100) | YES |  | NULL |  |  |
| debt_money | double(22,2) | YES |  | NULL |  |  |
| spclty_ward_name | varchar(100) | YES |  | NULL |  |  |
| roomname | varchar(50) | YES |  | NULL |  |  |
| roomno | varchar(10) | YES |  | NULL |  |  |
| bedno | varchar(10) | YES |  | NULL |  |  |
| icd10 | varchar(10) | YES |  | NULL |  |  |
| icdname | varchar(200) | YES |  | NULL |  |  |
| income | double(22,2) | YES |  | NULL |  |  |
| export_data_datetime | datetime | YES |  | NULL |  |  |
| cipn_pcode | varchar(3) | YES |  | NULL |  |  |
| cipn_tcode | varchar(3) | YES | MUL | NULL |  |  |
| cipn_drg | varchar(10) | YES |  | NULL |  |  |
| cipn_rw | double(10,5) | YES |  | NULL |  |  |
| cipn_adjrw | double(10,5) | YES |  | NULL |  |  |
| cipn_amount_drg | double(22,2) | YES |  | NULL |  |  |
| cipn_name | varchar(100) | YES |  | NULL |  |  |
| cipn_pay_code | varchar(10) | YES |  | NULL |  |  |
| cipn_desc | varchar(200) | YES |  | NULL |  |  |
| cipn_error_code | varchar(5) | YES |  | NULL |  |  |
| cipn_error_desc | varchar(250) | YES |  | NULL |  |  |
| cipn_bill_confirm | char(1) | YES |  | NULL |  |  |
| cipn_bill_confirm_datetime | datetime | YES |  | NULL |  |  |
| d_claim_cat_amt | double(22,2) | YES |  | NULL |  |  |
| t_claim_cat_amt | double(22,2) | YES |  | NULL |  |  |
| cipn_confirm_doc_no | varchar(10) | YES |  | NULL |  |  |
| cipn_section_code | varchar(3) | YES |  | NULL |  |  |
| error_list | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| ix_an_tcode | an | no | 1 |
| ix_an_tcode | cipn_tcode | no | 2 |
| ix_tcode | cipn_tcode | no | 1 |
| PRIMARY | cipn_billtran_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cipn_billtran_id": 1,
    "an": "650002125",
    "auth_code": "MCSU84",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-11-23",
    "regtime": "8:00:00",
    "prediag": "ไม่นิ่ง ไม่พูด",
    "dchdate": "2022-12-07",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD3",
    "roomname": "กลับบ้าน",
    "roomno": "301",
    "bedno": "ก307",
    "icd10": "F791",
    "icdname": "F791 - Unspecified mental retardation",
    "income": 9888.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 9888.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 2,
    "an": "650002127",
    "auth_code": "M8845D",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-11-23",
    "regtime": "8:00:00",
    "prediag": "ซน ไม่นิ่ง",
    "dchdate": "2022-12-07",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD4",
    "roomname": "กลับบ้าน",
    "roomno": "401",
    "bedno": "ก401",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 11000.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 11000.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 3,
    "an": "650002109",
    "auth_code": "MK7937",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-11-21",
    "regtime": "8:00:00",
    "prediag": "ซน ไม่นิ่ง",
    "dchdate": "2022-12-06",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD4",
    "roomname": "กลับบ้าน",
    "roomno": "401",
    "bedno": "ก408",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 10400.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 10400.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 4,
    "an": "650002175",
    "auth_code": "OH77P7",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-11-30",
    "regtime": "8:00:00",
    "prediag": "พูดโต้ตอบน้อย",
    "dchdate": "2022-12-15",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD3",
    "roomname": "กลับบ้าน",
    "roomno": "301",
    "bedno": "ก314",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 20910.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 20910.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 5,
    "an": "650002192",
    "auth_code": "MZVQCC",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-12-06",
    "regtime": "8:00:00",
    "prediag": "ซน ไม่นิ่ง",
    "dchdate": "2022-12-20",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD4",
    "roomname": "กลับบ้าน",
    "roomno": "401",
    "bedno": "ก406",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 7858.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 7857.5,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 6,
    "an": "650002074",
    "auth_code": "LRY48T",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-11-14",
    "regtime": "8:00:00",
    "prediag": "ทะเลาะถีบโวยวายกับเพื่อนที่ รร.2เดือนก่อนมารพ.",
    "dchdate": "2022-12-19",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD4",
    "roomname": "กลับบ้าน",
    "roomno": "401",
    "bedno": "ก404",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 12270.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 12270.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 7,
    "an": "650002208",
    "auth_code": "M2C3SL",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-12-08",
    "regtime": "8:00:00",
    "prediag": "ไม่นิ่ง ไม่พูด บกพร่องกิจวัตรประจำวัน",
    "dchdate": "2022-12-19",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD3",
    "roomname": "กลับบ้าน",
    "roomno": "301",
    "bedno": "ก307",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 7950.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 7950.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  },
  {
    "cipn_billtran_id": 8,
    "an": "650002187",
    "auth_code": "M48LHT",
    "admdoctor_name": "[MASKED_FULLNAME]",
    "regdate": "2022-12-02",
    "regtime": "8:00:00",
    "prediag": "ไม่พูด กระตุ้นตัวเองเยาะ ส่งเสียงกระทืบเท้า ตีตัวเอง",
    "dchdate": "2022-12-19",
    "dchtime": "16:00:00",
    "dchtype_name": "With Approval",
    "dchstts_name": "Improved",
    "debt_id_list": "",
    "debt_money": null,
    "spclty_ward_name": "จิตเวช - IPD3",
    "roomname": "กลับบ้าน",
    "roomno": "301",
    "bedno": "ก320",
    "icd10": "F840",
    "icdname": "F840 - Pervasive developmental disorders",
    "income": 18300.0,
    "export_data_datetime": null,
    "cipn_pcode": null,
    "cipn_tcode": null,
    "cipn_drg": null,
    "cipn_rw": null,
    "cipn_adjrw": null,
    "cipn_amount_drg": null,
    "cipn_name": null,
    "cipn_pay_code": null,
    "cipn_desc": null,
    "cipn_error_code": null,
    "cipn_error_desc": null,
    "cipn_bill_confirm": "N",
    "cipn_bill_confirm_datetime": null,
    "d_claim_cat_amt": 18300.0,
    "t_claim_cat_amt": 0.0,
    "cipn_confirm_doc_no": null,
    "cipn_section_code": null,
    "error_list": null
  }
]
```
