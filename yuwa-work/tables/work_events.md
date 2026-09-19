# `work_events`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | YES |  | NULL |  |  |
| detail | longtext | YES |  | NULL |  |  |
| money_source_id | int | YES | MUL | NULL |  |  |
| gtw_user_id | int | YES |  | NULL |  |  |
| create_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| money_source_id | money_source_id | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| money_source_id | `work_money_sources.id` | work_events_ibfk_1 |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "title": "ซ้อมอพยพหนีไฟประจำปี 2568",
    "detail": "",
    "money_source_id": 1,
    "gtw_user_id": 253,
    "create_at": "2025-05-22 15:23:27",
    "updated_at": null
  },
  {
    "id": 5,
    "title": "ประชุมคณะกรรมการ P4P",
    "detail": "",
    "money_source_id": 2,
    "gtw_user_id": 64,
    "create_at": "2025-05-23 11:49:06",
    "updated_at": null
  },
  {
    "id": 8,
    "title": "555555555",
    "detail": "66666",
    "money_source_id": 1,
    "gtw_user_id": 253,
    "create_at": "2025-05-23 14:12:39",
    "updated_at": "2025-05-23 14:40:42"
  },
  {
    "id": 12,
    "title": "ประชุมเชิงปฏิบัติการ รับการประเมินตรวจเยี่ยมสำรวจโรงพยาบาลเพื่อเฝ้าระวัง (Surveillance) จากสถาบันรับรองคุณภาพ (สรพ.)",
    "detail": "หน่วยงานที่รับผิดชอบ : กลุ่มงานพัฒนาคุณภาพ",
    "money_source_id": 1,
    "gtw_user_id": 265,
    "create_at": "2025-06-12 10:14:37",
    "updated_at": "2025-06-13 15:36:28"
  },
  {
    "id": 13,
    "title": "โครงการประชุมเชิงปฏิบัติการเรื่อง “การดูแลเด็กแบบองค์รวม” เพื่อจัดการพฤติกรรมการกลั่นแกล้งรังแกในโรงเรียน",
    "detail": "หน่วยงานที่รับผิดชอบ : กลุ่มงานสุขภาพจิตโรงเรียน",
    "money_source_id": 1,
    "gtw_user_id": 265,
    "create_at": "2025-06-12 10:28:21",
    "updated_at": null
  },
  {
    "id": 14,
    "title": "กิจกรรมที่3 ประชุมการถอดบทเรียนฯวัยเด็กโต",
    "detail": "",
    "money_source_id": 1,
    "gtw_user_id": 132,
    "create_at": "2025-06-13 14:59:43",
    "updated_at": null
  },
  {
    "id": 15,
    "title": "กิจกรรมที่3 ประชุมการถอดบทเรียนฯวัยเด็กโต",
    "detail": "",
    "money_source_id": 1,
    "gtw_user_id": 132,
    "create_at": "2025-06-13 14:59:58",
    "updated_at": null
  },
  {
    "id": 16,
    "title": "กิจกรรมวันเข้าพรรษา",
    "detail": "หอผู้ป่วยนอกและหอผู้ป่วยใน3 รับผิดชอบ",
    "money_source_id": 2,
    "gtw_user_id": 132,
    "create_at": "2025-06-13 15:02:24",
    "updated_at": null
  }
]
```
