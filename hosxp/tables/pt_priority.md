# `pt_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| priority_code | varchar(5) | YES |  | NULL |  |  |
| qs_slot_prefix | char(1) | YES |  | NULL |  |  |
| er_priority_color | int(11) | YES |  | NULL |  |  |
| hl7_act_priority | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "id": 0,
    "name": "ปกติ",
    "hos_guid": null,
    "priority_code": "0",
    "qs_slot_prefix": null,
    "er_priority_color": null,
    "hl7_act_priority": null
  },
  {
    "id": 1,
    "name": "มาก",
    "hos_guid": null,
    "priority_code": "1",
    "qs_slot_prefix": null,
    "er_priority_color": null,
    "hl7_act_priority": null
  },
  {
    "id": 2,
    "name": "มากที่สุด",
    "hos_guid": null,
    "priority_code": "2",
    "qs_slot_prefix": null,
    "er_priority_color": null,
    "hl7_act_priority": null
  }
]
```
