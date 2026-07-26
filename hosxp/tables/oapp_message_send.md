# `oapp_message_send`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_id | int(11) | NO | PRI | 0 |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| send_status | char(1) | YES |  | NULL |  |  |
| app_ok | char(1) | YES |  | NULL |  |  |
| line_ok | char(1) | YES |  | NULL |  |  |
| rt_send_datetime | datetime | YES |  | NULL |  |  |
| rt_send_status | char(1) | YES |  | NULL |  |  |
| rt_app_ok | char(1) | YES |  | NULL |  |  |
| rt_line_ok | char(1) | YES |  | NULL |  |  |
| send_d5_datetime | datetime | YES |  | NULL |  |  |
| send_d5_status | char(1) | YES |  | NULL |  |  |
| send_d5_app_ok | char(1) | YES |  | NULL |  |  |
| send_d5_line_ok | char(1) | YES |  | NULL |  |  |
| wait_confirm | char(1) | YES |  | NULL |  |  |
| confirm_ok | char(1) | YES |  | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | oapp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "oapp_id": 1042199,
    "send_datetime": "2023-12-26 13:06:30",
    "send_status": "Y",
    "app_ok": "Y",
    "line_ok": "Y",
    "rt_send_datetime": null,
    "rt_send_status": null,
    "rt_app_ok": null,
    "rt_line_ok": null,
    "send_d5_datetime": null,
    "send_d5_status": null,
    "send_d5_app_ok": null,
    "send_d5_line_ok": null,
    "wait_confirm": null,
    "confirm_ok": null,
    "confirm_datetime": null
  },
  {
    "oapp_id": 1083138,
    "send_datetime": "2023-12-26 13:06:30",
    "send_status": "Y",
    "app_ok": "Y",
    "line_ok": "Y",
    "rt_send_datetime": null,
    "rt_send_status": null,
    "rt_app_ok": null,
    "rt_line_ok": null,
    "send_d5_datetime": null,
    "send_d5_status": null,
    "send_d5_app_ok": null,
    "send_d5_line_ok": null,
    "wait_confirm": null,
    "confirm_ok": null,
    "confirm_datetime": null
  },
  {
    "oapp_id": 1066857,
    "send_datetime": "2024-01-12 14:21:18",
    "send_status": "Y",
    "app_ok": "Y",
    "line_ok": "Y",
    "rt_send_datetime": null,
    "rt_send_status": null,
    "rt_app_ok": null,
    "rt_line_ok": null,
    "send_d5_datetime": null,
    "send_d5_status": null,
    "send_d5_app_ok": null,
    "send_d5_line_ok": null,
    "wait_confirm": null,
    "confirm_ok": null,
    "confirm_datetime": null
  }
]
```
