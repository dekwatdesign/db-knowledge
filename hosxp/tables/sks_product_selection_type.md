# `sks_product_selection_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_product_selection_type_id | int(11) | NO | PRI | 0 |  |  |
| sks_product_selection_type_name | varchar(150) | YES | UNI | NULL |  |  |
| sks_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sks_product_selection_type_name | sks_product_selection_type_name | yes | 1 |
| PRIMARY | sks_product_selection_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sks_product_selection_type_id": 1,
    "sks_product_selection_type_name": "ผู้สั่งไม่ให้จัดยาแทน",
    "sks_code": "1",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 2,
    "sks_product_selection_type_name": "ให้แทนได้, ผู้ป่วยขอเลือกยาต้นแบบ",
    "sks_code": "2",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 3,
    "sks_product_selection_type_name": "ให้แทนได้, เภสัชกรเป็นผู้เลือกยาต้นแบบ",
    "sks_code": "3",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 4,
    "sks_product_selection_type_name": "ให้แทนได้, กรณียาแทนขาดชั่วคราวจากห้องยา",
    "sks_code": "4",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 5,
    "sks_product_selection_type_name": "ให้แทนได้, ยาต้นแบบถูกใช้เป็นยาแทน",
    "sks_code": "5",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 6,
    "sks_product_selection_type_name": "การแทนยาถูกกำหนดจากที่อื่น",
    "sks_code": "6",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 7,
    "sks_product_selection_type_name": "ไม่ให้จัดยาแทน, มีกฎข้อบังคับให้ใช้ยาชื่อนี้",
    "sks_code": "7",
    "hos_guid": null
  },
  {
    "sks_product_selection_type_id": 8,
    "sks_product_selection_type_name": "ให้แทนได้, แต่ยาแทนขาดตลาดไป",
    "sks_code": "8",
    "hos_guid": null
  }
]
```
