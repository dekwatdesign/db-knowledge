# `handicapped_hhc_activity_type_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_activity_type_status_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_activity_type_status_name | char(255) | YES |  | NULL |  |  |
| handicapped_hhc_activity_type_status_status | char(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_activity_type_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_hhc_activity_type_status_id": 1,
    "handicapped_hhc_activity_type_status_name": "ถูกต้อง",
    "handicapped_hhc_activity_type_status_status": "Y",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_type_status_id": 2,
    "handicapped_hhc_activity_type_status_name": "ไม่ถูกต้อง",
    "handicapped_hhc_activity_type_status_status": "N",
    "hos_guid": null
  }
]
```
