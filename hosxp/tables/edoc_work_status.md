# `edoc_work_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_work_status_id | int(11) | NO | PRI | 0 |  |  |
| edoc_work_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_work_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "edoc_work_status_id": 1,
    "edoc_work_status_name": "รอดำเนินการ"
  },
  {
    "edoc_work_status_id": 2,
    "edoc_work_status_name": "กำลังดำเนินการ"
  },
  {
    "edoc_work_status_id": 3,
    "edoc_work_status_name": "ดำเนินการเสร็จแล้ว"
  },
  {
    "edoc_work_status_id": 4,
    "edoc_work_status_name": "ยกเลิกการดำเนินการ"
  }
]
```
