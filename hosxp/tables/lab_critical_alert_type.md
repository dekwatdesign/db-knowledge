# `lab_critical_alert_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_critical_alert_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_critical_alert_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_critical_alert_type_name | lab_critical_alert_type_name | yes | 1 |
| PRIMARY | lab_critical_alert_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "lab_critical_alert_type_id": 1,
    "lab_critical_alert_type_name": "แจ้งเตือนเมื่อผล อยู่ในช่วงที่กำหนด"
  },
  {
    "lab_critical_alert_type_id": 2,
    "lab_critical_alert_type_name": "แจ้งเตือนเมื่อผล ไม่อยู่ในช่วงที่กำหนด"
  }
]
```
