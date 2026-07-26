# `referout_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| referout_status_id | int(11) | NO | PRI | 0 |  |  |
| referout_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_referout_status_name | referout_status_name | yes | 1 |
| PRIMARY | referout_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "referout_status_id": 1,
    "referout_status_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "referout_status_id": 2,
    "referout_status_name": "หาย",
    "hos_guid": null
  },
  {
    "referout_status_id": 3,
    "referout_status_name": "ยังรักษาตัวอยู่",
    "hos_guid": null
  }
]
```
