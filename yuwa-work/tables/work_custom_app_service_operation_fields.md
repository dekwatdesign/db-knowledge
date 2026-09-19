# `work_custom_app_service_operation_fields`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | UNI | NULL |  | FK → work_custom_app_services.id |
| fields_json | longtext | YES |  | NULL |  | JSON array of operation form field definitions |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |
| updated_by | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |
| uk_service_id | service_id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| service_id | `work_custom_app_services.id` | fk_svc_op_fields_service |

## Sample rows (6)

```json
[
  {
    "id": 1,
    "service_id": 1,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอดำเนินการ\",\"color\":\"warning\"},{\"value\":\"in_progress\",\"label\":\"กำลังดำเนินการ\",\"color\":\"primary\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ\",\"color\":\"danger\"}],\"_checklistConfig\":{\"Borrow List\":[{\"type\":\"checkbox\",\"label\":\"ครบ\"},{\"type\":\"checkbox\",\"label\":\"ไม่ครบ\"}]},\"additionalFields\":[{\"type\":\"checkbox\",\"label\":\"ประเภทการขอใช้บริการ\",\"name\":\"op_field_1\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"manual\",\"options\":[\"งานปกติ\",\"งานด่วน\",\"งานขอใช้บริการทางโทรศัพธ์\",\"ส่งใบขอใช้บริการนอกเวลาราชการ\",\"ส่งใบขอใช้บริการวันหยุดราชการ\"]},{\"type\":\"checkbox\",\"label\":\"รายการของที่ขาดเก็บคืนได้\",\"name\":\"op_field_2\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"manual\",\"options\":[\"ครบ|\",\"ไม่ครบ|input:ขาด\"]},{\"type\":\"checkbox\",\"label\":\"เก็บล้างภายในวันที่ใช้บริการ\",\"name\":\"op_field_3\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"manual\",\"options\":[\"ได้|\",\"ไม่ได้|input:เนื่องจาก\"]}]}",
    "updated_at": "2026-03-10 13:28:59",
    "updated_by": "253"
  },
  {
    "id": 2,
    "service_id": 2,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอยืนยัน\",\"color\":\"warning\"},{\"value\":\"approved\",\"label\":\"อนุมัติ / รอรับ\",\"color\":\"primary\"},{\"value\":\"received\",\"label\":\"รับอุปกรณ์แล้ว\",\"color\":\"info\",\"animation\":\"pulse\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น / คืนแล้ว\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ / ไม่มี / ยกเลิก\",\"color\":\"danger\"}],\"_checklistConfig\":[],\"additionalFields\":[{\"type\":\"select\",\"label\":\"ผู้ให้ยืม\",\"name\":\"Gifter\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":true,\"searchable\":true,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"auto\",\"optionSource\":\"staff_under_dep_provider\",\"options\":[]},{\"type\":\"select\",\"label\":\"ผู้มารับ\",\"name\":\"Receiver\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":true,\"searchable\":true,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"auto\",\"optionSource\":\"staff_under_group\",\"options\":[]},{\"type\":\"upload\",\"label\":\"ภาพถ่าย (ผู้รับ)\",\"name\":\"Photo (Receiver)\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false},{\"type\":\"textarea\",\"label\":\"Note\",\"name\":\"Note\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false}]}",
    "updated_at": "2026-03-25 16:29:53",
    "updated_by": "253"
  },
  {
    "id": 3,
    "service_id": 5,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอดำเนินการ\",\"color\":\"warning\",\"animation\":\"shimmer\"},{\"value\":\"in_progress\",\"label\":\"กำลังดำเนินการ\",\"color\":\"gradient-neon\",\"animation\":\"glow\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ\",\"color\":\"danger\"}],\"_checklistConfig\":[],\"additionalFields\":[{\"type\":\"select\",\"label\":\"ผู้ดำเนินการ \",\"name\":\"worker\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":true,\"searchable\":true,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"auto\",\"optionSource\":\"staff_under_dep_provider\",\"options\":[]},{\"type\":\"textarea\",\"label\":\"บันทึกการดำเนินการ\",\"name\":\"op_field_1\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false}]}",
    "updated_at": "2026-03-20 16:31:04",
    "updated_by": "253"
  },
  {
    "id": 4,
    "service_id": 7,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอดำเนินการ\",\"color\":\"warning\"},{\"value\":\"in_progress\",\"label\":\"กำลังดำเนินการ\",\"color\":\"primary\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ\",\"color\":\"danger\"}],\"_checklistConfig\":{\"tools_other\":[{\"type\":\"checkbox\",\"label\":\"รับแล้ว\"},{\"type\":\"checkbox\",\"label\":\"คืนแล้ว\"},{\"type\":\"input\",\"label\":\"Note\"}],\"tools\":[{\"type\":\"checkbox\",\"label\":\"รับแล้ว\"},{\"type\":\"checkbox\",\"label\":\"คืนแล้ว\"},{\"type\":\"input\",\"label\":\"Note\"}]},\"additionalFields\":[{\"type\":\"textarea\",\"label\":\"บันทึก\",\"name\":\"Note\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false}]}",
    "updated_at": "2026-03-04 13:44:30",
    "updated_by": "253"
  },
  {
    "id": 5,
    "service_id": 9,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอดำเนินการ\",\"color\":\"warning\"},{\"value\":\"in_progress\",\"label\":\"กำลังดำเนินการ\",\"color\":\"primary\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ / ยกเลิก\",\"color\":\"danger\"}],\"_checklistConfig\":[],\"additionalFields\":[{\"type\":\"select\",\"label\":\"ผู้ดำเนินการ\",\"name\":\"worker\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":true,\"searchable\":true,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false,\"optionMode\":\"auto\",\"optionSource\":\"staff_under_dep_provider\",\"options\":[]},{\"type\":\"textarea\",\"label\":\"Note\",\"name\":\"Note\",\"placeholder\":\"\",\"colClass\":\"col-12\",\"helperText\":\"\",\"required\":false,\"searchable\":false,\"timeFormat\":\"\",\"bookingEnabled\":false,\"bookingRefField\":\"\",\"defaultToday\":false,\"defaultNow\":false}]}",
    "updated_at": "2026-04-03 15:15:08",
    "updated_by": "253"
  },
  {
    "id": 6,
    "service_id": 8,
    "fields_json": "{\"_statusItems\":[{\"value\":\"pending\",\"label\":\"รอดำเนินการ\",\"color\":\"warning\"},{\"value\":\"in_progress\",\"label\":\"กำลังดำเนินการ\",\"color\":\"primary\"},{\"value\":\"completed\",\"label\":\"เสร็จสิ้น\",\"color\":\"success\"},{\"value\":\"rejected\",\"label\":\"ปฏิเสธ\",\"color\":\"danger\"}],\"_checklistConfig\":{},\"additionalFields\":[]}",
    "updated_at": "2026-04-09 09:47:49",
    "updated_by": "253"
  }
]
```
