# `income_report_sss`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(12) | NO | PRI |  |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| hlevel | int(11) | YES |  | NULL |  |  |
| order_number | int(11) | YES |  | NULL |  |  |
| parent_code | varchar(6) | YES |  | NULL |  |  |
| ename | varchar(250) | YES |  | NULL |  |  |
| print_use_summary | char(1) | YES |  | NULL |  |  |
| summary_unit | varchar(20) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "1",
    "name": "ค่ารักษาพยาบาล",
    "hlevel": 1,
    "order_number": 1,
    "parent_code": null,
    "ename": "Medical Services",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1",
    "name": "ค่าบริการทางการแพทย์",
    "hlevel": 2,
    "order_number": 2,
    "parent_code": "1",
    "ename": "Hospital Medical Expenses",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.1",
    "name": "ค่ายาและสารอาหารทางเส้นเลือด",
    "hlevel": 3,
    "order_number": 3,
    "parent_code": "1.1",
    "ename": "Drugs and Parenteral Nutrition",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.1(1)",
    "name": "ยาผู้ป่วยใน",
    "hlevel": 4,
    "order_number": 4,
    "parent_code": "1.1.1",
    "ename": "Medication - Inpatient",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.1(2)",
    "name": "ยาผู้ป่วยกลับบ้าน",
    "hlevel": 4,
    "order_number": 5,
    "parent_code": "1.1.1",
    "ename": "Home Medication",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.1(3)",
    "name": "ยาผู้ป่วยนอก",
    "hlevel": 4,
    "order_number": 6,
    "parent_code": "1.1.1",
    "ename": "Medication - Outpatient",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.10",
    "name": "ค่าบริการทางกายภาพบำบัด",
    "hlevel": 3,
    "order_number": 23,
    "parent_code": "1.1",
    "ename": "Physical Therapy",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "1.1.11",
    "name": "ค่าบริการฝังเข็ม",
    "hlevel": 3,
    "order_number": 24,
    "parent_code": "1.1",
    "ename": "Acupuncture",
    "print_use_summary": null,
    "summary_unit": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
