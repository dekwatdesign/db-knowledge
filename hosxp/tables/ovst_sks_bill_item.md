# `ovst_sks_bill_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sks_bill_item_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(50) | YES | MUL | NULL |  |  |
| invno | varchar(25) | YES |  | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| billmuad | varchar(2) | YES |  | NULL |  |  |
| lc_code | varchar(15) | YES |  | NULL |  |  |
| std_code | varchar(25) | YES |  | NULL |  |  |
| description | varchar(150) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| claim_unitprice | double(15,3) | YES |  | NULL |  |  |
| claim_amount | double(15,3) | YES |  | NULL |  |  |
| service_ref_id | varchar(40) | YES |  | NULL |  |  |
| claim_cat | varchar(3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| icd_code | varchar(10) | YES |  | NULL |  |  |
| icd_code_ref | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_sks_bill_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sks_bill_item_id": 100204,
    "vn": "620621090002:269007",
    "invno": "269007",
    "service_date": "2019-06-20",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 50.0,
    "charge_amount": 50.0,
    "claim_unitprice": 50.0,
    "claim_amount": 50.0,
    "service_ref_id": "620621090002",
    "claim_cat": "OP1",
    "opi_guid": "{4E1C9DF4-DC34-41FF-9502-B86BEA5CD635}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 100203,
    "vn": "620618083200:268592",
    "invno": "268592",
    "service_date": "2019-06-18",
    "billmuad": "3",
    "lc_code": "1000097",
    "std_code": "431051",
    "description": "Methylphenidate(RITALIN:ริตาลิน) 10 mg เม็ด",
    "qty": 70,
    "unitprice": 6.0,
    "charge_amount": 420.0,
    "claim_unitprice": 6.0,
    "claim_amount": 420.0,
    "service_ref_id": "000738877",
    "claim_cat": "OP1",
    "opi_guid": "{A4D02843-CFEE-442D-A88F-FA3206DC1D2A}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 100202,
    "vn": "620618083200:268592",
    "invno": "268592",
    "service_date": "2019-06-17",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 50.0,
    "charge_amount": 50.0,
    "claim_unitprice": 50.0,
    "claim_amount": 50.0,
    "service_ref_id": "620618083200",
    "claim_cat": "OP1",
    "opi_guid": "{9A381545-6812-46F6-8ACC-3A0A8E735C4F}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 100201,
    "vn": "620618083044:268596",
    "invno": "268596",
    "service_date": "2019-06-18",
    "billmuad": "3",
    "lc_code": "1000009",
    "std_code": "464699",
    "description": "Amitriptyline 25 mg เม็ด",
    "qty": 150,
    "unitprice": 0.75,
    "charge_amount": 113.0,
    "claim_unitprice": 0.75,
    "claim_amount": 113.0,
    "service_ref_id": "000738782",
    "claim_cat": "OP1",
    "opi_guid": "{F4C3DCE9-459D-49A7-940B-52413451EF1B}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 100200,
    "vn": "620618083044:268596",
    "invno": "268596",
    "service_date": "2019-06-18",
    "billmuad": "3",
    "lc_code": "1000092",
    "std_code": "246778",
    "description": "LORazepam 1 mg เม็ด",
    "qty": 150,
    "unitprice": 1.0,
    "charge_amount": 150.0,
    "claim_unitprice": 1.0,
    "claim_amount": 150.0,
    "service_ref_id": "000738782",
    "claim_cat": "OP1",
    "opi_guid": "{ACD03FEA-82B9-4C64-A23E-027A9EF1B2EC}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 100199,
    "vn": "620618083044:268596",
    "invno": "268596",
    "service_date": "2019-06-17",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 50.0,
    "charge_amount": 50.0,
    "claim_unitprice": 50.0,
    "claim_amount": 50.0,
    "service_ref_id": "620618083044",
    "claim_cat": "OP1",
    "opi_guid": "{6D3856FC-2370-470E-A67E-EC697EDAE36F}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 589069,
    "vn": "660324083000:385591",
    "invno": "385591",
    "service_date": "2023-03-24",
    "billmuad": "7",
    "lc_code": "3000458",
    "std_code": "320047",
    "description": "Bilirubin Direct",
    "qty": 1,
    "unitprice": 50.0,
    "charge_amount": 50.0,
    "claim_unitprice": 50.0,
    "claim_amount": 50.0,
    "service_ref_id": "660324083000",
    "claim_cat": "OP1",
    "opi_guid": "{12A4FFA4-EAF4-43C5-BB35-D023A07B5EF0}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sks_bill_item_id": 589070,
    "vn": "660324083000:385591",
    "invno": "385591",
    "service_date": "2023-03-24",
    "billmuad": "7",
    "lc_code": "3000305",
    "std_code": "",
    "description": "ค่าส่วนเกิน (LAB)",
    "qty": 1,
    "unitprice": 110.0,
    "charge_amount": 110.0,
    "claim_unitprice": 0.0,
    "claim_amount": 0.0,
    "service_ref_id": "660324083000",
    "claim_cat": "OP1",
    "opi_guid": "{14B5598B-90D3-4CF0-A116-AB0538CA0754}",
    "icd_code": "",
    "icd_code_ref": ""
  }
]
```
