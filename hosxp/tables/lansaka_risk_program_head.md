# `lansaka_risk_program_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(2) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| head_id | int(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "name": "โปรแกรมที่ 1 สิทธิผู้ป่วย",
    "head_id": 1
  },
  {
    "id": 2,
    "name": "โปรแกรมที่ 2 การติดเชื้อในโรงพยาบาล",
    "head_id": 2
  },
  {
    "id": 3,
    "name": "โปรแกรมที่ 3.1 โครงสร้างกายภาพสิ่งแวดล้อม",
    "head_id": 3
  },
  {
    "id": 4,
    "name": "โปรแกรมที่ 3.2 เครื่องมือ/บุคลากร",
    "head_id": 3
  },
  {
    "id": 5,
    "name": "โปรแกรมที่ 3.3 ความปลอดภัย",
    "head_id": 3
  },
  {
    "id": 6,
    "name": "โปรแกรมที่ 3.4 อาชีวอนามัย/ความปลอดภัยในการทำงาน",
    "head_id": 3
  },
  {
    "id": 7,
    "name": "โปรแกรมที่ 4 ยาสารน้ำและการให้เลือด",
    "head_id": 4
  },
  {
    "id": 8,
    "name": "โปรแกรมที่ 5.1 การพลัดตกหกล้ม",
    "head_id": 5
  }
]
```
