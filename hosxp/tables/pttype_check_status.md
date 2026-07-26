# `pttype_check_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_check_status_id | int(11) | NO | PRI | 0 |  |  |
| pttype_check_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_check_status_name | pttype_check_status_name | yes | 1 |
| PRIMARY | pttype_check_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "pttype_check_status_id": 1,
    "pttype_check_status_name": "ตรวจสอบแล้ว"
  },
  {
    "pttype_check_status_id": 2,
    "pttype_check_status_name": "ยังไม่ตรวจสอบ"
  },
  {
    "pttype_check_status_id": 3,
    "pttype_check_status_name": "รอตรวจเอกสาร"
  }
]
```
