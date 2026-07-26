# `authentype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Code | varchar(15) | NO | PRI |  |  |  |
| Name | varchar(200) | YES | MUL | NULL |  |  |
| Active | varchar(1) | YES |  | Y |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| name | Name | no | 1 |
| PRIMARY | Code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "Code": "PG0060001",
    "Name": "เข้ารับบริการรักษาทั่วไป (OPD/ IPD/ PP)",
    "Active": "Y"
  },
  {
    "Code": "PG0090001",
    "Name": "การดูแลรักษาในที่พัก (Home Isolation)",
    "Active": "N"
  },
  {
    "Code": "PG0080001",
    "Name": "การดูแลรักษาในชุมชน (Community Isolationstore)",
    "Active": "N"
  },
  {
    "Code": "PG0110001",
    "Name": "Self Isolation",
    "Active": "Y"
  },
  {
    "Code": "PG0120001",
    "Name": "UCEP PLUS (ผู้ป่วยกลุ่มอาการเหลืองและแดง)",
    "Active": "Y"
  },
  {
    "Code": "PG0130001",
    "Name": "บริการฟอกเลือดด้วยเครื่องไตเทียม (HD)",
    "Active": "Y"
  },
  {
    "Code": "PG0150001",
    "Name": "บริการดูแลเจ็บป่วยเบื้องต้น (Common illnesses)",
    "Active": "Y"
  },
  {
    "Code": "PG0140001",
    "Name": "บริการ HomeWard",
    "Active": "Y"
  }
]
```
