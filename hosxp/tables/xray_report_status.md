# `xray_report_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_status_id | int(11) | NO | PRI | 0 |  |  |
| xray_report_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xray_report_status_name | xray_report_status_name | yes | 1 |
| PRIMARY | xray_report_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "xray_report_status_id": 1,
    "xray_report_status_name": "ใช้งานได้"
  },
  {
    "xray_report_status_id": 2,
    "xray_report_status_name": "ยกเลิกการใช้งาน"
  }
]
```
