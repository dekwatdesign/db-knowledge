# `work_plan_bsc_dimensions`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dimension_key | varchar(50) | NO | PRI | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| color_class | varchar(100) | YES |  | NULL |  |  |
| sort_order | int | NO |  | 0 |  |  |
| is_active | char(1) | NO |  | Y |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dimension_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "dimension_key": "customer",
    "title": "ด้านผู้รับบริการ",
    "description": "ความพึงพอใจและคุณค่าต่อผู้รับบริการ",
    "color_class": "badge-light-primary",
    "sort_order": 10,
    "is_active": "Y",
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "dimension_key": "finance",
    "title": "ด้านการเงิน",
    "description": "ประสิทธิภาพการใช้ทรัพยากรและงบประมาณ",
    "color_class": "badge-light-success",
    "sort_order": 30,
    "is_active": "Y",
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "dimension_key": "internal",
    "title": "กระบวนการภายใน",
    "description": "ประสิทธิภาพและคุณภาพกระบวนการทำงาน",
    "color_class": "badge-light-info",
    "sort_order": 20,
    "is_active": "Y",
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "dimension_key": "learning",
    "title": "การเรียนรู้และพัฒนา",
    "description": "บุคลากร เทคโนโลยี และนวัตกรรม",
    "color_class": "badge-light-warning",
    "sort_order": 40,
    "is_active": "Y",
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  }
]
```
