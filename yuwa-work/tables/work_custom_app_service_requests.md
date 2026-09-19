# `work_custom_app_service_requests`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| service_id | int | NO | MUL | NULL |  | FK → work_custom_app_services.id |
| custom_app_id | int | NO | MUL | NULL |  | FK → work_custom_apps.id |
| request_data | longtext | YES |  | NULL |  | JSON ข้อมูลที่กรอกตาม form fields |
| operation_data | longtext | YES |  | NULL |  | JSON ข้อมูลฟอร์มปฏิบัติ |
| status | varchar(20) | NO | MUL | pending |  | pending / approved / rejected |
| created_by | varchar(50) | NO | MUL | NULL |  | gtw_user_id ผู้ขอ |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_created_by | created_by | no | 1 |
| idx_custom_app_id | custom_app_id | no | 1 |
| idx_service_id | service_id | no | 1 |
| idx_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

| Column | References | Constraint |
|---|---|---|
| custom_app_id | `work_custom_apps.id` | fk_svc_req_app |
| service_id | `work_custom_app_services.id` | fk_svc_req_service |

## Sample rows (8)

```json
[
  {
    "id": 1,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:07:10",
    "updated_at": "2026-02-23 10:47:09"
  },
  {
    "id": 2,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:07:20",
    "updated_at": "2026-02-23 10:47:13"
  },
  {
    "id": 3,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:09:04",
    "updated_at": "2026-02-23 10:47:17"
  },
  {
    "id": 4,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-20T13:00\",\"end\":\"2026-02-20T16:00\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:09:32",
    "updated_at": "2026-02-23 10:47:21"
  },
  {
    "id": 5,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-26T13:00\",\"end\":\"2026-02-26T16:00\"},\"Meeting Room\":\"ห้องประชุมดตรีบำบัด\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"10\"]},{\"checked\":true,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"10\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:27:34",
    "updated_at": "2026-02-23 10:47:25"
  },
  {
    "id": 6,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-23T13:00\",\"end\":\"2026-02-23T16:00\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 13:44:16",
    "updated_at": "2026-02-23 10:47:34"
  },
  {
    "id": 7,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-26T14:18\",\"end\":\"2026-02-26T16:30\"},\"Meeting Room\":\"ห้องประชุม 303\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": null,
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 14:18:58",
    "updated_at": "2026-02-23 10:47:38"
  },
  {
    "id": 8,
    "service_id": 1,
    "custom_app_id": 1,
    "request_data": "{\"Datetime of use\":{\"start\":\"2026-02-19T14:57\",\"end\":\"2026-02-19T16:00\"},\"Building Floor\":\"พื้นที่รอบป้อม รปภ.\",\"Room\":\"ลานจอดรถชั้นใต้ดิน\",\"Number of people\":\"3\",\"Borrow List\":[],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"1\"]},{\"checked\":false,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"\"]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"1\"]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"2\"]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\"]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\"]}]}",
    "operation_data": "{\"op_field_1\":[\"ส่งใบขอใช้บริการนอกเวลาราชการ\"],\"Borrow List_table\":[{\"checked\":true,\"label\":\"กระติกน้ำแข็ง (พร้อมน้ำแข็ง)\",\"cols\":[\"\",true,false]},{\"checked\":false,\"label\":\"กระติกน้ำร้อน (พร้อมน้ำ)\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"คูลเลอร์ (พร้อมน้ำ)\",\"cols\":[\"\",false,false]},{\"checked\":true,\"label\":\"แก้วน้ำยาว / จานรอง / ฝาปิด\",\"cols\":[\"\",true,false]},{\"checked\":true,\"label\":\"แก้วน้ำสั้น / จานรอง / ฝ่าปิด\",\"cols\":[\"\",true,false]},{\"checked\":false,\"label\":\"แก้วน้ำพลาสติก\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"ชุดกาแฟ / ข้อน / ส้อม\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"เหยือกน้ำ\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"จานกินข้าว / ซ้อน / ส้อม\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"จานแบ่ง / ส้อมเล็ก\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"จานเปล\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"ชาม\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"ถ้วยแบ่ง / ช้อน\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"ถ้วยน้ำจิ้ม\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"ถาดเสิร์ฟ\",\"cols\":[\"\",false,false]},{\"checked\":false,\"label\":\"อื่นๆ\",\"cols\":[\"\",false,false]}],\"op_field_2_table\":[{\"checked\":true,\"label\":\"ครบ\",\"cols\":[]},{\"checked\":false,\"label\":\"ไม่ครบ\",\"cols\":[]}],\"op_field_3_table\":[{\"checked\":true,\"label\":\"ได้\",\"cols\":[]},{\"checked\":false,\"label\":\"ไม่ได้\",\"cols\":[]}]}",
    "status": "deleted",
    "created_by": "253",
    "created_at": "2026-02-19 14:57:40",
    "updated_at": "2026-02-23 10:47:41"
  }
]
```
