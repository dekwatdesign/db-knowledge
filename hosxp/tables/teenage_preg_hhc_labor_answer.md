# `teenage_preg_hhc_labor_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_labor_answer_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_labor_answer_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_labor_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "teenage_preg_hhc_labor_answer_id": 1,
    "teenage_preg_hhc_labor_answer_name": "ปกติ",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 2,
    "teenage_preg_hhc_labor_answer_name": "แผลแยก",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 3,
    "teenage_preg_hhc_labor_answer_name": "แผลอักเสบ ปวด บวมแดง",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 4,
    "teenage_preg_hhc_labor_answer_name": "อื่นๆ",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 5,
    "teenage_preg_hhc_labor_answer_name": "ผิดปกติ",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 6,
    "teenage_preg_hhc_labor_answer_name": "เลือดออกเป็นก้อน ลิ่มเลือด",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 7,
    "teenage_preg_hhc_labor_answer_name": "ตัวร้อน มีไข้ติดต่อกัน 2 วัน",
    "hos_guid": null
  },
  {
    "teenage_preg_hhc_labor_answer_id": 8,
    "teenage_preg_hhc_labor_answer_name": "ปัสสาวะแสบขัด กะปริบกะปรอย หรือปัสสาวะไม่ออก",
    "hos_guid": null
  }
]
```
