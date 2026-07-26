# `doctor_operation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_operation_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| er_oper_code | int(11) | YES |  | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| begin_date_time | datetime | YES |  | NULL |  |  |
| end_date_time | datetime | YES |  | NULL |  |  |
| icd9 | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| sflag | char(1) | YES | MUL | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| ovst_diag_id | int(11) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| er_oper_code_area_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| order_doctor_code | varchar(15) | YES |  | NULL |  |  |
| operation_detail_text | text | YES |  | NULL |  |  |
| doctor_investigation_report_id | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES |  | NULL |  |  |
| reason_text | varchar(1000) | YES |  | NULL |  |  |
| outcome_text | varchar(2000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_operation_id | yes | 1 |
| sflag | sflag | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doctor_operation_id": 1,
    "vn": "541012060121",
    "er_oper_code": 20,
    "doctor": "216",
    "begin_date_time": "2011-10-12 00:00:00",
    "end_date_time": "2011-10-12 00:00:00",
    "icd9": "",
    "price": 0.0,
    "sflag": "N",
    "opi_guid": null,
    "ovst_diag_id": null,
    "depcode": "026",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 2,
    "vn": "541012131958",
    "er_oper_code": 40,
    "doctor": "",
    "begin_date_time": "2011-10-12 00:00:00",
    "end_date_time": "2011-10-12 00:00:00",
    "icd9": "",
    "price": 150.0,
    "sflag": "N",
    "opi_guid": "{5C332869-05E8-44DD-9454-E98E55090177}",
    "ovst_diag_id": null,
    "depcode": "013",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 3,
    "vn": "541012141748",
    "er_oper_code": 36,
    "doctor": "",
    "begin_date_time": "2011-10-12 00:00:00",
    "end_date_time": "2011-10-12 00:00:00",
    "icd9": "",
    "price": 1800.0,
    "sflag": "N",
    "opi_guid": "{184B3225-D11B-4F54-875A-CF3B8826844A}",
    "ovst_diag_id": null,
    "depcode": "022",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 4,
    "vn": "541012142847",
    "er_oper_code": 36,
    "doctor": "145",
    "begin_date_time": "2011-10-12 00:00:00",
    "end_date_time": "2011-10-12 00:00:00",
    "icd9": "",
    "price": 1800.0,
    "sflag": "N",
    "opi_guid": "{D506D9D1-F241-4167-BEFD-F60951328125}",
    "ovst_diag_id": null,
    "depcode": "022",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 5,
    "vn": "541013080204",
    "er_oper_code": 37,
    "doctor": "202",
    "begin_date_time": "2011-10-13 08:00:00",
    "end_date_time": "2011-10-13 08:20:00",
    "icd9": "",
    "price": 500.0,
    "sflag": "N",
    "opi_guid": "{658A8D43-344D-4A7E-9734-0F5B58C4BEB0}",
    "ovst_diag_id": null,
    "depcode": "022",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 6,
    "vn": "541013090446",
    "er_oper_code": 37,
    "doctor": "202",
    "begin_date_time": "2011-10-13 08:30:00",
    "end_date_time": "2011-10-13 08:50:00",
    "icd9": "",
    "price": 500.0,
    "sflag": "N",
    "opi_guid": "{D8628876-2BAC-49E0-96B0-C10BED1D21D8}",
    "ovst_diag_id": null,
    "depcode": "022",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 7,
    "vn": "541013060048",
    "er_oper_code": 18,
    "doctor": "093",
    "begin_date_time": "2011-10-13 10:00:00",
    "end_date_time": "2011-10-13 10:30:00",
    "icd9": "",
    "price": 150.0,
    "sflag": "N",
    "opi_guid": "{DC4184B2-95E1-4CB8-811B-CF31F9177A9A}",
    "ovst_diag_id": null,
    "depcode": "026",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  },
  {
    "doctor_operation_id": 8,
    "vn": "541013083544",
    "er_oper_code": 24,
    "doctor": "098",
    "begin_date_time": "2011-10-13 10:30:00",
    "end_date_time": "2011-10-13 11:00:00",
    "icd9": "",
    "price": 100.0,
    "sflag": "N",
    "opi_guid": "{5D483305-B689-4005-AC95-EE5E6B95E81D}",
    "ovst_diag_id": null,
    "depcode": "026",
    "er_oper_code_area_id": null,
    "hos_guid": null,
    "staff": null,
    "update_datetime": null,
    "order_doctor_code": null,
    "operation_detail_text": null,
    "doctor_investigation_report_id": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "outcome_text": null
  }
]
```
