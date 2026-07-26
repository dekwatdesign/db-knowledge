# `ipd_doctor_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| pn_s | varchar(2000) | YES |  | NULL |  |  |
| pn_o | varchar(2000) | YES |  | NULL |  |  |
| pn_a | varchar(2000) | YES |  | NULL |  |  |
| pn_risk | varchar(2000) | YES |  | NULL |  |  |
| pn_sign | varchar(100) | YES |  | NULL |  |  |
| pn_p | varchar(2000) | YES |  | NULL |  |  |
| order_type_list_text | varchar(200) | YES |  | NULL |  |  |
| ack_status | char(1) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| take_order_from_doctor | char(1) | YES |  | NULL |  |  |
| pn_note | varchar(2000) | YES |  | NULL |  |  |
| take_order_ack | char(1) | YES |  | NULL |  |  |
| take_order_ack_datetime | datetime | YES |  | NULL |  |  |
| order_approved | char(1) | YES |  | NULL |  |  |
| order_approved_datetime | datetime | YES |  | NULL |  |  |
| approve_comment | varchar(250) | YES |  | NULL |  |  |
| order_doctor_code | varchar(15) | YES |  | NULL |  |  |
| approve_doctor_code | varchar(15) | YES |  | NULL |  |  |
| is_apply | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_ipd_an | ipd_doctor_order_id | no | 1 |
| ix_ipd_an | an | no | 2 |
| ix_ipd_an_index | an | no | 1 |
| ix_ipd_an_index | ipd_doctor_order_id | no | 2 |
| ix_order_date | order_date | no | 1 |
| PRIMARY | ipd_doctor_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_doctor_order_id": 14,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "13:57:06",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": null,
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": null,
    "approve_comment": null,
    "order_doctor_code": null,
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 15,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "13:59:16",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Other",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-01-09 14:01:37",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 16,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "14:04:38",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Operation",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-01-09 14:05:52",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 17,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "14:07:34",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Medication,Off",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-01-09 14:09:19",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 20,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "14:22:21",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Medication",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-01-09 14:25:47",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 23,
    "an": "680000036",
    "order_date": "2025-01-09",
    "order_time": "16:19:54",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-01-09 16:21:12",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 29,
    "an": "680001126",
    "order_date": "2025-07-25",
    "order_time": "15:26:09",
    "doctor_code": "0067",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Other",
    "ack_status": null,
    "entry_staff": "yuwa439",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-07-25 15:28:17",
    "approve_comment": null,
    "order_doctor_code": "0067",
    "approve_doctor_code": null,
    "is_apply": null
  },
  {
    "ipd_doctor_order_id": 34,
    "an": "680001294",
    "order_date": "2025-08-30",
    "order_time": "9:54:49",
    "doctor_code": "291",
    "pn_s": null,
    "pn_o": null,
    "pn_a": null,
    "pn_risk": null,
    "pn_sign": null,
    "pn_p": null,
    "order_type_list_text": "Medication",
    "ack_status": null,
    "entry_staff": "yuwa231",
    "take_order_from_doctor": "N",
    "pn_note": null,
    "take_order_ack": null,
    "take_order_ack_datetime": null,
    "order_approved": "Y",
    "order_approved_datetime": "2025-08-30 10:00:29",
    "approve_comment": null,
    "order_doctor_code": "291",
    "approve_doctor_code": null,
    "is_apply": null
  }
]
```
