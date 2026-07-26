# `ward_pc_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer_name | varchar(150) | NO | PRI |  |  |  |
| ip_address | varchar(200) | YES |  | NULL |  |  |
| last_agent_active | datetime | YES | MUL | NULL |  |  |
| current_ward_code | varchar(10) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_last_agent_active | last_agent_active | no | 1 |
| ix_ward | current_ward_code | no | 1 |
| PRIMARY | computer_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer_name": "",
    "ip_address": "",
    "last_agent_active": "2026-07-09 12:37:29",
    "current_ward_code": "07",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0049",
    "ip_address": "192.168.1.91",
    "last_agent_active": "2026-07-22 12:00:57",
    "current_ward_code": "08",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0062",
    "ip_address": "192.168.1.113",
    "last_agent_active": "2024-07-16 10:51:58",
    "current_ward_code": "04",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0078",
    "ip_address": "192.168.10.17",
    "last_agent_active": "2025-10-17 09:11:48",
    "current_ward_code": "01",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0079",
    "ip_address": "192.168.1.15",
    "last_agent_active": "2024-04-29 15:33:57",
    "current_ward_code": "03",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0080",
    "ip_address": "192.168.1.17",
    "last_agent_active": "2026-01-23 08:16:47",
    "current_ward_code": "02",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0082",
    "ip_address": "192.168.1.51",
    "last_agent_active": "2026-03-10 15:44:16",
    "current_ward_code": "08",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer_name": "A54-0096",
    "ip_address": "192.168.1.142",
    "last_agent_active": "2021-12-24 11:08:49",
    "current_ward_code": "04",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
