# `accessoperation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| accessname | varchar(50) | NO | PRI |  |  |  |
| rightname | varchar(50) | YES | MUL | NULL |  |  |
| level_check | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_rightname | rightname | no | 1 |
| PRIMARY | accessname | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "accessname": "Access_ACCESS_REPORT_FROM_MASTER",
    "rightname": "ACCESS_REPORT_FROM_MASTER",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_ACCOUNT_AR",
    "rightname": "ACCOUNT_AR",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_ADMIN",
    "rightname": "ADMIN",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_ADR_REPORT",
    "rightname": "ADR_REPORT",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_AIDS_CLINIC",
    "rightname": "AIDS_CLINIC",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_ANC1",
    "rightname": "ANC1",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_APPOINTMENT",
    "rightname": "APPOINTMENT",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "accessname": "Access_APPOINTMENT_PENDING_",
    "rightname": "APPOINTMENT_PENDING_",
    "level_check": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
