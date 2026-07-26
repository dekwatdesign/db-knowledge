# `person_card_request_approve_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| approve_status_id | int(11) | NO | PRI | 0 |  |  |
| approve_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_card_request_approve_status_approve_status_name_key | approve_status_name | yes | 1 |
| PRIMARY | approve_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "approve_status_id": 0,
    "approve_status_name": "รอดำเนินการ",
    "hos_guid": null
  },
  {
    "approve_status_id": 1,
    "approve_status_name": "นำเรื่องไปดำเนินการแล้ว",
    "hos_guid": null
  },
  {
    "approve_status_id": 2,
    "approve_status_name": "ตรวจสอบข้อมูลแล้วส่งมาใหม่",
    "hos_guid": null
  },
  {
    "approve_status_id": 3,
    "approve_status_name": "ไม่ผ่านการพิจารณา",
    "hos_guid": null
  }
]
```
