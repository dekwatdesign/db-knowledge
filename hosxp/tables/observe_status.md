# `observe_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| observe_status | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| ovstost | varchar(2) | YES |  | NULL |  |  |
| er_dch_type | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | observe_status | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "observe_status": 1,
    "name": "สังเกตุอาการ",
    "ovstost": null,
    "er_dch_type": null,
    "hos_guid": null
  },
  {
    "observe_status": 2,
    "name": "กลับบ้าน",
    "ovstost": null,
    "er_dch_type": null,
    "hos_guid": null
  },
  {
    "observe_status": 3,
    "name": "Admit",
    "ovstost": null,
    "er_dch_type": null,
    "hos_guid": null
  }
]
```
