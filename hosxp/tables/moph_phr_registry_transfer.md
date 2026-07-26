# `moph_phr_registry_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid_key | varchar(16) | NO | PRI |  |  |  |
| transfer_status | char(1) | YES |  | NULL |  |  |
| transfer_warning | text | YES |  | NULL |  |  |
| transfer_datetime | datetime | YES |  | NULL |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| xkey | varchar(2) | YES |  | NULL |  |  |
| message_code | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_key | cid | no | 1 |
| ix_cid_key | xkey | no | 2 |
| ix_cid_key_status | cid | no | 1 |
| ix_cid_key_status | xkey | no | 2 |
| ix_cid_key_status | transfer_status | no | 3 |
| ix_cid_key_status_index | cid | no | 1 |
| ix_cid_key_status_index | transfer_status | no | 2 |
| ix_cid_key_status_index | xkey | no | 3 |
| PRIMARY | cid_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cid_key": "0119889000228:A",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:36:10",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "A",
    "message_code": 200
  },
  {
    "cid_key": "0119889000368:A",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:36:53",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "A",
    "message_code": 200
  },
  {
    "cid_key": "1100704687094:D",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:37:28",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "D",
    "message_code": 200
  },
  {
    "cid_key": "1101501511120:D",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:37:31",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "D",
    "message_code": 200
  },
  {
    "cid_key": "1101501521435:D",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:37:32",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "D",
    "message_code": 200
  },
  {
    "cid_key": "1110200131807:D",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:37:33",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "D",
    "message_code": 200
  },
  {
    "cid_key": "0119889000376:A",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:37:46",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "A",
    "message_code": 200
  },
  {
    "cid_key": "1110200188345:D",
    "transfer_status": "Y",
    "transfer_warning": "OK",
    "transfer_datetime": "2026-06-12 17:38:11",
    "cid": "1xxxxxxxxxxxx",
    "xkey": "D",
    "message_code": 200
  }
]
```
