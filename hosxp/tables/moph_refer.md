# `moph_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_refer_id | varchar(255) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| referout_id | int(11) | YES |  | NULL |  |  |
| refer_number | varchar(255) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| out_hcode | varchar(10) | YES |  | NULL |  |  |
| in_hcode | varchar(10) | YES |  | NULL |  |  |
| moph_refer_type | varchar(1) | YES |  | NULL |  |  |
| moph_refer_status | varchar(1) | YES |  | NULL |  |  |
| moph_refer_receive | varchar(1) | YES |  | NULL |  |  |
| moph_refer_reply | varchar(1) | YES |  | NULL |  |  |
| moph_refer_cancel | varchar(1) | YES |  | NULL |  |  |
| moph_refer_send_json | text | YES |  | NULL |  |  |
| moph_refer_res_json | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_moph_refer_hn | hn | no | 1 |
| ix_moph_refer_vn | vn | no | 1 |
| PRIMARY | moph_refer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "moph_refer_id": "12251-202510-1",
    "hn": "590000288",
    "vn": "680910103048",
    "referout_id": 1824,
    "refer_number": "2/68",
    "update_datetime": "2025-09-10 11:38:28",
    "out_hcode": "12251",
    "in_hcode": "10752",
    "moph_refer_type": "O",
    "moph_refer_status": "W",
    "moph_refer_receive": null,
    "moph_refer_reply": null,
    "moph_refer_cancel": null,
    "moph_refer_send_json": "[MASKED_FULLNAME]",
    "moph_refer_res_json": "{\"data\":{\"refer_id\":\"12251-202510-1\"},\"message\":\"success\",\"message_th\":\"สำเร็จ\",\"status\":200}"
  },
  {
    "moph_refer_id": "12251-202510-2",
    "hn": "620000409",
    "vn": "681002103016",
    "referout_id": 1825,
    "refer_number": "3/68",
    "update_datetime": "2025-10-02 12:59:41",
    "out_hcode": "12251",
    "in_hcode": "10752",
    "moph_refer_type": "O",
    "moph_refer_status": "W",
    "moph_refer_receive": null,
    "moph_refer_reply": null,
    "moph_refer_cancel": null,
    "moph_refer_send_json": "[MASKED_FULLNAME]",
    "moph_refer_res_json": "{\"data\":{\"refer_id\":\"12251-202510-2\"},\"message\":\"success\",\"message_th\":\"สำเร็จ\",\"status\":200}"
  },
  {
    "moph_refer_id": "12251-202510-3",
    "hn": "610002043",
    "vn": "680813083010",
    "referout_id": 1827,
    "refer_number": "4/68",
    "update_datetime": "2025-10-22 14:44:02",
    "out_hcode": "12251",
    "in_hcode": "10752",
    "moph_refer_type": "O",
    "moph_refer_status": "W",
    "moph_refer_receive": null,
    "moph_refer_reply": null,
    "moph_refer_cancel": null,
    "moph_refer_send_json": "[MASKED_FULLNAME]",
    "moph_refer_res_json": "{\"data\":{\"refer_id\":\"12251-202510-3\"},\"message\":\"success\",\"message_th\":\"สำเร็จ\",\"status\":200}"
  },
  {
    "moph_refer_id": "12251-202511-4",
    "hn": "580001401",
    "vn": "681117121028",
    "referout_id": 1829,
    "refer_number": "5/68",
    "update_datetime": "2025-11-17 13:56:42",
    "out_hcode": "12251",
    "in_hcode": "10752",
    "moph_refer_type": "O",
    "moph_refer_status": "W",
    "moph_refer_receive": null,
    "moph_refer_reply": null,
    "moph_refer_cancel": null,
    "moph_refer_send_json": "[MASKED_FULLNAME]",
    "moph_refer_res_json": "{\"data\":{\"refer_id\":\"12251-202511-4\"},\"message\":\"success\",\"message_th\":\"สำเร็จ\",\"status\":200}"
  },
  {
    "moph_refer_id": "12251-202605-5",
    "hn": "650005676",
    "vn": "690518122945",
    "referout_id": 1835,
    "refer_number": "4/69",
    "update_datetime": "2026-05-18 10:15:03",
    "out_hcode": "12251",
    "in_hcode": "10752",
    "moph_refer_type": "O",
    "moph_refer_status": "W",
    "moph_refer_receive": null,
    "moph_refer_reply": null,
    "moph_refer_cancel": null,
    "moph_refer_send_json": "[MASKED_FULLNAME]",
    "moph_refer_res_json": "{\"data\":{\"refer_id\":\"12251-202605-5\"},\"message\":\"refer_out_no 4/69 is duplicated in the system\",\"message_th\":\"refer_out_no 4/69 ซ้ำในระบบ\",\"status\":400}"
  }
]
```
