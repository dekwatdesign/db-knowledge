# `informcom_supplier_repair`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUPPLIER_ID | int | NO | PRI | NULL | auto_increment |  |
| SUPPLIER_NAME | varchar(255) | YES |  |  |  |  |
| ADDRESS | varchar(254) | YES |  |  |  |  |
| PHONE | varchar(50) | YES |  |  |  |  |
| FAX | varchar(50) | YES |  |  |  |  |
| MOBILE | varchar(50) | YES |  |  |  |  |
| CONTACT | varchar(30) | YES |  |  |  |  |
| TAX_NUM | varchar(100) | YES |  |  |  |  |
| EMAIL | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUPPLIER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SUPPLIER_ID": 6,
    "SUPPLIER_NAME": "บริษัท สมาร์ท เทคโนโลยี โซลูชั่น จำกัด",
    "ADDRESS": "222/6-7 หมู่ 9 ถนนสุขุมวิท 107 ตำบลสำโรงเหนือ อำเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10270",
    "PHONE": "08-6510-5074",
    "FAX": "0-2743-3379",
    "MOBILE": "08-6510-5074",
    "CONTACT": "Churaluck Likitamporn",
    "TAX_NUM": "",
    "EMAIL": "churaluck_l@smarttech.co.th",
    "updated_at": "2023-05-24 03:38:49",
    "created_at": "2023-05-24 03:38:49"
  }
]
```
