# `fdh_claim_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fdh_claim_status_id | int(11) | NO | PRI | NULL | auto_increment |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| fdh_claim_status_datetime | datetime | YES |  | NULL |  |  |
| fdh_claim_status_response | text | YES |  | NULL |  |  |
| fdh_claim_status_message | varchar(100) | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| transaction_uid | varchar(100) | YES |  | NULL |  |  |
| fdh_reservation_req_message | text | YES |  | NULL |  |  |
| fdh_reservation_status | char(1) | YES |  | NULL |  |  |
| fdh_reservation_datetime | datetime | YES |  | NULL |  |  |
| fdh_reservation_resp_message | text | YES |  | NULL |  |  |
| fdh_cancel_status | char(1) | YES |  | NULL |  |  |
| fdh_cancel_datetime | datetime | YES |  | NULL |  |  |
| fdh_cancel_staff | varchar(100) | YES |  | NULL |  |  |
| fdh_act_amt | double(12,2) | YES |  | NULL |  |  |
| fdh_settle_at | varchar(255) | YES |  | NULL |  |  |
| fdh_stm_period | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | fdh_claim_status_id | yes | 1 |
| vn | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "fdh_claim_status_id": 1,
    "vn": "670329143000",
    "hn": "610000273",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": null,
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": null,
    "fdh_reservation_datetime": null,
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": null,
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 2,
    "vn": "670329140000",
    "hn": "590000101",
    "fdh_claim_status_datetime": "2024-03-29 08:52:03",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 08:52:03",
    "transaction_uid": null,
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": null,
    "fdh_reservation_datetime": null,
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": null,
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 3,
    "vn": "670329133012",
    "hn": "660000613",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": null,
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": null,
    "fdh_reservation_datetime": null,
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": null,
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 4,
    "vn": "670329133010",
    "hn": "660000549",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": "5415bd83-72c4-4bd8-8eac-b4c34095198f",
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": "Y",
    "fdh_reservation_datetime": "2024-03-29 15:50:19",
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": "N",
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 5,
    "vn": "670329133008",
    "hn": "630000537",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": null,
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": null,
    "fdh_reservation_datetime": null,
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": null,
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 6,
    "vn": "670329133006",
    "hn": "660000346",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": "b95668b5-bdc8-416a-9149-48d7b8c1b0c6",
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": "Y",
    "fdh_reservation_datetime": "2024-03-29 15:50:19",
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": "N",
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 7,
    "vn": "670329133004",
    "hn": "620001304",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": null,
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": null,
    "fdh_reservation_datetime": null,
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": null,
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  },
  {
    "fdh_claim_status_id": 8,
    "vn": "670329133002",
    "hn": "570001984",
    "fdh_claim_status_datetime": "2024-03-29 15:56:59",
    "fdh_claim_status_response": null,
    "fdh_claim_status_message": "ไม่พบข้อมูลรหัสเคลมในระบบ",
    "staff_entry": "187",
    "last_update": "2024-03-29 15:56:59",
    "transaction_uid": "8279a882-edef-40be-9d5e-12558d411ec4",
    "fdh_reservation_req_message": null,
    "fdh_reservation_status": "Y",
    "fdh_reservation_datetime": "2024-03-29 15:50:19",
    "fdh_reservation_resp_message": null,
    "fdh_cancel_status": "N",
    "fdh_cancel_datetime": null,
    "fdh_cancel_staff": null,
    "fdh_act_amt": null,
    "fdh_settle_at": null,
    "fdh_stm_period": null
  }
]
```
