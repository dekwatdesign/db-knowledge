# `nutri_consult_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_status_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_status_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nutri_consult_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "nutri_consult_status_id": 1,
    "nutri_consult_status_name": "รอการดำเนินการ"
  },
  {
    "nutri_consult_status_id": 2,
    "nutri_consult_status_name": "กำลังดำเนินการ"
  },
  {
    "nutri_consult_status_id": 3,
    "nutri_consult_status_name": "ดำเนินการเสร็จแล้ว"
  },
  {
    "nutri_consult_status_id": 4,
    "nutri_consult_status_name": "ปฏิเสธการบริการ"
  },
  {
    "nutri_consult_status_id": 5,
    "nutri_consult_status_name": "ยกเลิกการบริการ"
  }
]
```
