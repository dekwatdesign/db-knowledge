# `supplies_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| DATE_WANT | date | YES |  | NULL |  |  |
| DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| SAVE_HR_ID | int | YES |  | NULL |  | ผู้รายงาน |
| SAVE_HR_NAME | varchar(50) | YES |  |  |  |  |
| SAVE_HR_POSITION | varchar(50) | YES |  |  |  |  |
| SAVE_HR_DEP_SUB_NAME | varchar(250) | YES |  |  |  |  |
| REQUEST_HEAD | varchar(200) | YES |  |  |  |  |
| DEP_SUB_SUB_ID | varchar(11) | YES |  |  |  |  |
| DEP_SUB_SUB_NAME | varchar(100) | YES |  |  |  |  |
| DEP_SUB_SUB_PHONE | varchar(20) | YES |  |  |  |  |
| STATUS | varchar(20) | YES |  |  |  |  |
| REQUEST_FOR_ID | int | YES |  | NULL |  |  |
| REQUEST_FOR | varchar(255) | YES |  |  |  |  |
| REQUEST_COMMENT | varchar(255) | YES |  |  |  |  |
| REPORT_HR_ID | varchar(10) | YES |  |  |  | ผู้รายงาน |
| REPORT_HR_NAME | varchar(50) | YES |  |  |  |  |
| AGREE_HR_ID | varchar(10) | YES |  |  |  | ผู้เห็นชอบ |
| AGREE_HR_NAME | varchar(50) | YES |  |  |  |  |
| AGREE_HR_POSITION | varchar(50) | YES |  |  |  |  |
| AGREE_COMMENT | varchar(255) | YES |  |  |  |  |
| ACCEPT_COMMENT | varchar(255) | YES |  | NULL |  |  |
| ACCEPT_BY_ID | varchar(10) | YES |  |  |  | ผู้อนุมัติ |
| ACCEPT_BY_NAME | varchar(50) | YES |  |  |  |  |
| ACCEPT_BY_POSITION | varchar(50) | YES |  |  |  |  |
| ACCEPT_SAVE_HR_ID | varchar(10) | YES |  |  |  | ผู้ล็อกอินและกดบันทึก |
| ACCEPT_SAVE_HR_NAME | varchar(50) | YES |  |  |  |  |
| ACCEPT_SAVE_DATE_TIME | datetime | YES |  | NULL |  |  |
| ACCEPT_DATE | date | YES |  | NULL |  | วันที่เห็นชอบ |
| USER_CONFIRM_CHECK_ID | varchar(10) | YES |  |  |  | เจ้าหน้าที่พัสดุตรวจสอบ |
| USER_CONFIRM_CHECK_NAME | varchar(50) | YES |  |  |  |  |
| USER_CONFIRM_CHECK_DATE | datetime | YES |  | NULL |  |  |
| REQUEST_BUY_TYPE_ID | varchar(10) | YES |  |  |  |  |
| REQUEST_PLAN_TYPE_ID | varchar(10) | YES |  |  |  |  |
| REQUEST_BUY_COMMENT | varchar(100) | YES |  |  |  |  |
| REQUEST_PLAN_COMMENT | varchar(100) | YES |  |  |  |  |
| REQUEST_ECT | varchar(150) | YES |  |  |  |  |
| USER_CONFIRM_CHECK_POSITION | varchar(50) | YES |  |  |  |  |
| TOP_LEADER_AC_DATE | date | YES |  | NULL |  | วันที่ผู้อำนวยการอนุมัติ |
| TOP_LEADER_AC_COMMENT | varchar(255) | YES |  |  |  |  |
| TOP_LEADER_AC_ID | int | YES |  | NULL |  |  |
| TOP_LEADER_AC_NAME | varchar(50) | YES |  |  |  | ชื่อผู้อำนวยการที่อนุมัติ |
| TOP_LEADER_AC_DATE_TIME | datetime | YES |  | NULL |  |  |
| REQUEST_FROM | varchar(20) | YES |  |  |  | ร้องขอจากหน้าหรือระบบอะไร ซ่อมทั่วไป ซ่อมคอม |
| REPAIR_ID | varchar(20) | YES |  |  |  | อ้างถึงรหัสการซ่อม |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| HIRE_DETAIL | varchar(255) | YES |  | NULL |  |  |
| BUDGET_SUM | int | YES |  | NULL |  |  |
| BUDGET_YEAR | varchar(10) | YES |  | NULL |  |  |
| REQUEST_REMARK | varchar(400) | YES |  | NULL |  |  |
| REQUEST_VANDOR_ID | varchar(50) | YES |  | NULL |  |  |
| REQUEST_VANDOR_NAME | varchar(255) | YES |  | NULL |  |  |
| REQUEST_ID | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ID": 1,
    "DATE_WANT": "2020-10-01",
    "DATE_TIME_SAVE": "2020-10-01 14:41:16",
    "SAVE_HR_ID": 63,
    "SAVE_HR_NAME": "[MASKED_FULLNAME]",
    "SAVE_HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "SAVE_HR_DEP_SUB_NAME": "กลุ่มงานยุทธศาสตร์และสารสนเทศ",
    "REQUEST_HEAD": null,
    "DEP_SUB_SUB_ID": "25",
    "DEP_SUB_SUB_NAME": "",
    "DEP_SUB_SUB_PHONE": "72152",
    "STATUS": "Pending",
    "REQUEST_FOR_ID": 12,
    "REQUEST_FOR": "วัสดุคอมพิวเตอร์",
    "REQUEST_COMMENT": "",
    "REPORT_HR_ID": "",
    "REPORT_HR_NAME": "",
    "AGREE_HR_ID": "53",
    "AGREE_HR_NAME": "[MASKED_FULLNAME]",
    "AGREE_HR_POSITION": "บรรณารักษ์",
    "AGREE_COMMENT": "",
    "ACCEPT_COMMENT": null,
    "ACCEPT_BY_ID": "",
    "ACCEPT_BY_NAME": "",
    "ACCEPT_BY_POSITION": "",
    "ACCEPT_SAVE_HR_ID": "",
    "ACCEPT_SAVE_HR_NAME": "",
    "ACCEPT_SAVE_DATE_TIME": null,
    "ACCEPT_DATE": null,
    "USER_CONFIRM_CHECK_ID": "",
    "USER_CONFIRM_CHECK_NAME": "",
    "USER_CONFIRM_CHECK_DATE": null,
    "REQUEST_BUY_TYPE_ID": "",
    "REQUEST_PLAN_TYPE_ID": "",
    "REQUEST_BUY_COMMENT": "ต่ออายุโดเมน ycap.go.th สำหรับเว็บไซต์โรงพยาบาล",
    "REQUEST_PLAN_COMMENT": "",
    "REQUEST_ECT": "",
    "USER_CONFIRM_CHECK_POSITION": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_COMMENT": "",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "REQUEST_FROM": "",
    "REPAIR_ID": "",
    "updated_at": "2020-10-01 14:41:16",
    "created_at": "2020-10-01 14:41:16",
    "HIRE_DETAIL": null,
    "BUDGET_SUM": 369,
    "BUDGET_YEAR": "2564",
    "REQUEST_REMARK": null,
    "REQUEST_VANDOR_ID": null,
    "REQUEST_VANDOR_NAME": null,
    "REQUEST_ID": null
  },
  {
    "ID": 2,
    "DATE_WANT": "2023-11-09",
    "DATE_TIME_SAVE": "2024-01-15 10:24:31",
    "SAVE_HR_ID": 63,
    "SAVE_HR_NAME": "[MASKED_FULLNAME]",
    "SAVE_HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "SAVE_HR_DEP_SUB_NAME": "กลุ่มงานยุทธศาสตร์และสารสนเทศ",
    "REQUEST_HEAD": null,
    "DEP_SUB_SUB_ID": "25",
    "DEP_SUB_SUB_NAME": "",
    "DEP_SUB_SUB_PHONE": "72152",
    "STATUS": "Pending",
    "REQUEST_FOR_ID": 23,
    "REQUEST_FOR": "จ้างเหมาอื่นๆ",
    "REQUEST_COMMENT": "",
    "REPORT_HR_ID": "",
    "REPORT_HR_NAME": "",
    "AGREE_HR_ID": "53",
    "AGREE_HR_NAME": "[MASKED_FULLNAME]",
    "AGREE_HR_POSITION": "[MASKED_FULLNAME]",
    "AGREE_COMMENT": "",
    "ACCEPT_COMMENT": null,
    "ACCEPT_BY_ID": "",
    "ACCEPT_BY_NAME": "",
    "ACCEPT_BY_POSITION": "",
    "ACCEPT_SAVE_HR_ID": "",
    "ACCEPT_SAVE_HR_NAME": "",
    "ACCEPT_SAVE_DATE_TIME": null,
    "ACCEPT_DATE": null,
    "USER_CONFIRM_CHECK_ID": "",
    "USER_CONFIRM_CHECK_NAME": "",
    "USER_CONFIRM_CHECK_DATE": null,
    "REQUEST_BUY_TYPE_ID": "",
    "REQUEST_PLAN_TYPE_ID": "",
    "REQUEST_BUY_COMMENT": "เพื่อให้สามารถดาวน์โหลด BMS-HOSxP Activation เวอร์ชั่นใหม่ ๆ ได้",
    "REQUEST_PLAN_COMMENT": "",
    "REQUEST_ECT": "",
    "USER_CONFIRM_CHECK_POSITION": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_COMMENT": "",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "REQUEST_FROM": "",
    "REPAIR_ID": "",
    "updated_at": "2024-01-15 10:24:31",
    "created_at": "2023-11-09 10:46:27",
    "HIRE_DETAIL": null,
    "BUDGET_SUM": 0,
    "BUDGET_YEAR": "2567",
    "REQUEST_REMARK": "เพื่อให้สามารถดาวน์โหลด BMS-HOSxP Activation เวอร์ชั่นใหม่ ๆ ได้ และสามารถดาวน์โหลดโปรแกรมและเครื่องมือต่าง ๆ ที่ร่วมกับโปรแกรม HOSxP และบริการให้คำปรึกษาจากทีมงานผู้พัฒนาโปรแกรม",
    "REQUEST_VANDOR_ID": "3",
    "REQUEST_VANDOR_NAME": "บริษัท บางกอก เมดิคอล ซอฟต์แวร์ จำกัด",
    "REQUEST_ID": "REQ-670001"
  },
  {
    "ID": 3,
    "DATE_WANT": "2024-01-30",
    "DATE_TIME_SAVE": "2024-01-30 17:13:39",
    "SAVE_HR_ID": 64,
    "SAVE_HR_NAME": "[MASKED_FULLNAME]",
    "SAVE_HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "SAVE_HR_DEP_SUB_NAME": "กลุ่มงานยุทธศาสตร์และสารสนเทศ",
    "REQUEST_HEAD": null,
    "DEP_SUB_SUB_ID": "25",
    "DEP_SUB_SUB_NAME": "",
    "DEP_SUB_SUB_PHONE": "72143",
    "STATUS": "Pending",
    "REQUEST_FOR_ID": 38,
    "REQUEST_FOR": "ครุภัณฑ์คอมพิวเตอร์",
    "REQUEST_COMMENT": "",
    "REPORT_HR_ID": "",
    "REPORT_HR_NAME": "",
    "AGREE_HR_ID": "63",
    "AGREE_HR_NAME": "[MASKED_FULLNAME]",
    "AGREE_HR_POSITION": "นักวิชาการคอมพิวเตอร์",
    "AGREE_COMMENT": "",
    "ACCEPT_COMMENT": null,
    "ACCEPT_BY_ID": "",
    "ACCEPT_BY_NAME": "",
    "ACCEPT_BY_POSITION": "",
    "ACCEPT_SAVE_HR_ID": "",
    "ACCEPT_SAVE_HR_NAME": "",
    "ACCEPT_SAVE_DATE_TIME": null,
    "ACCEPT_DATE": null,
    "USER_CONFIRM_CHECK_ID": "",
    "USER_CONFIRM_CHECK_NAME": "",
    "USER_CONFIRM_CHECK_DATE": null,
    "REQUEST_BUY_TYPE_ID": "",
    "REQUEST_PLAN_TYPE_ID": "",
    "REQUEST_BUY_COMMENT": "ซ่อมจอโน๊คบุ๊คจอแตกและขอบจอแตก",
    "REQUEST_PLAN_COMMENT": "",
    "REQUEST_ECT": "",
    "USER_CONFIRM_CHECK_POSITION": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_COMMENT": "",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "REQUEST_FROM": "",
    "REPAIR_ID": "",
    "updated_at": "2024-01-30 17:13:39",
    "created_at": "2024-01-30 17:13:39",
    "HIRE_DETAIL": null,
    "BUDGET_SUM": 0,
    "BUDGET_YEAR": "2567",
    "REQUEST_REMARK": null,
    "REQUEST_VANDOR_ID": "2",
    "REQUEST_VANDOR_NAME": "บริษัท เอ สแควร์ จำกัด",
    "REQUEST_ID": "REQ-670002"
  },
  {
    "ID": 4,
    "DATE_WANT": "2026-01-29",
    "DATE_TIME_SAVE": "2026-01-29 11:51:11",
    "SAVE_HR_ID": 12,
    "SAVE_HR_NAME": "[MASKED_FULLNAME]",
    "SAVE_HR_POSITION": "พนักงานซักฟอก",
    "SAVE_HR_DEP_SUB_NAME": "กลุ่มงานบริหารทั่วไป",
    "REQUEST_HEAD": null,
    "DEP_SUB_SUB_ID": "6",
    "DEP_SUB_SUB_NAME": "",
    "DEP_SUB_SUB_PHONE": "72404",
    "STATUS": "Pending",
    "REQUEST_FOR_ID": 29,
    "REQUEST_FOR": "ครุภัณฑ์ไฟฟ้าและวิทยุ",
    "REQUEST_COMMENT": "",
    "REPORT_HR_ID": "",
    "REPORT_HR_NAME": "",
    "AGREE_HR_ID": "12",
    "AGREE_HR_NAME": "[MASKED_FULLNAME]",
    "AGREE_HR_POSITION": "พนักงานซักฟอก",
    "AGREE_COMMENT": "",
    "ACCEPT_COMMENT": null,
    "ACCEPT_BY_ID": "",
    "ACCEPT_BY_NAME": "",
    "ACCEPT_BY_POSITION": "",
    "ACCEPT_SAVE_HR_ID": "",
    "ACCEPT_SAVE_HR_NAME": "",
    "ACCEPT_SAVE_DATE_TIME": null,
    "ACCEPT_DATE": null,
    "USER_CONFIRM_CHECK_ID": "",
    "USER_CONFIRM_CHECK_NAME": "",
    "USER_CONFIRM_CHECK_DATE": null,
    "REQUEST_BUY_TYPE_ID": "",
    "REQUEST_PLAN_TYPE_ID": "",
    "REQUEST_BUY_COMMENT": "ซ่อมเคร์่องอบผ้า  ความร้อนไม่ทำงาน",
    "REQUEST_PLAN_COMMENT": "",
    "REQUEST_ECT": "",
    "USER_CONFIRM_CHECK_POSITION": "",
    "TOP_LEADER_AC_DATE": null,
    "TOP_LEADER_AC_COMMENT": "",
    "TOP_LEADER_AC_ID": null,
    "TOP_LEADER_AC_NAME": "",
    "TOP_LEADER_AC_DATE_TIME": null,
    "REQUEST_FROM": "",
    "REPAIR_ID": "",
    "updated_at": "2026-01-29 11:51:11",
    "created_at": "2026-01-29 11:51:11",
    "HIRE_DETAIL": null,
    "BUDGET_SUM": 0,
    "BUDGET_YEAR": "2569",
    "REQUEST_REMARK": null,
    "REQUEST_VANDOR_ID": null,
    "REQUEST_VANDOR_NAME": "",
    "REQUEST_ID": "REQ-690001"
  }
]
```
