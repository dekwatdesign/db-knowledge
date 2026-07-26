# `supplies_vendor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| VENDOR_ID | int | NO | PRI | NULL | auto_increment |  |
| VENDOR_NAME | varchar(50) | YES | MUL |  |  |  |
| VENDOR_EMAIL | varchar(50) | YES |  |  |  |  |
| VENDOR_ADDRESS | varchar(80) | YES |  |  |  |  |
| VENDOR_PHONE | varchar(80) | YES |  |  |  |  |
| VENDOR_POSTCODE | varchar(5) | YES |  |  |  |  |
| VENDOR_NAME_SHOT | varchar(10) | YES |  |  |  |  |
| VAT_NUM | varchar(20) | YES |  |  |  |  |
| VENDOR_NUM | varchar(20) | YES | MUL |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| VENDOR_CONTECT | varchar(100) | YES |  |  |  | ชื่อผู้ติดต่อ |
| VENDOR_TAX_NUM | varchar(50) | YES |  |  |  |  |
| VENDOR_FAX | varchar(50) | YES |  |  |  |  |
| VENDOR_BANK_NAME | varchar(100) | YES |  |  |  | ชื่อบัญชีธนาคาร |
| VENDOR_BANK_NUM | varchar(100) | YES |  |  |  | เลขที่บัญชีธนาคาร |
| VENDOR_BANK | varchar(100) | YES |  |  |  | ธนาคาร |
| VENDOR_BANK_TYPE | varchar(100) | YES |  |  |  | ประเภทบัญชี |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_VENDOR_ID | VENDOR_ID | no | 1 |
| IX_VENDOR_NAME | VENDOR_NAME | no | 1 |
| IX_VENDOR_NUM | VENDOR_NUM | no | 1 |
| PRIMARY | VENDOR_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "VENDOR_ID": 1,
    "VENDOR_NAME": "บริษัท ทดสอบ จำกัด",
    "VENDOR_EMAIL": "test@email.com",
    "VENDOR_ADDRESS": "123 ต.ปากน้ำ อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    "VENDOR_PHONE": "0 2380 5601",
    "VENDOR_POSTCODE": "10270",
    "VENDOR_NAME_SHOT": "",
    "VAT_NUM": "",
    "VENDOR_NUM": "",
    "ACTIVE": "True",
    "VENDOR_CONTECT": "",
    "VENDOR_TAX_NUM": "",
    "VENDOR_FAX": "",
    "VENDOR_BANK_NAME": "",
    "VENDOR_BANK_NUM": "",
    "VENDOR_BANK": "",
    "VENDOR_BANK_TYPE": "",
    "updated_at": "2022-01-18 13:48:35",
    "created_at": "2022-01-18 13:48:38"
  },
  {
    "VENDOR_ID": 2,
    "VENDOR_NAME": "บริษัท เอ สแควร์ จำกัด",
    "VENDOR_EMAIL": "pracha.imail@gmail.com",
    "VENDOR_ADDRESS": "[MASKED_FULLNAME]",
    "VENDOR_PHONE": "0 2542 2108-9",
    "VENDOR_POSTCODE": "10230",
    "VENDOR_NAME_SHOT": "",
    "VAT_NUM": "",
    "VENDOR_NUM": "",
    "ACTIVE": "True",
    "VENDOR_CONTECT": "",
    "VENDOR_TAX_NUM": "",
    "VENDOR_FAX": "",
    "VENDOR_BANK_NAME": "",
    "VENDOR_BANK_NUM": "",
    "VENDOR_BANK": "",
    "VENDOR_BANK_TYPE": "",
    "updated_at": "2022-01-18 13:48:35",
    "created_at": "2022-01-18 13:48:38"
  },
  {
    "VENDOR_ID": 3,
    "VENDOR_NAME": "บริษัท บางกอก เมดิคอล ซอฟต์แวร์ จำกัด",
    "VENDOR_EMAIL": "bms.marketing2017@gmail.com",
    "VENDOR_ADDRESS": "เลขที่ 2 ชั้น 2 ซ.สุขสวัสดิ์ 33 แขวง/เขต ราษฎร์บูรณะ กรุงเทพมหานคร",
    "VENDOR_PHONE": "0 2427 9991",
    "VENDOR_POSTCODE": "10140",
    "VENDOR_NAME_SHOT": "",
    "VAT_NUM": "",
    "VENDOR_NUM": "",
    "ACTIVE": "True",
    "VENDOR_CONTECT": "ฝ่ายการขายและการตลาด",
    "VENDOR_TAX_NUM": "1xxxxxxxxxxxx",
    "VENDOR_FAX": "0 2873 0292",
    "VENDOR_BANK_NAME": "บริษัท บางกอก เมดิคอล ซอฟต์แวร์ จำกัด",
    "VENDOR_BANK_NUM": "1730029841",
    "VENDOR_BANK": "กรุงไทย สาขาบิ็กซี การเคหะ พระราม 2",
    "VENDOR_BANK_TYPE": "",
    "updated_at": "2023-11-09 10:40:19",
    "created_at": "2023-11-09 10:40:22"
  }
]
```
