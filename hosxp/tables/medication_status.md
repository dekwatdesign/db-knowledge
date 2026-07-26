# `medication_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_status_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | medication_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "medication_status_id": 1,
    "name": "Active",
    "hos_guid": null
  },
  {
    "medication_status_id": 2,
    "name": "Off",
    "hos_guid": null
  },
  {
    "medication_status_id": 3,
    "name": "Pending",
    "hos_guid": null
  }
]
```
