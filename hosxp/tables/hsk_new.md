# `hsk_new`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nid | int(5) | NO | PRI | 0 |  |  |
| vstdate | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| detail | varchar(200) | YES |  | NULL |  |  |
| st | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nid": 1,
    "vstdate": "2020-06-18 15:52:11",
    "staff": "[MASKED_FULLNAME]",
    "detail": "แก้ไขเมนู Lab ผู้ป่วยในให้แสดงข้อมูลประวัติย้อนหลังได้ตั้งแต่ Admit ครั้งแรก",
    "st": "N"
  },
  {
    "nid": 2,
    "vstdate": "2020-06-18 15:52:31",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มแบบประเมิน SAVE ในเมนูผู้ป่วยในเพื่อรองรับการบันทึกประเมิน SAVE",
    "st": "N"
  },
  {
    "nid": 3,
    "vstdate": "2020-06-20 12:53:01",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มสีแจ้งเตือนวันนอนนาน เกิน 35 วันสิทธิบัตรทอง",
    "st": "N"
  },
  {
    "nid": 4,
    "vstdate": "2020-06-20 12:53:11",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มผลการประเมิน SAVE แสดงในหน้ารายชื่อผู้ป่วย",
    "st": "N"
  },
  {
    "nid": 5,
    "vstdate": "2020-06-20 14:04:29",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มแบบประเมิน BPRS ในเมนูผู้ป่วยในเพื่อรองรับการบันทึกประเมิน BPRS",
    "st": "N"
  },
  {
    "nid": 6,
    "vstdate": "2020-06-23 12:29:19",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มปุ๋มแสดงผลการประเมินที่ผ่านมา BPRS และ SAVE",
    "st": "N"
  },
  {
    "nid": 7,
    "vstdate": "2020-07-08 12:17:26",
    "staff": "[MASKED_FULLNAME]",
    "detail": "แก้ไขแบบประเมิน BPRS ให้แสดงผลการเมินครั้งล่าสุดในแบบประเมิน",
    "st": "N"
  },
  {
    "nid": 8,
    "vstdate": "2020-08-20 08:34:24",
    "staff": "[MASKED_FULLNAME]",
    "detail": "เพิ่มการบันทึกกรณีผู้ป่วย Readmit ซ้ำ ",
    "st": "N"
  }
]
```
