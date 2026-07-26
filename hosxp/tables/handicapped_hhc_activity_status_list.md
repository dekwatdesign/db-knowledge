# `handicapped_hhc_activity_status_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_activity_status_list_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_activity_status_list_name | char(50) | YES |  | NULL |  |  |
| handicapped_hhc_activity_status_list_status | char(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_activity_status_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_hhc_activity_status_list_id": 1,
    "handicapped_hhc_activity_status_list_name": "ถูกต้อง",
    "handicapped_hhc_activity_status_list_status": "Y",
    "hos_guid": null
  },
  {
    "handicapped_hhc_activity_status_list_id": 2,
    "handicapped_hhc_activity_status_list_name": "ไม่ถูกต้อง",
    "handicapped_hhc_activity_status_list_status": "N",
    "hos_guid": null
  }
]
```
