# `supplies_con`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| CON_NUM | varchar(20) | YES |  |  |  | รันตามปีงบ |
| CON_YEAR_ID | varchar(10) | YES |  |  |  |  |
| PLAN_ID | varchar(20) | YES |  |  |  | รหัสแผน |
| DATE_REGIS | date | YES |  | NULL |  | ร้าน |
| DEP_REQUEST_NAME | varchar(50) | YES |  |  |  | หน่อยงานที่ร้องขอ |
| DEP_REQUEST_ID | varchar(10) | YES |  |  |  | หน่วยงานที่ต้องการ |
| DEP_REQUEST_BOOK_NUM | varchar(30) | YES |  |  |  | เลขที่หนังสือของหน่วยงานที่ต้องการซื้อจ้าง |
| PERSON_REQUEST_NAME | varchar(50) | YES |  |  |  | ชื่อผู้ร้องขอ |
| PERSON_REQUEST_ID | varchar(10) | YES |  |  |  | ผู้ร้องขอ |
| CON_PROJECT_NUM | varchar(30) | YES |  |  |  | เลขที่ PROJECT |
| CON_PROJECT_NAME | varchar(200) | YES |  |  |  | ชื่อโครงการ |
| EGP_CODE | varchar(50) | YES |  |  |  |  |
| EGP_PLAN_NAME | varchar(200) | YES |  |  |  |  |
| EG_OPEN_TYPE_ID | varchar(10) | YES |  |  |  | การเบิกจ่าย |
| BUY_ID | varchar(10) | YES |  |  |  | วิธีการซื้อจ้าง |
| CONDISION_ID | varchar(10) | YES |  |  |  | เงื่อนไข |
| CON_REASON | varchar(500) | YES |  |  |  | เหตุผลการจัดหา |
| METHOD_ID | varchar(10) | YES |  |  |  | วิธีการจัดหา |
| SUP_TYPE_ID | varchar(10) | YES |  |  |  | ประเภทการจัดหา |
| CON_DETAIL | varchar(500) | YES |  |  |  |  |
| ASPECT_ID | varchar(10) | YES |  |  |  | การพิจารณาคัดเลือก |
| DATE_WANT_USE | date | YES |  | NULL |  | วันที่ต้องการใช้งาน |
| DATE_WANT_COUNT | int | YES |  | NULL |  | ประมาณกี่วัน |
| USEFOR_ID | varchar(10) | YES |  |  |  | เพื่อใช้เป็น |
| BOOK_NUM | varchar(30) | YES |  |  |  |  |
| BOOK_ID | varchar(10) | YES |  |  |  |  |
| BOOK_DATE | date | YES |  | NULL |  |  |
| BOOK_NAME | varchar(200) | YES |  |  |  | ชื่อคำสั่ง |
| RESON_NAME | varchar(500) | YES |  |  |  |  |
| MONEY_GROUP_ID | varchar(10) | YES |  |  |  | หมวดเงิน |
| BUDGET_ID | varchar(10) | YES |  |  |  | ประเภทเงิน |
| LOCATION_SEND_ID | varchar(10) | YES |  |  |  | สถานที่ส่งมอบ |
| LEADER_ID | varchar(10) | YES |  |  |  |  |
| LEADER_NAME | varchar(50) | YES |  |  |  | ผู้อนุมัติ |
| POSITION_NAME | varchar(50) | YES |  |  |  | 50 |
| REGIS_BY_ID | varchar(10) | YES |  |  |  |  |
| REGIS_BY_NAME | varchar(50) | YES |  |  |  |  |
| REGIS_BY_POSITION | varchar(50) | YES |  |  |  |  |
| REGIS_BY_DEP | varchar(50) | YES |  |  |  |  |
| REGIS_DATE_TIME | datetime | YES |  | NULL |  |  |
| REGIS_STATUS_ID | varchar(10) | YES |  |  |  |  |
| APPROVE_CODE | varchar(30) | YES |  |  |  |  |
| APPROVE_BOOK_ID | varchar(20) | YES |  |  |  | รหัสหนังสือคำสั่งอนุมัติจากงานสารบรรณ |
| APPROVE_DATE | date | YES |  | NULL |  |  |
| APPROVE_DATE_ANOUNCE | date | YES |  | NULL |  | วันที่ประกาศ |
| APPROVE_LEADER_ID | varchar(20) | YES |  |  |  |  |
| APPROVE_LEADER_NAME | varchar(50) | YES |  |  |  |  |
| APPROVE_LEADER_POSITION | varchar(50) | YES |  |  |  |  |
| COMMIT_HR_ID | varchar(10) | YES |  |  |  | เจ้าหน้าที่ |
| COMMIT_HR_NAME | varchar(50) | YES |  |  |  |  |
| COMMIT_HR_POSITION | varchar(50) | YES |  |  |  |  |
| COMMIT_HR_LEADER_ID | varchar(10) | YES |  |  |  | หัวหน้าเจ้าหน้าที่ |
| COMMIT_HR_LEADER_NAME | varchar(50) | YES |  |  |  |  |
| COMMIT_HR_LEADER_POSITION | varchar(50) | YES |  |  |  |  |
| DAY_FINISH | int | YES |  | NULL |  | กำหนดแล้วเสร็จภายในกี่วันนับจากวันลงนาม |
| WEB_ST | varchar(10) | YES |  |  |  | สถานะขึ้นเว็บ |
| WEB_DATE_TIME | datetime | YES |  | NULL |  |  |
| WEB_HR_ID | varchar(10) | YES |  |  |  |  |
| WEB_HR_NAME | varchar(50) | YES |  |  |  |  |
| ORG_ADD | varchar(120) | YES |  |  |  | ส่วนราชการ |
| ORG_PROVINCE | varchar(50) | YES |  |  |  |  |
| ORG_CMD_PROVINCE | varchar(50) | YES |  |  |  |  |
| ORG_CMD_DATE | date | YES |  | NULL |  |  |
| ORG_PROVINCE_LEADER | varchar(50) | YES |  |  |  |  |
| ORG_CMD_MONEY_PROVINCE | varchar(100) | YES |  |  |  | คำสั่งการเงินจังหวัด |
| ORG_CMD_MONEY_DATE | date | YES |  | NULL |  |  |
| APPROVE_DATE_ANOUNCE_REPORT | date | YES |  | NULL |  |  |
| REQUEST_ID | varchar(10) | YES |  |  |  | รหัสอ้างอิงขอซื้อขอจ้าง |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| COMMAND_DETAIL | varchar(255) | YES |  | NULL |  |  |
| COMMAND_NUMBER | varchar(255) | YES |  | NULL |  |  |
| COMMAND_DATE | date | YES |  | NULL |  |  |
| PO_NUM | varchar(50) | YES |  | NULL |  |  |
| SEND_DATE | date | YES |  | NULL |  |  |
| PO_DATE | date | YES |  | NULL |  |  |
| INSURANCE_YEAR | int | YES |  | NULL |  |  |
| INSURANCE_MONT | int | YES |  | NULL |  |  |
| RECIPIENT_NAME | varchar(255) | YES |  | NULL |  |  |
| RECIPIENT_POSITION | varchar(255) | YES |  | NULL |  |  |
| BUYER_USER_ID | int | YES |  | NULL |  |  |
| BUYER_USER_NAME | varchar(255) | YES |  | NULL |  |  |
| ORDER_DATE | date | YES |  | NULL |  |  |
| SIGN_DATE | date | YES |  | NULL |  |  |
| TAX_TYPE | int | YES |  | NULL |  |  |
| DISCOUNT | varchar(255) | YES |  | NULL |  |  |
| CH_NUM | varchar(50) | YES |  | NULL |  |  |
| INVOICE_NUM | varchar(50) | YES |  | NULL |  |  |
| CHECK_DATE | date | YES |  | NULL |  |  |
| CHECK_TIME | time | YES |  | NULL |  |  |
| CHECK_TYPE_ID | int | YES |  | NULL |  |  |
| CHECK_USER_ID | int | YES |  | NULL |  |  |
| CHECK_USER_NAME | varchar(255) | YES |  | NULL |  |  |
| CHECK_FINE | varchar(255) | YES |  | NULL |  |  |
| VENDOR_NAME | varchar(255) | YES |  | NULL |  |  |
| BUDGET_SUM | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
