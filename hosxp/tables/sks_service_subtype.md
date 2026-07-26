# `sks_service_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_service_subtype_id | int(11) | NO | PRI | 0 |  |  |
| service_type_code | varchar(10) | YES | MUL | NULL |  |  |
| service_subtype_code | varchar(10) | YES | MUL | NULL |  |  |
| service_subtype_description | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_service_subtype_description | service_subtype_description | yes | 1 |
| ix_type_code | service_type_code | no | 1 |
| ix_type_subtype_code | service_subtype_code | yes | 1 |
| ix_type_subtype_code | service_type_code | yes | 2 |
| PRIMARY | sks_service_subtype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sks_service_subtype_id": 1,
    "service_type_code": "DS",
    "service_subtype_code": "001",
    "service_subtype_description": "โรคไส้เลื่อนขาหนีบ (Inguinal hernia)"
  },
  {
    "sks_service_subtype_id": 2,
    "service_type_code": "DS",
    "service_subtype_code": "002",
    "service_subtype_description": "โรคถุงน้ำอัณฑะ (Hydrocele)"
  },
  {
    "sks_service_subtype_id": 3,
    "service_type_code": "DS",
    "service_subtype_code": "003",
    "service_subtype_description": "โรคริดสีดวงทวาร (Hemorrhoid)"
  },
  {
    "sks_service_subtype_id": 4,
    "service_type_code": "DS",
    "service_subtype_code": "004",
    "service_subtype_description": "ภาวะเลือดออกผิดปกติทางช่องคลอด (Vaginal bleeding)"
  },
  {
    "sks_service_subtype_id": 5,
    "service_type_code": "DS",
    "service_subtype_code": "005",
    "service_subtype_description": "หลอดเลือดดำของหลอดอาหาร กระเพาะอาหารขอด (Esophageal varices, Gastric varices)"
  },
  {
    "sks_service_subtype_id": 6,
    "service_type_code": "DS",
    "service_subtype_code": "006",
    "service_subtype_description": "ภาวะหลอดอาหารตีบ (Esophageal stricture)"
  },
  {
    "sks_service_subtype_id": 7,
    "service_type_code": "DS",
    "service_subtype_code": "007",
    "service_subtype_description": "โรคมะเร็งหลอดอาหารระยะลุกลาม ที่อุดตัน (Obstructive esophageal cancer/tumor)"
  },
  {
    "sks_service_subtype_id": 8,
    "service_type_code": "DS",
    "service_subtype_code": "008",
    "service_subtype_description": "ติ่งเนื้องอกลำไส้ใหญ่ (Colorectal polyp)"
  }
]
```
