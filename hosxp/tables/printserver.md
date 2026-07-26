# `printserver`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| server_name | varchar(25) | NO | PRI |  |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| last_online | datetime | YES |  | NULL |  |  |
| loginname | varchar(25) | YES |  | NULL |  |  |
| print_mode | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| server_location | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | server_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "server_name": "DCS-A54-0089",
    "computer_name": "A54-0089",
    "last_online": "2019-11-14 12:04:04",
    "loginname": "yuwa237",
    "print_mode": "DOCUMENT",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "DESKTOP-6QJ8O8N",
    "computer_name": "DESKTOP-6QJ8O8N",
    "last_online": "2023-11-27 16:21:12",
    "loginname": "YUWA025",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "IPD",
    "computer_name": "A54-0049",
    "last_online": "2026-01-12 15:58:35",
    "loginname": "yuwa335",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "IPD1",
    "computer_name": "MED01-PC",
    "last_online": "2025-11-14 16:58:57",
    "loginname": "yuwa206",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "IPD5",
    "computer_name": "NOTEBOOK",
    "last_online": "2011-11-01 15:49:35",
    "loginname": "bms",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "IPD6",
    "computer_name": "DESKTOP-6QJ8O8N",
    "last_online": "2023-04-26 11:05:32",
    "loginname": "yuwa028",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "OPD",
    "computer_name": "DESKTOP-6QJ8O8N",
    "last_online": "2026-06-02 15:57:59",
    "loginname": "yuwa206",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  },
  {
    "server_name": "OPD1",
    "computer_name": "MED01-PC",
    "last_online": "2026-06-02 14:37:22",
    "loginname": "yuwa206",
    "print_mode": "STICKER",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hospital_department_id": null,
    "server_location": null
  }
]
```
