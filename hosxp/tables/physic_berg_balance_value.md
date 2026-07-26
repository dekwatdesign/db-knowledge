# `physic_berg_balance_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_berg_balance_value_id | int(11) | NO | PRI | 0 |  |  |
| physic_berg_balance_value_name | varchar(255) | YES |  | NULL |  |  |
| physic_berg_balance_type_id | int(11) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| scale_value | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_berg_balance_type_id | physic_berg_balance_type_id | no | 1 |
| PRIMARY | physic_berg_balance_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_berg_balance_value_id": 1,
    "physic_berg_balance_value_name": "ลุกขึ้นยืนโดยไม่ใช้มือยันและยืนได้อย่างมั่นคง",
    "physic_berg_balance_type_id": 1,
    "active": "Y",
    "scale_value": 4
  },
  {
    "physic_berg_balance_value_id": 2,
    "physic_berg_balance_value_name": "ลุกขึ้นยืนโดยไม่ใช้มือช่วย",
    "physic_berg_balance_type_id": 1,
    "active": "Y",
    "scale_value": 3
  },
  {
    "physic_berg_balance_value_id": 3,
    "physic_berg_balance_value_name": "ลุกขึ้นยืนโดยใช้มือช่วย แต่ต้องพยายามหลายครั้ง",
    "physic_berg_balance_type_id": 1,
    "active": "Y",
    "scale_value": 2
  },
  {
    "physic_berg_balance_value_id": 4,
    "physic_berg_balance_value_name": "ต้องการความช่วยเหลือเล็กน้อยในการยืน",
    "physic_berg_balance_type_id": 1,
    "active": "Y",
    "scale_value": 1
  },
  {
    "physic_berg_balance_value_id": 5,
    "physic_berg_balance_value_name": " ต้องการความช่วยเหลือเล็กน้อยเวลายืน",
    "physic_berg_balance_type_id": 1,
    "active": "Y",
    "scale_value": 0
  },
  {
    "physic_berg_balance_value_id": 6,
    "physic_berg_balance_value_name": "ยืนนานได้ 2 นาที โดยไม่ยึดเกาะสิ่งใด",
    "physic_berg_balance_type_id": 2,
    "active": "Y",
    "scale_value": 4
  },
  {
    "physic_berg_balance_value_id": 7,
    "physic_berg_balance_value_name": "ยืนนาน 2 นาที โดยมีผู้ควบคุม",
    "physic_berg_balance_type_id": 2,
    "active": "Y",
    "scale_value": 3
  },
  {
    "physic_berg_balance_value_id": 8,
    "physic_berg_balance_value_name": "ยืนนาน 30 วินาที โดยไม่ยึดเกาะ",
    "physic_berg_balance_type_id": 2,
    "active": "Y",
    "scale_value": 2
  }
]
```
