# `opduser_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opduser_right_id | int(11) | NO | PRI | 0 |  |  |
| loginname | varchar(50) | YES | MUL | NULL |  |  |
| accessname | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_loginname | loginname | no | 1 |
| PRIMARY | opduser_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opduser_right_id": 4019,
    "loginname": "chatchawal",
    "accessname": "Administrator",
    "hos_guid": null
  },
  {
    "opduser_right_id": 4648,
    "loginname": "Sineenart",
    "accessname": "Administrator",
    "hos_guid": null
  },
  {
    "opduser_right_id": 6041,
    "loginname": "Sineenart",
    "accessname": "Administrator",
    "hos_guid": null
  },
  {
    "opduser_right_id": 13991,
    "loginname": "chatchawal",
    "accessname": "Administrator",
    "hos_guid": null
  },
  {
    "opduser_right_id": 16101,
    "loginname": "bms",
    "accessname": "Access_SYS_REPORT",
    "hos_guid": null
  },
  {
    "opduser_right_id": 16102,
    "loginname": "bms",
    "accessname": "Access_View_EMR",
    "hos_guid": null
  },
  {
    "opduser_right_id": 16103,
    "loginname": "bms",
    "accessname": "Access_VIEW_LAB",
    "hos_guid": null
  },
  {
    "opduser_right_id": 16104,
    "loginname": "bms",
    "accessname": "Access_VIEW_PATIENT_REAL_NAME",
    "hos_guid": null
  }
]
```
