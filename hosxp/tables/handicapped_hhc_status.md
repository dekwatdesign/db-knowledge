# `handicapped_hhc_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_status_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_status_name | char(50) | YES |  | NULL |  |  |
| handicapped_hhc_status_status | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_hhc_status_id": 1,
    "handicapped_hhc_status_name": "อยู่ระหว่างติดตามเยี่ยมบ้าน",
    "handicapped_hhc_status_status": "Y",
    "hos_guid": null
  },
  {
    "handicapped_hhc_status_id": 2,
    "handicapped_hhc_status_name": "สิ้นสุดการติดตามเยี่ยมบ้าน",
    "handicapped_hhc_status_status": "N",
    "hos_guid": null
  }
]
```
