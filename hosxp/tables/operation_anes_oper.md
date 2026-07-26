# `operation_anes_oper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_oper_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_oper_name | varchar(150) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_anes_oper_name | operation_anes_oper_name | yes | 1 |
| PRIMARY | operation_anes_oper_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "operation_anes_oper_id": 1,
    "operation_anes_oper_name": "บริการวางยาสลบแบบทั่วไป (GA) ชั่วโมงแรก",
    "icode": "3110137",
    "price": 1400.0,
    "hos_guid": "{3963523C-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 2,
    "operation_anes_oper_name": "บริการวางยาสลบแบบทั่วไป (GA) ชั่วโมงถัดไป",
    "icode": "3110138",
    "price": 1000.0,
    "hos_guid": "{3963544E-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 3,
    "operation_anes_oper_name": "บริการวางยาสลบทางเส้นเลือด (IVA) ต่อชั่วโมง",
    "icode": "3110139",
    "price": 700.0,
    "hos_guid": "{39635566-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 4,
    "operation_anes_oper_name": "บริการวางยาสลบเฉพาะแห่ง (RA) ต่อชั่วโมง",
    "icode": "3110140",
    "price": 700.0,
    "hos_guid": "{3963566A-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 5,
    "operation_anes_oper_name": "บริการฉีดยาชาเฉพาะที่ โดยทีมวิสัญญี (LA with MAC) ต่อครั้ง",
    "icode": "3110141",
    "price": 500.0,
    "hos_guid": "{39635764-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 6,
    "operation_anes_oper_name": "บริการที่ห้อง Recovery Room",
    "icode": "3110142",
    "price": 150.0,
    "hos_guid": "{3963585E-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 7,
    "operation_anes_oper_name": "Volatile anesthetic agents",
    "icode": "3150033",
    "price": 337.0,
    "hos_guid": "{39635958-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  },
  {
    "operation_anes_oper_id": 8,
    "operation_anes_oper_name": "ค่าใช้เครื่องวัดความเข้มข้นของไอระเหยของยาดมสลบ",
    "icode": "3150034",
    "price": 300.0,
    "hos_guid": "{39635A52-F61C-11DE-BFF4-00215E472B30}",
    "icd9": null
  }
]
```
