# `grecord_index`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| RECORD_HEAD | varchar(255) | YES |  |  |  |  |
| RECORD_HEAD_USE | varchar(255) | YES |  |  |  |  |
| RECORD_USER_ID | varchar(50) | YES |  |  |  |  |
| RECORD_REPORT | longtext | YES |  | NULL |  |  |
| RECORD_GO_ID | char(11) | YES |  |  |  |  |
| RECORD_MONEY_ID | char(11) | YES |  |  |  |  |
| RECORD_LOCATION_ID | char(11) | YES |  |  |  |  |
| RECORD_VEHICLE_ID | char(11) | YES |  |  |  | รหัสพาหนะ |
| RECORD_ORGANIZER_NAME | varchar(255) | YES |  |  |  | หน่วยงานที่จัด |
| DATE_GO | date | YES |  | NULL |  |  |
| DATE_BACK | date | YES |  | NULL |  |  |
| DATE_SUM | decimal(10,2) | YES |  | 0.00 |  | รวมวันไปราชการใช้ในงาน HRD |
| DATE_SUM_TRAVEL | decimal(10,2) | YES |  | NULL |  | รวมวันเดินทาง..ใช้ในการเบิกเงิน |
| APPROVE_CID | varchar(50) | YES |  |  |  |  |
| RECORD_COMMENT | varchar(255) | YES |  |  |  |  |
| IP | varchar(50) | YES |  |  |  |  |
| DATE_TIME_POST | datetime | YES |  | NULL |  |  |
| HR_ID | varchar(100) | YES |  |  |  |  |
| USER_POST | varchar(30) | YES |  |  |  |  |
| SAVE_AS | varchar(10) | YES |  |  |  |  |
| BOOK_NUM | varchar(100) | YES |  |  |  |  |
| BOOK_DATE_REG | date | YES |  | NULL |  |  |
| DATE_POST | date | YES |  | NULL |  |  |
| BOOK_ID | varchar(10) | YES |  |  |  |  |
| DAY_TYPE_ID | varchar(10) | YES |  |  |  |  |
| RECORD_ORG_ID | varchar(10) | YES |  |  |  |  |
| DATE_TRAVEL_GO | date | YES |  | NULL |  |  |
| DATE_TRAVEL_BACK | date | YES |  | NULL |  |  |
| MONEY_USE | decimal(10,2) | YES |  | NULL |  |  |
| DATE_TIME_UPDATE | datetime | YES |  | NULL |  |  |
| USER_POST_NAME | varchar(100) | YES |  |  |  |  |
| SM_01 | enum('True','False') | YES |  | False |  |  |
| SM_02 | enum('True','False') | YES |  | False |  |  |
| SM_03 | enum('True','False') | YES |  | False |  |  |
| SM_04 | enum('True','False') | YES |  | False |  |  |
| USER_POST_POSITION | varchar(150) | YES |  |  |  |  |
| USER_POST_DEPART | varchar(150) | YES |  |  |  |  |
| LOCATION_NAME | varchar(200) | YES |  |  |  |  |
| PROVINCE_NAME | varchar(100) | YES |  |  |  |  |
| PROVINCE_ID | varchar(10) | YES |  |  |  |  |
| CAR | enum('01','02','04','03') | YES |  | NULL |  |  |
| CAR_ETC | varchar(100) | YES |  |  |  |  |
| CAR_REG | varchar(50) | YES |  |  |  |  |
| MONEY | decimal(10,2) | YES |  | NULL |  |  |
| DATE_SAVE | date | YES |  | NULL |  |  |
| LEADER_HR_ID | varchar(10) | YES |  |  |  | หัวหน้าฝ่าย |
| LEADER_HR_NAME | varchar(100) | YES |  |  |  |  |
| LEADER_HR_POSITION | varchar(100) | YES |  |  |  |  |
| RECORD_TYPE_ID | int | YES |  | NULL |  |  |
| BOOK_SEND_ID | varchar(50) | YES |  |  |  | เลขที่รันตามปีงบตามฝ่าย |
| BOOK_SEND_NUM | varchar(50) | YES |  |  |  | ที่แต่ละฝ่าย |
| BOOK_FROM_DEP_ID | varchar(50) | YES |  |  |  | รหัสกลุ่มงานเพื่อเงื่อนไขในการรัน |
| USER_POST_POSITION_ID | varchar(10) | YES |  |  |  |  |
| CANCEL_STATUS | varchar(20) | YES |  |  |  |  |
| CANCEL_COMMENT | varchar(255) | YES |  |  |  |  |
| CANCEL_BY_ID | varchar(10) | YES |  |  |  |  |
| CANCEL_BY_NAME | varchar(100) | YES |  |  |  |  |
| RECORD_LEVEL_ID | varchar(10) | YES |  |  |  |  |
| RECORD_ONE | mediumtext | YES |  | NULL |  |  |
| RECORD_TWO | mediumtext | YES |  | NULL |  |  |
| FROM_BAN_NUM | varchar(10) | YES |  |  |  |  |
| FROM_TAMBON_ID | varchar(10) | YES |  |  |  |  |
| FROM_AMPHUR_ID | varchar(20) | YES |  |  |  |  |
| FROM_PROVINCE_ID | varchar(20) | YES |  |  |  |  |
| BACK_BAN_NUM | varchar(10) | YES |  |  |  |  |
| BACK_TAMBON_ID | varchar(10) | YES |  |  |  |  |
| BACK_AMPHUR_ID | varchar(20) | YES |  |  |  |  |
| BACK_PROVINCE_ID | varchar(20) | YES |  |  |  |  |
| STATUS | varchar(20) | YES |  |  |  |  |
| RECEIVE_BY_ID | varchar(10) | YES |  |  |  |  |
| RECEIVE_BY_NAME | varchar(100) | YES |  |  |  |  |
| EDIT_BY_ID | varchar(10) | YES |  |  |  |  |
| EDIT_BY_NAME | varchar(100) | YES |  |  |  |  |
| FINISH_BY_ID | varchar(10) | YES |  |  |  |  |
| FINISH_BY_NAME | varchar(100) | YES |  |  |  |  |
| LOCATION_PROV_ID | varchar(10) | YES |  |  |  | สถานที่ไปในจังหวัดนอกจังหวัด |
| OFFER_WORK_HR_ID | varchar(10) | YES |  |  |  | มอบหมายงานให้กับ |
| OFFER_WORK_HR_NAME | varchar(50) | YES |  |  |  | มอบหมายงานให้กับ |
| MONEY_USE_ETC | decimal(10,2) | YES |  | NULL |  |  |
| SAVE_BACK | varchar(10) | YES |  |  |  | True Or False |
| BACK_TIME | time | YES |  | NULL |  |  |
| FROM_TIME | time | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| VERIFY_COMMENT | varchar(255) | YES |  | NULL |  |  |
| APPROVE_COMMENT | varchar(255) | YES |  | NULL |  |  |
| RECORD_EXPERT_RESULT | varchar(20) | YES |  | NULL |  |  |
| RECORD_EXPERT_REMARK | varchar(255) | YES |  | NULL |  |  |
| DISTANCE | double(20,0) | YES |  | NULL |  |  |
| BOOK_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | RECORD_HEAD | no | 2 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
