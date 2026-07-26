# `inet_signed_document_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inet_signed_document_type_id | int(11) | NO | PRI | 0 |  |  |
| inet_signed_document_type_name | varchar(200) | YES | UNI | NULL |  |  |
| inet_signed_document_type_code | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_inet_signed_document_type_name | inet_signed_document_type_name | yes | 1 |
| PRIMARY | inet_signed_document_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "inet_signed_document_type_id": 1,
    "inet_signed_document_type_name": "ใบรับรองแพทย์ความคิดเห็นแพทย์",
    "inet_signed_document_type_code": "COMMENT-CERT"
  },
  {
    "inet_signed_document_type_id": 2,
    "inet_signed_document_type_name": "ใบรับรองแพทย์ (ตรวจสุขภาพ)",
    "inet_signed_document_type_code": "MEDICAL-CERT"
  },
  {
    "inet_signed_document_type_id": 3,
    "inet_signed_document_type_name": "ใบรับรองแพทย์แรงงานต่างด้าว",
    "inet_signed_document_type_code": "ALIEN-CERT"
  },
  {
    "inet_signed_document_type_id": 4,
    "inet_signed_document_type_name": "ใบรับรองแพทย์ Covid-19",
    "inet_signed_document_type_code": "COVID19-CERT"
  },
  {
    "inet_signed_document_type_id": 5,
    "inet_signed_document_type_name": "ใบรับรองแพทย์การฉีดวัคซีน Covid-19",
    "inet_signed_document_type_code": "COVID19-VACC-CERT"
  },
  {
    "inet_signed_document_type_id": 6,
    "inet_signed_document_type_name": "ใบรับรองการตรวจหาเชื้อ Covid-19",
    "inet_signed_document_type_code": "COVID19-LAB-CERT"
  },
  {
    "inet_signed_document_type_id": 7,
    "inet_signed_document_type_name": "ใบรับรองแพทย์สำหรับทำใบขับขี่",
    "inet_signed_document_type_code": "MEDICAL-DRIVE-CERT"
  },
  {
    "inet_signed_document_type_id": 8,
    "inet_signed_document_type_name": "ใบรับรองแพทย์สำหรับทำประกันสุขภาพ",
    "inet_signed_document_type_code": "MEDICAL-CLAIM-CERT"
  }
]
```
