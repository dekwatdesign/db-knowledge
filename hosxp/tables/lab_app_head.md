# `lab_app_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_app_order_number | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| lab_items_group_code | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| lab_head_remark | varchar(250) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| order_date | date | YES | MUL | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| reporter_name | varchar(100) | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| confirm_specimen | char(1) | YES | MUL | NULL |  |  |
| confirm_report | char(1) | YES |  | NULL |  |  |
| department | varchar(5) | YES |  | NULL |  |  |
| form_name | varchar(200) | YES |  | NULL |  |  |
| sub_group_list | varchar(200) | YES |  | NULL |  |  |
| order_time | time | YES |  | NULL |  |  |
| receive_date | date | YES |  | NULL |  |  |
| receive_time | time | YES |  | NULL |  |  |
| ward | char(2) | YES |  | NULL |  |  |
| result_note | text | YES |  | NULL |  |  |
| lock_result | char(1) | YES |  | NULL |  |  |
| result_rtf | longtext | YES |  | NULL |  |  |
| order_note | text | YES |  | NULL |  |  |
| lab_receive_number | int(11) | YES |  | NULL |  |  |
| approve_staff | varchar(25) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| nextdate | date | YES | MUL | NULL |  |  |
| confirm_order | char(1) | YES |  | NULL |  |  |
| order_computer_name | varchar(50) | YES |  | NULL |  |  |
| order_department | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| lab_perform_status_id | int(11) | YES |  | NULL |  |  |
| confirm_charge_money | char(1) | YES |  | NULL |  |  |
| finance_lab_confirm | char(1) | YES |  | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| lab_priority_id | int(11) | YES |  | NULL |  |  |
| lab_receive | char(1) | YES |  | NULL |  |  |
| finance_lab_clear | char(1) | YES |  | NULL |  |  |
| notify_depcode | char(3) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| link_lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_request_type_id | int(11) | YES |  | NULL |  |  |
| order_staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| confirm_specimen | confirm_specimen | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_link_lab_order_number | link_lab_order_number | no | 1 |
| ix_nextdate | nextdate | no | 1 |
| ix_oapp_id | oapp_id | no | 1 |
| ix_order_date | order_date | no | 1 |
| PRIMARY | lab_app_order_number | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_app_order_number": 1,
    "doctor_code": "158",
    "lab_items_group_code": null,
    "vn": "541014060002",
    "lab_head_remark": null,
    "hn": "530230550",
    "order_date": "2011-10-14",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "HEMATOLOGY",
    "sub_group_list": "1,14",
    "order_time": "13:57:33",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 1484,
    "nextdate": "2012-02-17",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 2,
    "doctor_code": "158",
    "lab_items_group_code": null,
    "vn": "541014060002",
    "lab_head_remark": null,
    "hn": "530230550",
    "order_date": "2011-10-14",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "CHEMISTRY",
    "sub_group_list": "10,7,9",
    "order_time": "13:58:00",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 1484,
    "nextdate": "2012-02-17",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 3,
    "doctor_code": "158",
    "lab_items_group_code": null,
    "vn": "541014060002",
    "lab_head_remark": null,
    "hn": "530230550",
    "order_date": "2011-10-14",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "DRUG MORNITORING",
    "sub_group_list": "",
    "order_time": "13:58:10",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 1484,
    "nextdate": "2012-02-17",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 4,
    "doctor_code": "089",
    "lab_items_group_code": null,
    "vn": "1xxxxxxxxxxxx",
    "lab_head_remark": null,
    "hn": "530038742",
    "order_date": "2011-10-17",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "HEMATOLOGY",
    "sub_group_list": "1,14,2",
    "order_time": "15:57:30",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 2470,
    "nextdate": "1990-01-01",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 5,
    "doctor_code": "089",
    "lab_items_group_code": null,
    "vn": "1xxxxxxxxxxxx",
    "lab_head_remark": null,
    "hn": "530038742",
    "order_date": "2011-10-17",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "CHEMISTRY",
    "sub_group_list": "10",
    "order_time": "15:57:52",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 2470,
    "nextdate": "1990-01-01",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 6,
    "doctor_code": "133",
    "lab_items_group_code": null,
    "vn": "541017181642",
    "lab_head_remark": null,
    "hn": "530155753",
    "order_date": "2011-10-17",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "DRUG MORNITORING",
    "sub_group_list": "",
    "order_time": "20:12:08",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 2839,
    "nextdate": "2011-10-27",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 7,
    "doctor_code": "123",
    "lab_items_group_code": null,
    "vn": "541019090009",
    "lab_head_remark": null,
    "hn": "530015751",
    "order_date": "2011-10-19",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "DRUG MORNITORING",
    "sub_group_list": "",
    "order_time": "12:12:04",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 4895,
    "nextdate": "2011-11-23",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  },
  {
    "lab_app_order_number": 8,
    "doctor_code": "109",
    "lab_items_group_code": null,
    "vn": "541019100000",
    "lab_head_remark": null,
    "hn": "610001046",
    "order_date": "2011-10-19",
    "report_date": null,
    "reporter_name": null,
    "report_time": null,
    "confirm_specimen": null,
    "confirm_report": "N",
    "department": "OPD",
    "form_name": "DRUG MORNITORING",
    "sub_group_list": "",
    "order_time": "12:54:49",
    "receive_date": null,
    "receive_time": null,
    "ward": null,
    "result_note": null,
    "lock_result": null,
    "result_rtf": null,
    "order_note": null,
    "lab_receive_number": null,
    "approve_staff": null,
    "oapp_id": 4912,
    "nextdate": "2012-01-11",
    "confirm_order": "N",
    "order_computer_name": null,
    "order_department": null,
    "hos_guid": null,
    "lab_perform_status_id": null,
    "confirm_charge_money": null,
    "finance_lab_confirm": null,
    "hospital_department_id": null,
    "lab_priority_id": null,
    "lab_receive": null,
    "finance_lab_clear": null,
    "notify_depcode": null,
    "entry_datetime": null,
    "update_datetime": null,
    "link_lab_order_number": null,
    "lab_request_type_id": null,
    "order_staff": null
  }
]
```
