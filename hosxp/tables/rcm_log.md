# `rcm_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| host | varchar(60) | NO | PRI |  |  |  |
| report_datetime | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| detail | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | host | yes | 1 |
| PRIMARY | report_datetime | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:20:21",
    "detail": "Restore Query"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:21:46",
    "detail": "2.1.1.1.รายชื่อลูกหนี้ผู้รับบริการผู้ป่วยนอก เลือกตามสิทธิ HOSxP"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:24:35",
    "detail": "1.1.1.Mapping สิทธิการเงินกับสิทธิสถานบริการ"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:36:48",
    "detail": "1.1.2.Mapping ผังบัญชีลูกหนี้กระทรวงสาธารณสุข"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:37:07",
    "detail": "1.1.2.1.นำเข้ารหัสผังบัญชีกระทรวงสาธารณสุข"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:37:15",
    "detail": "1.1.3.สรุป Mapping สิทธฺิการรักษา"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:37:51",
    "detail": "3.4.โปรแกรมนำเข้าข้อมูลสถานะ NewEClaim on Web"
  },
  {
    "host": "192.168.10.9",
    "report_datetime": "2023-09-21 15:38:19",
    "detail": "2.9.1.รายงานสรุปยอดบริการผู้ป่วยนอก แยกรายวัน"
  }
]
```
