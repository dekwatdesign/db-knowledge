# `doctor_cert_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_cert_type_id | int(11) | NO | PRI | 0 |  |  |
| doctor_cert_type_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | varchar(9) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| is_covid19_cert | char(1) | YES |  | NULL |  |  |
| inet_signed_document_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_cert_type_name | doctor_cert_type_name | yes | 1 |
| PRIMARY | doctor_cert_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_cert_type_id": 1,
    "doctor_cert_type_name": "ใบรับรองแพทย์วัคซีน Covid19 (เข็ม 1-3)",
    "icode": null,
    "price": null,
    "is_covid19_cert": "Y",
    "inet_signed_document_type_id": null
  },
  {
    "doctor_cert_type_id": 2,
    "doctor_cert_type_name": "ใบรับรองแพทย์วัคซีน Covid19 (เข็ม 1-4)",
    "icode": null,
    "price": null,
    "is_covid19_cert": "Y",
    "inet_signed_document_type_id": null
  },
  {
    "doctor_cert_type_id": 3,
    "doctor_cert_type_name": "ใบรับรองแพทย์วัคซีน Covid19 กรณีฉีดจากต่างประเทศมาแล้ว",
    "icode": null,
    "price": null,
    "is_covid19_cert": "Y",
    "inet_signed_document_type_id": null
  },
  {
    "doctor_cert_type_id": 4,
    "doctor_cert_type_name": "ใบรับรองแพทย์รับรองความพิการ",
    "icode": null,
    "price": null,
    "is_covid19_cert": null,
    "inet_signed_document_type_id": 10
  },
  {
    "doctor_cert_type_id": 5,
    "doctor_cert_type_name": "ใบรับรองแพทย์ความคิดเห็นแพทย์",
    "icode": null,
    "price": null,
    "is_covid19_cert": null,
    "inet_signed_document_type_id": 1
  },
  {
    "doctor_cert_type_id": 6,
    "doctor_cert_type_name": "ใบรับรองแพทย์ ส่งตัวเพื่อรักษาต่อเนื่อง",
    "icode": null,
    "price": null,
    "is_covid19_cert": null,
    "inet_signed_document_type_id": 12
  },
  {
    "doctor_cert_type_id": 7,
    "doctor_cert_type_name": "ใบสั่งยา ePrescription",
    "icode": null,
    "price": null,
    "is_covid19_cert": null,
    "inet_signed_document_type_id": 13
  },
  {
    "doctor_cert_type_id": 8,
    "doctor_cert_type_name": "ใบสั่ง Lab",
    "icode": null,
    "price": null,
    "is_covid19_cert": null,
    "inet_signed_document_type_id": 14
  }
]
```
