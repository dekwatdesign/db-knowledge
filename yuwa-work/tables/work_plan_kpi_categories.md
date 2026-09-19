# `work_plan_kpi_categories`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| dimension_key | varchar(50) | YES | MUL | NULL |  |  |
| sort_order | int | NO |  | 0 |  |  |
| is_active | char(1) | NO |  | Y |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_categories_dimension | dimension_key | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 1,
    "title": "คุณภาพการรักษา",
    "description": "ตัวชี้วัดคุณภาพบริการรักษาพยาบาล",
    "dimension_key": "customer",
    "sort_order": 10,
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 2,
    "title": "ความปลอดภัยผู้ป่วย",
    "description": "ตัวชี้วัดด้านความเสี่ยงและ patient safety",
    "dimension_key": "internal",
    "sort_order": 20,
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 3,
    "title": "การเงิน",
    "description": "ตัวชี้วัดรายรับ รายจ่าย และต้นทุนบริการ",
    "dimension_key": "finance",
    "sort_order": 30,
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 4,
    "title": "ทรัพยากรบุคคล",
    "description": "ตัวชี้วัดบุคลากร สมรรถนะ และการพัฒนา",
    "dimension_key": "learning",
    "sort_order": 40,
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  }
]
```
