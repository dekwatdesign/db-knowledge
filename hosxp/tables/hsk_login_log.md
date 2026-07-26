# `hsk_login_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| l_id | int(10) | NO | PRI | 0 |  |  |
| login_sse | varchar(50) | NO | PRI |  |  |  |
| u_id | varchar(50) | YES | MUL | NULL |  |  |
| login_type | varchar(50) | YES | MUL | NULL |  |  |
| date_d | date | YES | MUL | NULL |  |  |
| time_in | time | YES |  | NULL |  |  |
| time_out | time | YES |  | NULL |  |  |
| ip_p | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| date_d | date_d | no | 1 |
| login_sse | login_sse | no | 1 |
| login_type | login_type | no | 1 |
| PRIMARY | l_id | yes | 1 |
| PRIMARY | login_sse | yes | 2 |
| u_id | u_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "l_id": 294010,
    "login_sse": "",
    "u_id": "",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:35:20",
    "time_out": null,
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294011,
    "login_sse": "",
    "u_id": "",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:35:29",
    "time_out": null,
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294012,
    "login_sse": "",
    "u_id": "",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:36:46",
    "time_out": null,
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294013,
    "login_sse": "ibvmatac48l4iur9ai1j12lmg4",
    "u_id": "306",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:39:53",
    "time_out": null,
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294014,
    "login_sse": "ibvmatac48l4iur9ai1j12lmg4",
    "u_id": "306",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:47:45",
    "time_out": "17:00:05",
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294015,
    "login_sse": "q0kj5m9s7107j9hr0ipd7do711",
    "u_id": "187",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "16:55:36",
    "time_out": null,
    "ip_p": "192.168.10.9"
  },
  {
    "l_id": 294016,
    "login_sse": "ibvmatac48l4iur9ai1j12lmg4",
    "u_id": "306",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "17:00:10",
    "time_out": "17:21:54",
    "ip_p": "192.168.10.1"
  },
  {
    "l_id": 294017,
    "login_sse": "",
    "u_id": "",
    "login_type": "Desktop",
    "date_d": "2024-08-20",
    "time_in": "17:24:50",
    "time_out": null,
    "ip_p": "192.168.10.1"
  }
]
```
