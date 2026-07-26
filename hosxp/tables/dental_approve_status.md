# `dental_approve_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_approve_status_id | int(11) | NO | PRI | 0 |  |  |
| dental_approve_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_approve_status_name | dental_approve_status_name | yes | 1 |
| PRIMARY | dental_approve_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dental_approve_status_id": 3,
    "dental_approve_status_name": "ไม่อนุมัติ"
  },
  {
    "dental_approve_status_id": 1,
    "dental_approve_status_name": "รออนุมัติ"
  },
  {
    "dental_approve_status_id": 2,
    "dental_approve_status_name": "อนุมัติ"
  }
]
```
