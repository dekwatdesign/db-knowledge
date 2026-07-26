# `report_right`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_right_id | int(11) | NO | PRI | 0 |  |  |
| report_right_name | varchar(150) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_report_right_name | report_right_name | yes | 1 |
| PRIMARY | report_right_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "report_right_id": 20,
    "report_right_name": "Datacenter web report"
  },
  {
    "report_right_id": 1,
    "report_right_name": "กำหนดค่าการเชื่อมต่อฐานข้อมูล"
  },
  {
    "report_right_id": 2,
    "report_right_name": "กำหนดค่าผู้ใช้งานระบบ"
  },
  {
    "report_right_id": 11,
    "report_right_name": "เข้าใช้งานระบบ SQL Query"
  },
  {
    "report_right_id": 9,
    "report_right_name": "เข้าใช้ระบบสำนักงาน Refer - Home health care"
  },
  {
    "report_right_id": 5,
    "report_right_name": "เข้าใช้ระบบสำนักงานประกันสุขภาพ"
  },
  {
    "report_right_id": 6,
    "report_right_name": "เข้าใช้ระบบสำนักงานระบาดวิทยา"
  },
  {
    "report_right_id": 17,
    "report_right_name": "เข้าถึง EMR - ข้อมูลการรักษาตัวผู้ป่วยใน"
  }
]
```
