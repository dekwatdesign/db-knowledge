# `operation_emergency`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emergency_id | int(11) | NO | PRI | 0 |  |  |
| emergency_name | varchar(150) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| notify_line_token | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| emergency_name | emergency_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | emergency_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emergency_id": 1,
    "emergency_name": "Emergency",
    "hos_guid": null,
    "notify_line_token": null
  },
  {
    "emergency_id": 2,
    "emergency_name": "Elective",
    "hos_guid": null,
    "notify_line_token": null
  }
]
```
