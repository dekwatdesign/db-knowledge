# `supplies_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| ORDER_ID | varchar(20) | YES |  |  |  |  |
| ORDER_FOR | varchar(255) | YES |  |  |  |  |
| ORDER_BY_HR_ID | varchar(20) | YES |  |  |  |  |
| ORDER_BY_HR_NAME | varchar(50) | YES |  |  |  |  |
| ORDER_BY_HR_POSITION | varchar(100) | YES |  |  |  |  |
| ORDER_FROM_DEPART | varchar(100) | YES |  |  |  |  |
| ORDER_FROM_DEPART_SUB | varchar(100) | YES |  |  |  |  |
| HR_DEPARTMENT_SUB_ID | varchar(20) | YES |  |  |  |  |
| ORDER_DATE_TIME | datetime | YES |  | NULL |  |  |
| ORDER_DATE | date | YES |  | NULL |  |  |
| ORDER_STATUS | varchar(10) | YES |  |  |  |  |
| DATE_WANT_USE | date | YES |  | NULL |  |  |
| ORDER_LEADER_ID | varchar(20) | YES |  |  |  |  |
| ORDER_LEADER_NAME | varchar(100) | YES |  |  |  |  |
| ORDER_LEADER_POSITION | varchar(100) | YES |  |  |  |  |
| ORDER_COMMENT | varchar(100) | YES |  |  |  |  |
| SAVE_AS | enum('WIN','WEB','MOBILE') | YES |  | WIN |  |  |
| DELEGATE_HR_ID | varchar(20) | YES |  |  |  |  |
| DELEGATE_HR_NAME | varchar(100) | YES |  |  |  | มอบให้ |
| SUPPLIES_ORDER_TYPE_ID | varchar(10) | YES |  |  |  | ประเภทการเบิก |
| DEL_STATUS | enum('True','False') | YES |  | False |  |  |
| HR_DEPARTMENT_SUB_NAME | varchar(100) | YES |  |  |  |  |
| PLAN_YEAR_ID | varchar(10) | YES |  |  |  |  |
| PLAN_TRIMART_ID | varchar(10) | YES |  |  |  |  |
| HR_DEPARTMENT_SUB_SUB_ID | varchar(20) | YES |  |  |  |  |
| HR_DEPARTMENT_SUB_SUB_NAME | varchar(100) | YES |  |  |  |  |
| RECEIVE_HR_ID | varchar(10) | YES |  |  |  | รับเรื่องจากงานพัสดุ |
| RECEIVE_HR_NAME | varchar(50) | YES |  |  |  |  |
| INVEN_ID | varchar(10) | YES |  |  |  | คลังที่ต้องการเบิก |

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
