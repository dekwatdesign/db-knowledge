# `physic_snmrc_activity`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_snmrc_activity_id | int(11) | NO | PRI | 0 |  |  |
| physic_snmrc_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_snmrc_activity_order_no | int(11) | YES |  | NULL |  |  |
| physic_snmrc_activity_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refphysic_snmrc_type1 | physic_snmrc_type_id | no | 1 |
| PRIMARY | physic_snmrc_activity_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_snmrc_activity_id": 1,
    "physic_snmrc_type_id": 1,
    "physic_snmrc_activity_order_no": 1,
    "physic_snmrc_activity_name": "ดื่มน้ำ",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 2,
    "physic_snmrc_type_id": 1,
    "physic_snmrc_activity_order_no": 2,
    "physic_snmrc_activity_name": "รับประทานอาหาร",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 3,
    "physic_snmrc_type_id": 2,
    "physic_snmrc_activity_order_no": 3,
    "physic_snmrc_activity_name": "แปรงฟัน",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 4,
    "physic_snmrc_type_id": 2,
    "physic_snmrc_activity_order_no": 4,
    "physic_snmrc_activity_name": "ล้างหน้า",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 5,
    "physic_snmrc_type_id": 2,
    "physic_snmrc_activity_order_no": 5,
    "physic_snmrc_activity_name": "ล้างมือ",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 6,
    "physic_snmrc_type_id": 2,
    "physic_snmrc_activity_order_no": 6,
    "physic_snmrc_activity_name": "หวีผม",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 7,
    "physic_snmrc_type_id": 3,
    "physic_snmrc_activity_order_no": 7,
    "physic_snmrc_activity_name": "อาบน้ำ-เช็ดตัว",
    "active": "Y"
  },
  {
    "physic_snmrc_activity_id": 8,
    "physic_snmrc_type_id": 3,
    "physic_snmrc_activity_order_no": 8,
    "physic_snmrc_activity_name": "สระผม-เช็ดผม",
    "active": "Y"
  }
]
```
