# `physic_berg_balance_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_berg_balance_type_id | int(11) | NO | PRI | 0 |  |  |
| physic_berg_balance_type_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_berg_balance_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_berg_balance_type_id": 1,
    "physic_berg_balance_type_name": "การลุกยืน",
    "active": "Y",
    "order_no": 1,
    "note": "ให้ผู้สูงอายุนั่งเก้าอี้ แล้วลุกขึ้นยืน โดยไม่ให้ใช้มือช่วยพยุง "
  },
  {
    "physic_berg_balance_type_id": 2,
    "physic_berg_balance_type_name": "การยืน 2 นาทีโดยไม่ยึดเกาะ",
    "active": "Y",
    "order_no": 2,
    "note": "ให้ผู้สูงอายุยืนเป็นระยะเวลา 2 นาที โดยไม่ต้องใช้มือค้ำยันหรืออุปกรณ์ช่วยพยุง "
  },
  {
    "physic_berg_balance_type_id": 3,
    "physic_berg_balance_type_name": "การนั่งเก้าอี้โดยไม่พิงพนักเก้าอี้",
    "active": "Y",
    "order_no": 3,
    "note": "ให้ผู้สูงอายุนั่งบนเก้าอี้ โดยไม่พิงพนัก โดยขาทั้ง 2 ข้างตั้งฉากกับพื้น และให้วางฝ่าเท้าราบบนพื้นนาน 2 นาที "
  },
  {
    "physic_berg_balance_type_id": 4,
    "physic_berg_balance_type_name": "การนั่งลง",
    "active": "Y",
    "order_no": 4,
    "note": "ให้ผู้สูงอายุอยู่ในท่ายืน แล้วนั่งลงบนเก้าอี้ โดยไม่ใช้มือค้ำยันหรืออุปกรณ์ช่วยพยุง "
  },
  {
    "physic_berg_balance_type_id": 5,
    "physic_berg_balance_type_name": "การเคลื่อนย้าย",
    "active": "Y",
    "order_no": 5,
    "note": "ให้ผู้สูงอายุลุกจากเก้าอี้หนึ่งไปอีกเก้าอี้หนึ่ง ที่วางอยู่ทิศตรงข้ามกัน ระยะห่างของเก้าอี้ห่างประมาณ 1ก้าว "
  },
  {
    "physic_berg_balance_type_id": 6,
    "physic_berg_balance_type_name": "การยืนนิ่งหลับตา",
    "active": "Y",
    "order_no": 6,
    "note": "ให้ผู้สูงอายุยืนหลับตา นาน 10 วินาที"
  },
  {
    "physic_berg_balance_type_id": 7,
    "physic_berg_balance_type_name": "การยืนเท้าทั้งสองข้าง ชิดกัน",
    "active": "Y",
    "order_no": 7,
    "note": "ให้ผู้สูงอายุยืนวางเท้าชิดกัน นาน 1 นาที โดยไม่ใช้มือค้ำยันหรืออุปกรณ์ช่วยพยุง"
  },
  {
    "physic_berg_balance_type_id": 8,
    "physic_berg_balance_type_name": "การยกแขนขนานพื้นและเอนตัวไปข้างหน้า",
    "active": "Y",
    "order_no": 8,
    "note": "ให้ผู้สูงอายุยืนวางเท้าชิดกัน นาน 1 นาที โดยไม่ใช้มือค้ำยันหรืออุปกรณ์ช่วยพยุง"
  }
]
```
