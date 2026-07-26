# `warehouse_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| WAREHOUSE_ID | int | NO | PRI | NULL | auto_increment |  |
| WAREHOUSE_REQUEST_CODE | varchar(100) | YES |  | NULL |  |  |
| WAREHOUSE_DATE_WANT | date | YES |  | NULL |  |  |
| WAREHOUSE_DATE_TIME_SAVE | datetime | YES |  | NULL |  |  |
| WAREHOUSE_SAVE_HR_ID | int | YES |  | NULL |  |  |
| WAREHOUSE_SAVE_HR_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_SAVE_HR_POSITION | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_SAVE_HR_DEP_SUB_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_HEAD | varchar(200) | YES |  |  |  |  |
| WAREHOUSE_DEP_SUB_SUB_ID | varchar(11) | YES |  |  |  |  |
| WAREHOUSE_DEP_SUB_SUB_NAME | varchar(100) | YES |  |  |  |  |
| WAREHOUSE_DEP_SUB_SUB_PHONE | varchar(20) | YES |  |  |  |  |
| WAREHOUSE_STATUS | varchar(20) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_FOR_ID | int | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_FOR | varchar(255) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_COMMENT | varchar(255) | YES |  |  |  |  |
| WAREHOUSE_REPORT_HR_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_REPORT_HR_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_AGREE_HR_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_AGREE_HR_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_AGREE_HR_POSITION | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_AGREE_COMMENT | varchar(255) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_COMMENT | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_ACCEPT_BY_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_BY_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_BY_POSITION | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_SAVE_HR_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_SAVE_HR_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_ACCEPT_SAVE_DATE_TIME | datetime | YES |  | NULL |  |  |
| WAREHOUSE_ACCEPT_DATE | date | YES |  | NULL |  |  |
| WAREHOUSE_USER_CONFIRM_CHECK_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_USER_CONFIRM_CHECK_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_USER_CONFIRM_CHECK_DATE | datetime | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_BUY_TYPE_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_PLAN_TYPE_ID | varchar(10) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_BUY_COMMENT | varchar(100) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_PLAN_COMMENT | varchar(100) | YES |  |  |  |  |
| WAREHOUSE_REQUEST_ECT | varchar(150) | YES |  |  |  |  |
| WAREHOUSE_USER_CONFIRM_CHECK_POSITION | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_TOP_LEADER_AC_DATE | date | YES |  | NULL |  |  |
| WAREHOUSE_TOP_LEADER_AC_COMMENT | varchar(255) | YES |  |  |  |  |
| WAREHOUSE_TOP_LEADER_AC_ID | int | YES |  | NULL |  |  |
| WAREHOUSE_TOP_LEADER_AC_NAME | varchar(50) | YES |  |  |  |  |
| WAREHOUSE_TOP_LEADER_AC_DATE_TIME | datetime | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_FROM | varchar(20) | YES |  |  |  |  |
| WAREHOUSE_REPAIR_ID | varchar(20) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| WAREHOUSE_HIRE_DETAIL | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_BUDGET_SUM | int | YES |  | NULL |  |  |
| WAREHOUSE_BUDGET_YEAR | varchar(10) | YES |  | NULL |  |  |
| WAREHOUSE_STORE_ID | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_TYPE_CYCLE | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_INVEN_ID | int | YES |  | NULL |  |  |
| WAREHOUSE_SMALLHOS | varchar(50) | YES |  | NULL |  |  |
| WAREHOUSE_PAYDAY | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | WAREHOUSE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
