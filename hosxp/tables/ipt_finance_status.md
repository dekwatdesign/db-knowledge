# `ipt_finance_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| finance_status | int(11) | YES |  | NULL |  |  |
| request_staff | varchar(100) | YES |  | NULL |  |  |
| process_staff | varchar(100) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000786",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000787",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000788",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000789",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000791",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000792",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000793",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "540000794",
    "finance_status": 1,
    "request_staff": null,
    "process_staff": null,
    "update_datetime": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
