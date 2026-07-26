# `physic_barthel_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_barthel_value_id | int(11) | NO | PRI | 0 |  |  |
| physic_barthel_activity_id | int(11) | YES | MUL | NULL |  |  |
| physic_barthel_value_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| value | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_barthel_activity4 | physic_barthel_activity_id | no | 1 |
| PRIMARY | physic_barthel_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_barthel_value_id": 1,
    "physic_barthel_activity_id": 1,
    "physic_barthel_value_name": "ไม่สามารถตักอาหารเข้าปากได้  ต้องมีคนป้อนให้",
    "active": "Y",
    "value": 0
  },
  {
    "physic_barthel_value_id": 2,
    "physic_barthel_activity_id": 1,
    "physic_barthel_value_name": "ช่วยใช้ช้อนตักอาหารไว้ให้  หรือ  ตัดให้เป็นชิ้นเล็กๆ  ไว้ล่วงหน้า",
    "active": "Y",
    "value": 5
  },
  {
    "physic_barthel_value_id": 3,
    "physic_barthel_activity_id": 1,
    "physic_barthel_value_name": "ตักอาหารและช่วยตัวเองได้ปกติ",
    "active": "Y",
    "value": 10
  },
  {
    "physic_barthel_value_id": 4,
    "physic_barthel_activity_id": 2,
    "physic_barthel_value_name": "ไม่สามารถนั่งได้ (นั่งแล้วจะล้มเสมอ)  หรือต้องใช้คนสองคนช่วยกันยกขึ้น",
    "active": "Y",
    "value": 0
  },
  {
    "physic_barthel_value_id": 5,
    "physic_barthel_activity_id": 2,
    "physic_barthel_value_name": "ต้องการความช่วยเหลืออย่างมากจึงจะนั่งได้  เช่น  ต้องใช้คนที่แข็งแรงหรือมีทักษะ  1  คน  หรือใช้คนทั่วไป  2  คนพยุง  หรือดันขึ้นมาจึงจะนั่งอยู่ได้",
    "active": "Y",
    "value": 5
  },
  {
    "physic_barthel_value_id": 6,
    "physic_barthel_activity_id": 2,
    "physic_barthel_value_name": "ต้องการความช่วยเหลือบ้าง  เช่น  บอกให้ทำตาม  หรือช่วยพยุงเล็กน้อย  หรือต้องมีคนดูแลความปลอดภัย",
    "active": "Y",
    "value": 10
  },
  {
    "physic_barthel_value_id": 7,
    "physic_barthel_activity_id": 2,
    "physic_barthel_value_name": "ทำได้เอง",
    "active": "Y",
    "value": 15
  },
  {
    "physic_barthel_value_id": 9,
    "physic_barthel_activity_id": 3,
    "physic_barthel_value_name": "ทำได้เอง (รวมทั้งที่ทำได้เองถ้าเตรียมอุปกรณ์ไว้ให้)",
    "active": "Y",
    "value": 5
  }
]
```
