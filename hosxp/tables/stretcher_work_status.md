# `stretcher_work_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_work_status_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_work_status_name | varchar(150) | YES |  | NULL |  |  |
| stretcher_work_status_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stretcher_work_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "stretcher_work_status_id": 1,
    "stretcher_work_status_name": "ขอเปล",
    "stretcher_work_status_active": "Y"
  },
  {
    "stretcher_work_status_id": 2,
    "stretcher_work_status_name": "รับงาน",
    "stretcher_work_status_active": "Y"
  },
  {
    "stretcher_work_status_id": 3,
    "stretcher_work_status_name": "ส่งผู้ป่วย",
    "stretcher_work_status_active": "Y"
  },
  {
    "stretcher_work_status_id": 4,
    "stretcher_work_status_name": "ดำเนินการเรียบร้อย",
    "stretcher_work_status_active": "Y"
  },
  {
    "stretcher_work_status_id": 5,
    "stretcher_work_status_name": "อื่นๆ",
    "stretcher_work_status_active": "Y"
  }
]
```
