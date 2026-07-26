# `dataaudit_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| host | varchar(60) | NO | PRI |  |  |  |
| report_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| detail | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | host | yes | 1 |
| PRIMARY | report_datetime | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 14:56:13",
    "detail": "ตรวจสอบค่าห้อง วันนอน (อปท จ่ายตรง ชำระเอง)"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 14:56:46",
    "detail": "ตรวจสอบค่าห้อง วันนอน (อปท จ่ายตรง ชำระเอง)"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 14:57:03",
    "detail": "ตรวจสอบผู้ป่วย UC นอกเขต Admit น่าจะเป็น AE แทนไหม"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 14:59:39",
    "detail": "ตรวจการมารับบริการครั้งสุดท้าย 5 ปีขึ้นไป --"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 15:01:01",
    "detail": "ตรวจสอบ ซ้ำซ้อน นามสกุล วันเกิด เหมือนกัน แต่เลขบัตรประชาชน ไม่เหมือนกัน"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 16:19:30",
    "detail": "ตรวจสอบ ซ้ำซ้อน ชื่อ วันเกิด เหมือนกัน แต่เลขบัตรประชาชน ไม่เหมือนกัน"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 16:20:35",
    "detail": "ตรวจสอบ ซ้ำซ้อน นามสกุล วันเกิด เหมือนกัน แต่เลขบัตรประชาชน ไม่เหมือนกัน"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2025-11-24 16:21:47",
    "detail": "B2-ห้ามให้รหัส ICD10  (V,W,X,Y) เป็นโรคหลัก"
  }
]
```
