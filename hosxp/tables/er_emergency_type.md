# `er_emergency_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_emergency_type | tinyint(4) | NO | PRI | 0 |  |  |
| name | varchar(50) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| export_code | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | er_emergency_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "er_emergency_type": 1,
    "name": "Resuscitate",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1"
  },
  {
    "er_emergency_type": 2,
    "name": "Emergency",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "2"
  },
  {
    "er_emergency_type": 3,
    "name": "Urgency",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "3"
  },
  {
    "er_emergency_type": 4,
    "name": "Semi Urgency",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "4"
  },
  {
    "er_emergency_type": 5,
    "name": "Non Urgency",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "5"
  }
]
```
