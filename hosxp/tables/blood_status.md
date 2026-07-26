# `blood_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blood_status_id | int(11) | NO | PRI | 0 |  |  |
| blood_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blood_status_name | blood_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | blood_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "blood_status_id": 1,
    "blood_status_name": "รอการจัดส่ง",
    "hos_guid": null
  },
  {
    "blood_status_id": 2,
    "blood_status_name": "ส่งแล้ว",
    "hos_guid": null
  },
  {
    "blood_status_id": 3,
    "blood_status_name": "รายการถูกยกเลิก",
    "hos_guid": null
  }
]
```
