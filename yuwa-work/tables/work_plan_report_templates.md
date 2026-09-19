# `work_plan_report_templates`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| template_key | varchar(120) | NO | UNI | NULL |  |  |
| title | varchar(255) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| report_type | varchar(80) | NO |  | summary |  |  |
| default_format | varchar(20) | NO |  | xlsx |  |  |
| config_json | longtext | YES |  | NULL |  |  |
| is_active | char(1) | NO |  | Y |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_plan_report_template_key | template_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 1,
    "template_key": "monthly_summary",
    "title": "รายงานสรุปผล KPI ประจำเดือน",
    "description": "สรุปสถานะ KPI เป้าหมาย ผลจริง และความคืบหน้ารายเดือน",
    "report_type": "summary",
    "default_format": "pdf",
    "config_json": "{\"group_by\":\"category\"}",
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 2,
    "template_key": "bsc_quarterly",
    "title": "BSC Dashboard ไตรมาส",
    "description": "รายงาน Balanced Scorecard รายไตรมาสสำหรับผู้บริหาร",
    "report_type": "bsc",
    "default_format": "pptx",
    "config_json": "{\"group_by\":\"bsc\"}",
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 3,
    "template_key": "below_target",
    "title": "รายงานตัวชี้วัดที่ต่ำกว่าเป้า",
    "description": "รายการ KPI ที่มีผลต่ำกว่าเกณฑ์พร้อมผู้รับผิดชอบ",
    "report_type": "risk",
    "default_format": "xlsx",
    "config_json": "{\"status\":\"risk\"}",
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 4,
    "template_key": "department",
    "title": "รายงานหน่วยงาน",
    "description": "สรุปผล KPI แยกตามหน่วยงาน",
    "report_type": "department",
    "default_format": "xlsx",
    "config_json": "{\"group_by\":\"department\"}",
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  },
  {
    "id": 5,
    "template_key": "ha_reaccreditation",
    "title": "รายงานสำหรับ HA Re-accreditation",
    "description": "ชุดข้อมูล KPI สำหรับการรับรองคุณภาพ",
    "report_type": "compliance",
    "default_format": "pdf",
    "config_json": "{\"standard\":\"HA\"}",
    "is_active": "Y",
    "created_by": null,
    "updated_by": null,
    "created_at": "2026-04-25 17:10:36",
    "updated_at": "2026-04-25 17:10:36"
  }
]
```
