# `handicapped_status_diag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_status_diag_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_status_diag_name | char(50) | YES |  | NULL |  |  |
| handicapped_status_diag_status | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_status_diag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_status_diag_id": 1,
    "handicapped_status_diag_name": "มีความบกพร่อง",
    "handicapped_status_diag_status": "Y",
    "hos_guid": null
  },
  {
    "handicapped_status_diag_id": 2,
    "handicapped_status_diag_name": "ไม่มีความบกพร่อง",
    "handicapped_status_diag_status": "N",
    "hos_guid": null
  }
]
```
