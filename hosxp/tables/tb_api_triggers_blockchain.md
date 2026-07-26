# `tb_api_triggers_blockchain`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(255) | NO | PRI |  |  |  |
| hn | varchar(255) | YES | MUL | NULL |  |  |
| an | varchar(255) | YES | MUL | NULL |  |  |
| triggers_id | varchar(50) | YES | MUL | NULL |  |  |
| modul_name | varchar(50) | YES |  | NULL |  |  |
| modul_event | varchar(50) | YES |  | NULL |  |  |
| triggers_datetime | datetime | YES |  | NULL |  |  |
| triggers_send_priority | int(2) | YES |  | NULL |  |  |
| triggers_send_status | char(2) | YES |  | NULL |  |  |
| triggers_send_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | vn | yes | 1 |
| triggers_id | triggers_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "250112144831",
    "hn": "600000969",
    "an": "",
    "triggers_id": "{166CF9D1-72B3-11EC-9B1B-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-01-11 07:39:14",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2022-01-11 07:39:15"
  },
  {
    "vn": "250303141404",
    "hn": "650003885",
    "an": "",
    "triggers_id": "{E2E0CBEE-A10A-11EC-8891-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-03-13 08:35:28",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2022-03-13 09:41:52"
  },
  {
    "vn": "250401134807",
    "hn": "570000118",
    "an": "",
    "triggers_id": "{B09585D0-B0BE-11EC-9875-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-03-31 13:50:28",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2022-03-31 14:42:42"
  },
  {
    "vn": "250401135317",
    "hn": "590001393",
    "an": "",
    "triggers_id": "{5B440965-B0BF-11EC-9875-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-03-31 13:55:14",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2022-03-31 14:47:29"
  },
  {
    "vn": "250401140652",
    "hn": "570001264",
    "an": "",
    "triggers_id": "{4925FA22-B0C1-11EC-9875-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-03-31 14:09:05",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2022-03-31 15:01:21"
  },
  {
    "vn": "250819144146",
    "hn": "610001663",
    "an": "",
    "triggers_id": "{74FBD127-E126-11EA-B156-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2020-09-17 23:16:38",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2020-09-18 00:08:16"
  },
  {
    "vn": "250819144402",
    "hn": "590001377",
    "an": "",
    "triggers_id": "{AC4CA2D6-E126-11EA-B156-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2020-09-17 23:16:54",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2020-09-18 00:08:32"
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "hn": "530118250",
    "an": "",
    "triggers_id": "{3A72441A-8C69-11EB-BBF7-5CF3FC2C7D4F}",
    "modul_name": "VisitUpdateData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-03-30 11:26:33",
    "triggers_send_priority": 2,
    "triggers_send_status": "Y",
    "triggers_send_datetime": "2021-03-30 12:31:41"
  }
]
```
