# `hsk_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code_report | varchar(10) | NO | PRI |  |  |  |
| name_report | varchar(100) | YES |  | NULL |  |  |
| report_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | code_report | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "code_report": "R0001",
    "name_report": "รายงาน Readmit 28/90/180 วัน",
    "report_status": "Y"
  },
  {
    "code_report": "R0002",
    "name_report": "รายงาน Full Remission แสดงรายชื่อ",
    "report_status": "Y"
  },
  {
    "code_report": "R0003",
    "name_report": "รายงาน ผู้ป่วยจำหน่วย/วันนอน",
    "report_status": "Y"
  },
  {
    "code_report": "R0004",
    "name_report": "รายงาน ผู้ป่วยโรคจิตเภทได้รับการรักษาต่อเนื่องภายใน 6 เดือน F20.x",
    "report_status": "Y"
  },
  {
    "code_report": "R0005",
    "name_report": "รายงาน 10 อันวินิจฉัยผู้ป่วยใน แยกราย ward",
    "report_status": "Y"
  },
  {
    "code_report": "R0006",
    "name_report": "รายงานผู้ป่วยรับใหม่-จำหน่วย  แยกราย ward",
    "report_status": "Y"
  }
]
```
