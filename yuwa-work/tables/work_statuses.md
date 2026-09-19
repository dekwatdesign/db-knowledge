# `work_statuses`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | YES |  | NULL |  |  |
| icon_class | varchar(255) | YES |  | NULL |  |  |
| color_class | varchar(255) | YES |  | NULL |  |  |
| create_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "id": 1,
    "title": "ไม่มี",
    "icon_class": null,
    "color_class": "text-inverse-secondary bg-secondary",
    "create_at": "2025-05-06 15:37:12"
  },
  {
    "id": 2,
    "title": "เตรียมจัด",
    "icon_class": null,
    "color_class": "bg-light-warning text-warning",
    "create_at": "2025-05-06 15:37:48"
  },
  {
    "id": 3,
    "title": "จัดวันนี้",
    "icon_class": null,
    "color_class": "bg-success",
    "create_at": "2025-05-06 15:38:05"
  },
  {
    "id": 4,
    "title": "สร้าง",
    "icon_class": null,
    "color_class": "bg-secondary",
    "create_at": "2025-05-06 15:38:32"
  },
  {
    "id": 5,
    "title": "ยืนยันแล้ว",
    "icon_class": "fa-solid fa-check",
    "color_class": "badge-success",
    "create_at": "2025-05-06 15:40:26"
  },
  {
    "id": 6,
    "title": "เลื่อน",
    "icon_class": "fa-solid fa-right-from-line",
    "color_class": "badge-warning",
    "create_at": "2025-05-06 16:01:53"
  },
  {
    "id": 7,
    "title": "ยกเลิก / ไม่อนุมัติ",
    "icon_class": "fa-solid fa-xmark",
    "color_class": "badge-danger",
    "create_at": "2025-05-23 12:58:46"
  }
]
```
