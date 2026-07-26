# `fdh_send_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| fdh_send_log_id | int(11) | NO | PRI | 0 |  |  |
| fdh_send_log_vnan | varchar(13) | YES |  | NULL |  |  |
| fdh_send_log_type | varchar(10) | YES |  | NULL |  |  |
| fdh_send_log_date | datetime | YES |  | NULL |  |  |
| fdh_send_log_charge_total | decimal(10,0) | YES |  | NULL |  |  |
| fdh_send_log_status | char(1) | YES |  | NULL |  |  |
| fdh_send_log_status_code | varchar(10) | YES |  | NULL |  |  |
| fdh_send_log_message | text | YES |  | NULL |  |  |
| fdh_send_log_lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | fdh_send_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "fdh_send_log_id": 1,
    "fdh_send_log_vnan": "690609103006",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:28"
  },
  {
    "fdh_send_log_id": 2,
    "fdh_send_log_vnan": "690609130000",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:29"
  },
  {
    "fdh_send_log_id": 3,
    "fdh_send_log_vnan": "690609100000",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:29"
  },
  {
    "fdh_send_log_id": 4,
    "fdh_send_log_vnan": "690609083002",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:29"
  },
  {
    "fdh_send_log_id": 5,
    "fdh_send_log_vnan": "690609103012",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:29"
  },
  {
    "fdh_send_log_id": 6,
    "fdh_send_log_vnan": "690609103008",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:30"
  },
  {
    "fdh_send_log_id": 7,
    "fdh_send_log_vnan": "690609083004",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:30"
  },
  {
    "fdh_send_log_id": 8,
    "fdh_send_log_vnan": "690609090000",
    "fdh_send_log_type": "OPD",
    "fdh_send_log_date": "2026-06-09 00:00:00",
    "fdh_send_log_charge_total": "50",
    "fdh_send_log_status": "Y",
    "fdh_send_log_status_code": "200",
    "fdh_send_log_message": "success",
    "fdh_send_log_lastupdate": "2026-06-12 17:34:30"
  }
]
```
