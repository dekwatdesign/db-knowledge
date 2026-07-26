# `ckup_visit_status_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_visit_status_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_visit_status_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_visit_status_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ckup_visit_status_type_id": 1,
    "ckup_visit_status_type_name": "รอตรวจ"
  },
  {
    "ckup_visit_status_type_id": 2,
    "ckup_visit_status_type_name": "กำลังตรวจ"
  },
  {
    "ckup_visit_status_type_id": 3,
    "ckup_visit_status_type_name": "ตรวจแล้ว"
  },
  {
    "ckup_visit_status_type_id": 4,
    "ckup_visit_status_type_name": "รอผล"
  },
  {
    "ckup_visit_status_type_id": 5,
    "ckup_visit_status_type_name": "รายงานผล"
  }
]
```
