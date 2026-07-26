# `ovst_eclaim`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| payload | longtext | YES |  | NULL |  |  |
| upload_status_code | int(11) | YES |  | NULL |  |  |
| upload_status_message | text | YES |  | NULL |  |  |
| upload_datetime | datetime | YES |  | NULL |  |  |
| moph_finance_payload | longtext | YES |  | NULL |  |  |
| moph_finance_upload_datetime | datetime | YES |  | NULL |  |  |
| moph_finance_upload_status | int(11) | YES | MUL | NULL |  |  |
| fdh_ready | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn_moph_finance_upload_status | moph_finance_upload_status | no | 1 |
| ix_vn_moph_finance_upload_status | vn | no | 2 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "670327083030",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-28 11:01:49",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670327090058",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-28 11:01:49",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102070600",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102072504",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102072948",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102073249",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102073448",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  },
  {
    "vn": "670102074310",
    "payload": null,
    "upload_status_code": null,
    "upload_status_message": null,
    "upload_datetime": null,
    "moph_finance_payload": null,
    "moph_finance_upload_datetime": "2024-03-29 09:01:17",
    "moph_finance_upload_status": 200,
    "fdh_ready": null
  }
]
```
