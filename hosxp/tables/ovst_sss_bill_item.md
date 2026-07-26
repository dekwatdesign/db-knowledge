# `ovst_sss_bill_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sss_bill_item_id | int(11) | NO | PRI | 0 |  |  |
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
| PRIMARY | ovst_sss_bill_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sss_bill_item_id": 1069,
    "vn": "650223060246:350070",
    "invno": "350070",
    "service_date": "2022-02-23",
    "billmuad": "7",
    "lc_code": "3002041",
    "std_code": "350509",
    "description": "SARS-CoV-2 Ag Rapid Test",
    "qty": 1,
    "unitprice": 450.0,
    "charge_amount": 450.0,
    "claim_unitprice": 450.0,
    "claim_amount": 450.0,
    "service_ref_id": "650223060246",
    "claim_cat": "OP1",
    "opi_guid": "{2E231C4A-58A3-4362-9B7C-6ACBB16E0D81}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1070,
    "vn": "650223060246:350070",
    "invno": "350070",
    "service_date": "2022-02-23",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 0.0,
    "charge_amount": 0.0,
    "claim_unitprice": 0.0,
    "claim_amount": 0.0,
    "service_ref_id": "650223060246",
    "claim_cat": "OP1",
    "opi_guid": "{810617C7-0DC6-4B4B-A903-C8FD1A9A1E74}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1071,
    "vn": "650223060249:350073",
    "invno": "350073",
    "service_date": "2022-02-23",
    "billmuad": "7",
    "lc_code": "3002041",
    "std_code": "350509",
    "description": "SARS-CoV-2 Ag Rapid Test",
    "qty": 1,
    "unitprice": 450.0,
    "charge_amount": 450.0,
    "claim_unitprice": 450.0,
    "claim_amount": 450.0,
    "service_ref_id": "650223060249",
    "claim_cat": "OP1",
    "opi_guid": "{3773AD4C-B32E-41F8-A231-2D334D02E3D0}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1072,
    "vn": "650223060249:350073",
    "invno": "350073",
    "service_date": "2022-02-23",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 0.0,
    "charge_amount": 0.0,
    "claim_unitprice": 0.0,
    "claim_amount": 0.0,
    "service_ref_id": "650223060249",
    "claim_cat": "OP1",
    "opi_guid": "{A0D27A97-192C-4B19-8392-CCCE8CF23A49}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1073,
    "vn": "650223060257:350080",
    "invno": "350080",
    "service_date": "2022-02-23",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 0.0,
    "charge_amount": 0.0,
    "claim_unitprice": 0.0,
    "claim_amount": 0.0,
    "service_ref_id": "650223060257",
    "claim_cat": "OP1",
    "opi_guid": "{6DB41BC5-10AF-4979-9548-A384364D1458}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1074,
    "vn": "650223060257:350080",
    "invno": "350080",
    "service_date": "2022-02-23",
    "billmuad": "7",
    "lc_code": "3002041",
    "std_code": "350509",
    "description": "SARS-CoV-2 Ag Rapid Test",
    "qty": 1,
    "unitprice": 450.0,
    "charge_amount": 450.0,
    "claim_unitprice": 450.0,
    "claim_amount": 450.0,
    "service_ref_id": "650223060257",
    "claim_cat": "OP1",
    "opi_guid": "{E6891586-F556-46EC-BB96-E7D7C634816C}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1075,
    "vn": "650223060300:350082",
    "invno": "350082",
    "service_date": "2022-02-23",
    "billmuad": "7",
    "lc_code": "3002041",
    "std_code": "350509",
    "description": "SARS-CoV-2 Ag Rapid Test",
    "qty": 1,
    "unitprice": 450.0,
    "charge_amount": 450.0,
    "claim_unitprice": 450.0,
    "claim_amount": 450.0,
    "service_ref_id": "650223060300",
    "claim_cat": "OP1",
    "opi_guid": "{B360A44B-895D-43F7-A1E2-8E8A001BA164}",
    "icd_code": "",
    "icd_code_ref": ""
  },
  {
    "ovst_sss_bill_item_id": 1076,
    "vn": "650223060300:350082",
    "invno": "350082",
    "service_date": "2022-02-23",
    "billmuad": "C",
    "lc_code": "3000001",
    "std_code": "55020",
    "description": "ค่าบริการผู้ป่วยนอก ในเวลาราชการ",
    "qty": 1,
    "unitprice": 0.0,
    "charge_amount": 0.0,
    "claim_unitprice": 0.0,
    "claim_amount": 0.0,
    "service_ref_id": "650223060300",
    "claim_cat": "OP1",
    "opi_guid": "{F8CA7537-96D2-438A-8B00-AE39A9652E8E}",
    "icd_code": "",
    "icd_code_ref": ""
  }
]
```
