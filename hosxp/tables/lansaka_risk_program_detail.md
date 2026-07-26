# `lansaka_risk_program_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(3) | NO | PRI | 0 |  |  |
| head_id | int(2) | YES |  | NULL |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| orderitem | int(3) | YES |  | NULL |  |  |

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
    "head_id": 1,
    "name": "1.1 เปิดเผยข้อมูลผู้ป่วย",
    "orderitem": 1
  },
  {
    "id": 2,
    "head_id": 1,
    "name": "1.2 บริการไม่เท่าเทียมกัน",
    "orderitem": 2
  },
  {
    "id": 3,
    "head_id": 1,
    "name": "1.3 ใบเซนต์ยินยอมไม่ครบ/ไม่ถุกต้อง/ไม่ได้เซนต์",
    "orderitem": 3
  },
  {
    "id": 4,
    "head_id": 1,
    "name": "1.4 การ restrain ที่ไม่อธิบายแก่ญาติ",
    "orderitem": 4
  },
  {
    "id": 5,
    "head_id": 1,
    "name": "1.5 ลำดับคิวผิด",
    "orderitem": 5
  },
  {
    "id": 6,
    "head_id": 1,
    "name": "1.6 ผู้ป่วยได้รับข้อมูลไม่ครบ",
    "orderitem": 6
  },
  {
    "id": 7,
    "head_id": 1,
    "name": "1.7 สิทธิการรักษาผิด",
    "orderitem": 7
  },
  {
    "id": 8,
    "head_id": 1,
    "name": "1.8 อื่นๆ",
    "orderitem": 8
  }
]
```
