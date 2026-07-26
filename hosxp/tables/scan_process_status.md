# `scan_process_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| scan_process_status_id | int(11) | NO | PRI | 0 |  |  |
| scan_process_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_scan_process_status_name | scan_process_status_name | yes | 1 |
| PRIMARY | scan_process_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "scan_process_status_id": 1,
    "scan_process_status_name": "คัดกรองแล้ว"
  },
  {
    "scan_process_status_id": 2,
    "scan_process_status_name": "บันทึกข้อมูลแล้ว"
  },
  {
    "scan_process_status_id": 3,
    "scan_process_status_name": "ตรวจสอบแล้ว"
  }
]
```
