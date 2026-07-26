# `nhso_confirm_privilege`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_confirm_privilege_id | int(11) | NO | PRI | NULL | auto_increment |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| nhso_seq | varchar(100) | YES |  | NULL |  |  |
| nhso_authen_code | varchar(20) | YES |  | NULL |  |  |
| nhso_request_json | text | YES |  | NULL |  |  |
| nhso_reponse_json | text | YES |  | NULL |  |  |
| nhso_requst_datetime | datetime | YES |  | NULL |  |  |
| nhso_response_datetime | datetime | YES |  | NULL |  |  |
| confirm_staff | varchar(50) | YES |  | NULL |  |  |
| nhso_status | char(1) | YES |  | NULL |  |  |
| debt_id | int(11) | YES |  | NULL |  |  |
| nhso_total_amount | double(18,2) | YES |  | NULL |  |  |
| nhso_cancel_response | text | YES |  | NULL |  |  |
| nhso_cancel_datetime | datetime | YES |  | NULL |  |  |
| cancel_staff | varchar(50) | YES |  | NULL |  |  |
| nhso_confirm_type_id | int(11) | YES |  | NULL |  |  |
| fdh_send_status | char(1) | YES |  | NULL |  |  |
| fdh_transaction_id | varchar(100) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| nhso_privilege_amount | double(18,2) | YES |  | NULL |  |  |
| nhso_cash_amount | double(18,2) | YES |  | NULL |  |  |
| testzone | varchar(1) | YES |  | NULL |  |  |
| sourceID | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nhso_confirm_privilege_id | yes | 1 |
| vn | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_confirm_privilege_id": 1,
    "vn": "670507122011",
    "nhso_seq": "340958800",
    "nhso_authen_code": "PP1433579006",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507122011\",\"pid\":\"1118700165589\",\"transactionId\":\"12251670507122011\",\"serviceDateTime\":1715058911000,\"invoiceDateTime\":1715062402000,\"mainInsclCode\":\"UCS\",\"totalAmount\":365,\"paidAmount\":0,\"privilegeAmount\":365,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":340958800,\"authenCode\":\"PP1433579006\"}",
    "nhso_requst_datetime": "2024-05-07 13:18:59",
    "nhso_response_datetime": "2024-05-07 13:19:07",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 382230,
    "nhso_total_amount": 365.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 365.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 2,
    "vn": "670507125722",
    "nhso_seq": "341028000",
    "nhso_authen_code": "PP1433588740",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507125722\",\"pid\":\"1100702747359\",\"transactionId\":\"12251670507125722\",\"serviceDateTime\":1715061142000,\"invoiceDateTime\":1715062776000,\"mainInsclCode\":\"UCS\",\"totalAmount\":2187.5,\"paidAmount\":0,\"privilegeAmount\":2187.5,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":341028000,\"authenCode\":\"PP1433588740\"}",
    "nhso_requst_datetime": "2024-05-07 13:25:10",
    "nhso_response_datetime": "2024-05-07 13:25:13",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 382757,
    "nhso_total_amount": 2187.5,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 2187.5,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 3,
    "vn": "670507130020",
    "nhso_seq": "341360800",
    "nhso_authen_code": "PP1433627505",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507130020\",\"pid\":\"1100703474003\",\"transactionId\":\"12251670507130020\",\"serviceDateTime\":1715061320000,\"invoiceDateTime\":1715064311000,\"mainInsclCode\":\"UCS\",\"totalAmount\":2480,\"paidAmount\":0,\"privilegeAmount\":2480,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":341360800,\"authenCode\":\"PP1433627505\"}",
    "nhso_requst_datetime": "2024-05-07 13:50:38",
    "nhso_response_datetime": "2024-05-07 13:50:39",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 382861,
    "nhso_total_amount": 2480.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 2480.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 4,
    "vn": "670507131956",
    "nhso_seq": "341390500",
    "nhso_authen_code": "PP1433630215",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507131956\",\"pid\":\"1417500108626\",\"transactionId\":\"12251670507131956\",\"serviceDateTime\":1715062496000,\"invoiceDateTime\":1715064417000,\"mainInsclCode\":\"UCS\",\"totalAmount\":548.75,\"paidAmount\":0,\"privilegeAmount\":548.75,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":341390500,\"authenCode\":\"PP1433630215\"}",
    "nhso_requst_datetime": "2024-05-07 13:52:27",
    "nhso_response_datetime": "2024-05-07 13:52:27",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 382868,
    "nhso_total_amount": 548.75,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 548.75,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 5,
    "vn": "670507123036",
    "nhso_seq": "341590000",
    "nhso_authen_code": "PP1433648848",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507123036\",\"pid\":\"1103705006085\",\"transactionId\":\"12251670507123036\",\"serviceDateTime\":1715059536000,\"invoiceDateTime\":1715065195000,\"mainInsclCode\":\"UCS\",\"totalAmount\":1714,\"paidAmount\":0,\"privilegeAmount\":1714,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":341590000,\"authenCode\":\"PP1433648848\"}",
    "nhso_requst_datetime": "2024-05-07 14:05:23",
    "nhso_response_datetime": "2024-05-07 14:05:24",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 382956,
    "nhso_total_amount": 1714.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 1714.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 6,
    "vn": "670507143000",
    "nhso_seq": "341647000",
    "nhso_authen_code": "PP1433653442",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507143000\",\"pid\":\"1209601936633\",\"transactionId\":\"12251670507143000\",\"serviceDateTime\":1715066700000,\"invoiceDateTime\":1715065383000,\"mainInsclCode\":\"UCS\",\"totalAmount\":550,\"paidAmount\":0,\"privilegeAmount\":550,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":341647000,\"authenCode\":\"PP1433653442\"}",
    "nhso_requst_datetime": "2024-05-07 14:08:31",
    "nhso_response_datetime": "2024-05-07 14:08:32",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 383042,
    "nhso_total_amount": 550.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "11",
    "nhso_privilege_amount": 550.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 7,
    "vn": "670507140505",
    "nhso_seq": "342134500",
    "nhso_authen_code": "PP1433690989",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507140505\",\"pid\":\"1110301430761\",\"transactionId\":\"12251670507140505\",\"serviceDateTime\":1715065205000,\"invoiceDateTime\":1715067102000,\"mainInsclCode\":\"UCS\",\"totalAmount\":160,\"paidAmount\":0,\"privilegeAmount\":160,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":342134500,\"authenCode\":\"PP1433690989\"}",
    "nhso_requst_datetime": "2024-05-07 14:37:09",
    "nhso_response_datetime": "2024-05-07 14:37:09",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 383158,
    "nhso_total_amount": 160.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "74",
    "nhso_privilege_amount": 160.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  },
  {
    "nhso_confirm_privilege_id": 8,
    "vn": "670507133000",
    "nhso_seq": "342162400",
    "nhso_authen_code": "PP1433692803",
    "nhso_request_json": "{\"hcode\":\"12251\",\"visitNumber\":\"670507133000\",\"pid\":\"1118600060840\",\"transactionId\":\"12251670507133000\",\"serviceDateTime\":1715063100000,\"invoiceDateTime\":1715067193000,\"mainInsclCode\":\"UCS\",\"totalAmount\":1680,\"paidAmount\":0,\"privilegeAmount\":1680,\"claimServiceCode\":\"PG0060001\",\"sourceId\":\"BMS01\",\"recorderPid\":\"1100700032671\"}",
    "nhso_reponse_json": "{\"seq\":342162400,\"authenCode\":\"PP1433692803\"}",
    "nhso_requst_datetime": "2024-05-07 14:38:41",
    "nhso_response_datetime": "2024-05-07 14:38:41",
    "confirm_staff": "0040",
    "nhso_status": "Y",
    "debt_id": 383201,
    "nhso_total_amount": 1680.0,
    "nhso_cancel_response": null,
    "nhso_cancel_datetime": null,
    "cancel_staff": null,
    "nhso_confirm_type_id": 1,
    "fdh_send_status": "N",
    "fdh_transaction_id": null,
    "pttype": "11",
    "nhso_privilege_amount": 1680.0,
    "nhso_cash_amount": 0.0,
    "testzone": null,
    "sourceID": null
  }
]
```
