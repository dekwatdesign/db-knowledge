# `prscrpt_delivery`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| prscrpt_delivery_track | varchar(50) | YES | UNI | NULL |  |  |
| prscrpt_delivery_cover | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_weight | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_phone | varchar(50) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_status_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_company_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_add_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_send_status | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_send_date | datetime | YES |  | NULL |  |  |
| prscrpt_delivery_resp_code | varchar(3) | YES |  | NULL |  |  |
| prscrpt_delivery_check_id | int(11) | YES |  | NULL |  |  |
| staff_approve | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_size_id | int(11) | YES |  | NULL |  |  |
| prscrpt_delivery_pack_date | date | YES |  | NULL |  |  |
| prscrpt_delivery_pack_time | time | YES |  | NULL |  |  |
| prscrpt_delivery_note | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_data_from | varchar(100) | YES |  | NULL |  |  |
| prscrpt_delivery_tele_status | varchar(50) | YES |  | NULL |  |  |
| prscrpt_delivery_tele_comment | text | YES |  | NULL |  |  |
| prscrpt_delivery_tele_staff | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_tele_datetime | datetime | YES |  | NULL |  |  |
| prscrpt_delivery_call_guid | varchar(50) | YES |  | NULL |  |  |
| moph_appointment_slot_id | int(11) | YES |  | NULL |  |  |
| moph_appointment_date | date | YES |  | NULL |  |  |
| moph_appointment_period | varchar(50) | YES |  | NULL |  |  |
| health_rider_register | char(1) | YES |  | NULL |  |  |
| health_rider_coverage_price | decimal(10,0) | YES |  | NULL |  |  |
| health_rider_url_label | varchar(255) | YES |  | NULL |  |  |
| prscrpt_delivery_from_kiosk | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_prscrpt_delivery_prscrpt_delivery_track_idx | prscrpt_delivery_track | yes | 1 |
| ix_prscrpt_delivery_vn_idx | vn | yes | 1 |
| PRIMARY | prscrpt_delivery_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "prscrpt_delivery_id": 1,
    "hn": "660000979",
    "vn": "670426140016",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": null,
    "entry_datetime": "2024-04-26 16:01:33",
    "last_update": "2024-04-26 16:01:33",
    "staff_entry": null,
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 11,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": null,
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": null,
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 2,
    "hn": "550001796",
    "vn": "670426101830",
    "prscrpt_delivery_track": "EM",
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": "",
    "entry_datetime": "2024-04-26 16:01:33",
    "last_update": "2024-04-26 16:05:24",
    "staff_entry": "361",
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 12,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": "361",
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": "2024-04-26",
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": "",
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 3,
    "hn": "530185649",
    "vn": "670501090004",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": null,
    "entry_datetime": "2024-05-01 10:04:35",
    "last_update": "2024-05-01 10:04:35",
    "staff_entry": null,
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 14,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": null,
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": null,
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 4,
    "hn": "530011454",
    "vn": "670501091613",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": null,
    "entry_datetime": "2024-05-01 10:04:35",
    "last_update": "2024-05-01 10:04:35",
    "staff_entry": null,
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 15,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": null,
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": null,
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 0,
    "hn": null,
    "vn": null,
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": null,
    "entry_datetime": null,
    "last_update": null,
    "staff_entry": null,
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": null,
    "prscrpt_delivery_add_id": null,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": null,
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": "",
    "prscrpt_delivery_data_from": null,
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": null,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": "",
    "health_rider_coverage_price": "0",
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 6,
    "hn": "550000008",
    "vn": "680220080053",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": 0,
    "prscrpt_delivery_phone": "027374486,0899931688",
    "entry_datetime": "2025-02-20 08:35:25",
    "last_update": "2025-02-20 08:53:30",
    "staff_entry": "361",
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 24,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": "361",
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": "",
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": "",
    "health_rider_coverage_price": "0",
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": "N"
  },
  {
    "prscrpt_delivery_id": 7,
    "hn": "670000535",
    "vn": "680220083024",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": null,
    "entry_datetime": "2025-02-20 09:59:12",
    "last_update": "2025-02-20 09:59:12",
    "staff_entry": null,
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 26,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": null,
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": null,
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  },
  {
    "prscrpt_delivery_id": 8,
    "hn": "660001466",
    "vn": "680225101000",
    "prscrpt_delivery_track": null,
    "prscrpt_delivery_cover": null,
    "prscrpt_delivery_weight": null,
    "prscrpt_delivery_phone": "",
    "entry_datetime": "2025-02-25 14:36:17",
    "last_update": "2025-03-07 09:26:55",
    "staff_entry": "361",
    "prscrpt_delivery_status_id": null,
    "prscrpt_delivery_company_id": 0,
    "prscrpt_delivery_add_id": 27,
    "prscrpt_delivery_send_status": null,
    "prscrpt_delivery_send_date": null,
    "prscrpt_delivery_resp_code": null,
    "prscrpt_delivery_check_id": null,
    "staff_approve": "361",
    "prscrpt_delivery_size_id": null,
    "prscrpt_delivery_pack_date": null,
    "prscrpt_delivery_pack_time": null,
    "prscrpt_delivery_note": "",
    "prscrpt_delivery_data_from": "รับยาที่บ้าน",
    "prscrpt_delivery_tele_status": null,
    "prscrpt_delivery_tele_comment": null,
    "prscrpt_delivery_tele_staff": null,
    "prscrpt_delivery_tele_datetime": null,
    "prscrpt_delivery_call_guid": null,
    "moph_appointment_slot_id": 0,
    "moph_appointment_date": null,
    "moph_appointment_period": null,
    "health_rider_register": null,
    "health_rider_coverage_price": null,
    "health_rider_url_label": null,
    "prscrpt_delivery_from_kiosk": null
  }
]
```
