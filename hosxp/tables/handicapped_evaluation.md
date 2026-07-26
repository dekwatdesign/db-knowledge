# `handicapped_evaluation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_evaluation_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_evaluation_name | char(50) | YES |  | NULL |  |  |
| handicapped_evaluation_status | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_evaluation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_evaluation_id": 1,
    "handicapped_evaluation_name": "บกพร่อง",
    "handicapped_evaluation_status": "Y",
    "hos_guid": null
  },
  {
    "handicapped_evaluation_id": 2,
    "handicapped_evaluation_name": "ไม่บกพร่อง",
    "handicapped_evaluation_status": "N",
    "hos_guid": null
  }
]
```
