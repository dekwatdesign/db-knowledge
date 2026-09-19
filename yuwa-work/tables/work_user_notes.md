# `work_user_notes`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| gtw_user_id | int | NO | MUL | NULL |  | เจ้าของโน้ต (GTW users.id) |
| title | varchar(255) | NO |  | NULL |  | หัวข้อโน้ต |
| content | text | YES |  | NULL |  | รายละเอียดโน้ต |
| category_name | varchar(100) | YES | MUL | NULL |  | หมวดหมู่โน้ต |
| count_as_task | char(1) | NO |  | N |  | Y/N ให้นับเป็นงานหรือไม่ |
| status | varchar(20) | NO |  | open |  | open / done / archived |
| share_level | varchar(20) | NO | MUL | private |  | private / dep / group / mission / leader / all |
| owner_dep0_id | int | NO |  | 0 |  | กลุ่มภารกิจของเจ้าของตอนบันทึก |
| owner_dep1_id | int | NO |  | 0 |  | กลุ่มงานของเจ้าของตอนบันทึก |
| owner_dep2_id | int | NO |  | 0 |  | งานของเจ้าของตอนบันทึก |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_work_user_notes_category_status | category_name | no | 1 |
| idx_work_user_notes_category_status | status | no | 2 |
| idx_work_user_notes_owner_category_status | gtw_user_id | no | 1 |
| idx_work_user_notes_owner_category_status | category_name | no | 2 |
| idx_work_user_notes_owner_category_status | status | no | 3 |
| idx_work_user_notes_owner_status | gtw_user_id | no | 1 |
| idx_work_user_notes_owner_status | status | no | 2 |
| idx_work_user_notes_owner_task_status | gtw_user_id | no | 1 |
| idx_work_user_notes_owner_task_status | count_as_task | no | 2 |
| idx_work_user_notes_owner_task_status | status | no | 3 |
| idx_work_user_notes_share_status | share_level | no | 1 |
| idx_work_user_notes_share_status | status | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "gtw_user_id": 253,
    "title": "HOSxP - การออกใบรับรองแพทย์",
    "content": "การออกใบรับรองแพทย์ ผ่าน HOSxP\r\nอาจมีการสร้าง QR Code เพื่อให้ Return\r\n\"ใบรับรองแพทย์หมายเลข xxxxxxxxxx ออกโดย xxxxxx เมื่อ xxxxxxx\"",
    "category_name": "HOSxP",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:36:52",
    "updated_at": "2026-04-21 16:36:52"
  },
  {
    "id": 2,
    "gtw_user_id": 253,
    "title": "WORK - แผน - เพิ่มระบบ KPI",
    "content": null,
    "category_name": "WORK",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:37:07",
    "updated_at": "2026-04-21 16:37:07"
  },
  {
    "id": 3,
    "gtw_user_id": 253,
    "title": "2025-10-24 Request",
    "content": "[x] Nurse Note : Edit Sort and Time Stamp\r\n[] V/S : Edit Option (ดูในรูป)\r\n[] จำแนกประเภท : Edit แบบประเมิน ดูในไฟล์ Excel\r\n[] BPRS CDI : แก้แบบประเมิน -> ใส่คะแนน (แสดงผล : x>15=มีภาวะ, x<15=ไม่มี)",
    "category_name": "HSK",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:37:34",
    "updated_at": "2026-04-21 16:37:34"
  },
  {
    "id": 4,
    "gtw_user_id": 253,
    "title": "Request Form Field",
    "content": "Request Form Field\r\nจากหมอจ๋า\r\nดูจาก Paper",
    "category_name": "RNP",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:37:48",
    "updated_at": "2026-04-21 16:37:48"
  },
  {
    "id": 5,
    "gtw_user_id": 253,
    "title": "รหัส รพ. ใหม่",
    "content": "#รหัส รพ. ใหม่\r\n`EA0012251`\r\nRef. เว็บไซต์ กยผ.",
    "category_name": "ข้อมูล รพ.",
    "count_as_task": "N",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:38:05",
    "updated_at": "2026-04-21 16:38:05"
  },
  {
    "id": 6,
    "gtw_user_id": 253,
    "title": "PMT - แก้ API Tracking ไปใช้เบอร์ของเภสัช",
    "content": null,
    "category_name": "PMT",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:38:18",
    "updated_at": "2026-04-21 16:38:18"
  },
  {
    "id": 7,
    "gtw_user_id": 253,
    "title": "HOSxP - ถามเรื่องการปริ้นท์ใบ Mar",
    "content": null,
    "category_name": "HOSxP",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:38:31",
    "updated_at": "2026-04-21 16:38:31"
  },
  {
    "id": 8,
    "gtw_user_id": 253,
    "title": "WORK - เมนู กิจกรรม เพิ่ม Field เลือกหน่วยงาน",
    "content": null,
    "category_name": "WORK",
    "count_as_task": "Y",
    "status": "open",
    "share_level": "private",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_at": "2026-04-21 16:38:46",
    "updated_at": "2026-04-21 16:38:46"
  }
]
```
