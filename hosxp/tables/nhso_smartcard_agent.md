# `nhso_smartcard_agent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_smartcard_agent_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| pid | varchar(13) | YES | MUL | NULL |  |  |
| claim_type | varchar(100) | YES |  | NULL |  |  |
| correlationid | varchar(150) | YES |  | NULL |  |  |
| created_datetime | datetime | YES |  | NULL |  |  |
| claim_code | varchar(100) | YES |  | NULL |  |  |
| api_read_smartcard_response | text | YES |  | NULL |  |  |
| api_confirm_save_response | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_pid | pid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | nhso_smartcard_agent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_smartcard_agent_id": 3,
    "vn": "670401090030",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 08:52:11",
    "claim_code": "PP1408128290",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 4,
    "vn": "670401093032",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 08:53:30",
    "claim_code": "PP1408123866",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 5,
    "vn": "670401093010",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 08:55:03",
    "claim_code": "PP1408137519",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 6,
    "vn": "670401093010",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 08:56:35",
    "claim_code": "PP1408137519",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 7,
    "vn": "670401083026",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 08:58:20",
    "claim_code": "PP1408146166",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 8,
    "vn": "670401100020",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 09:00:39",
    "claim_code": "PP1408152413",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 9,
    "vn": "670401093036",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 09:02:30",
    "claim_code": "PP1408157586",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  },
  {
    "nhso_smartcard_agent_id": 10,
    "vn": "670401085242",
    "an": "",
    "pid": "1xxxxxxxxxxxx",
    "claim_type": "PG0060001",
    "correlationid": null,
    "created_datetime": "2024-04-01 09:02:52",
    "claim_code": "PP1408158631",
    "api_read_smartcard_response": null,
    "api_confirm_save_response": null
  }
]
```
