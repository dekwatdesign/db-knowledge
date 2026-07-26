# `physic_barthel_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_barthel_activity_id | int(11) | NO | PRI | 0 |  |  |
| physic_barthel_activity_order_no | int(11) | YES |  | NULL |  |  |
| physic_barthel_activity_name | varchar(255) | YES |  | NULL |  |  |
| physic_barthel_activity_note | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | physic_barthel_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_barthel_activity_id": 1,
    "physic_barthel_activity_order_no": 1,
    "physic_barthel_activity_name": "Feeding",
    "physic_barthel_activity_note": "การรับประทานอาหารเมื่อเตรียมสำรับไว้ให้เรียบร้อยต่อหน้า\r\n",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 2,
    "physic_barthel_activity_order_no": 2,
    "physic_barthel_activity_name": "Transfer",
    "physic_barthel_activity_note": "ลุกนั่งจากที่นอน  หรือจากเตียงไปยังเก้าอี้",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 3,
    "physic_barthel_activity_order_no": 3,
    "physic_barthel_activity_name": "Grooming",
    "physic_barthel_activity_note": "ล้างหน้า  หวีผม  แปรงฟัน  โกนหนวด  ในระยะ  24-48  ชั่วโมงที่ผ่านมา",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 4,
    "physic_barthel_activity_order_no": 4,
    "physic_barthel_activity_name": " Toilet  Use",
    "physic_barthel_activity_note": "การเข้าห้องน้ำ",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 5,
    "physic_barthel_activity_order_no": 5,
    "physic_barthel_activity_name": "Bathing",
    "physic_barthel_activity_note": "การอาบน้ำ",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 6,
    "physic_barthel_activity_order_no": 6,
    "physic_barthel_activity_name": "Mobility",
    "physic_barthel_activity_note": "การเคลื่อนที่ภายในห้องหรือบ้าน",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 7,
    "physic_barthel_activity_order_no": 7,
    "physic_barthel_activity_name": "Stairs",
    "physic_barthel_activity_note": "การขึ้นลงบันได  1  ขั้น",
    "active": "Y",
    "order_no": null
  },
  {
    "physic_barthel_activity_id": 8,
    "physic_barthel_activity_order_no": 8,
    "physic_barthel_activity_name": "Dressing",
    "physic_barthel_activity_note": "การสวมใส่เสื้อผ้า",
    "active": "Y",
    "order_no": null
  }
]
```
