# `ekg_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ekg_request_id | int(11) | NO | PRI | 0 |  |  |
| ekg_request_date | date | YES |  | NULL |  |  |
| ekg_request_time | time | YES |  | NULL |  |  |
| patient_department | char(3) | YES |  | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ekg_item_id | int(11) | YES |  | NULL |  |  |
| ekg_request_doctor | varchar(10) | YES |  | NULL |  |  |
| ekg_request_status_id | int(11) | YES |  | NULL |  |  |
| ekg_report_doctor | varchar(10) | YES |  | NULL |  |  |
| ekg_report_date | date | YES |  | NULL |  |  |
| ekg_report_time | time | YES |  | NULL |  |  |
| ekg_request_note | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pac_request | char(1) | YES |  | NULL |  |  |
| ekg_report_note | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | ekg_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "ekg_request_id": 6,
    "ekg_request_date": "2019-10-29",
    "ekg_request_time": "11:09:28",
    "patient_department": "OPD",
    "vn": "621029105448",
    "an": "",
    "ekg_item_id": null,
    "ekg_request_doctor": "145",
    "ekg_request_status_id": 1,
    "ekg_report_doctor": null,
    "ekg_report_date": null,
    "ekg_report_time": null,
    "ekg_request_note": "ตรวจEKG",
    "hn": "560000833",
    "pac_request": null,
    "ekg_report_note": null,
    "hos_guid": null
  }
]
```
