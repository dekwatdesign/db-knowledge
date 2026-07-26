# `rvp_dead_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_dead_status_id | int(11) | NO | PRI | 0 |  |  |
| rvp_dead_status_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_dead_status_name | rvp_dead_status_name | yes | 1 |
| PRIMARY | rvp_dead_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "rvp_dead_status_id": 1,
    "rvp_dead_status_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "rvp_dead_status_id": 2,
    "rvp_dead_status_name": "บาดเจ็บ",
    "hos_guid": null
  }
]
```
