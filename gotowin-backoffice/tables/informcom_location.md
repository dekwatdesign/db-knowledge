# `informcom_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LOCATION_ID | int | NO | PRI | NULL | auto_increment |  |
| LOCATION_NAME | varchar(255) | YES |  |  |  |  |
| BUILDING_ID | varchar(10) | YES |  |  |  |  |
| CLASS | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LOCATION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LOCATION_ID": 1,
    "LOCATION_NAME": "ห้องเวชระเบียน/ตรวจสอบสิทธิ ชั้น 1",
    "BUILDING_ID": "1",
    "CLASS": "101",
    "updated_at": "2020-10-07 09:17:00",
    "created_at": "2020-10-07 09:16:00"
  },
  {
    "LOCATION_ID": 2,
    "LOCATION_NAME": "ห้องเก็บเงินผู้ป่วยนอก ชั้น 1",
    "BUILDING_ID": "1",
    "CLASS": "102",
    "updated_at": "2020-10-07 09:16:00",
    "created_at": "2020-10-07 09:16:00"
  },
  {
    "LOCATION_ID": 3,
    "LOCATION_NAME": "ห้องจ่ายยาผู้ป่วยนอก ชั้น 1",
    "BUILDING_ID": "1",
    "CLASS": "103",
    "updated_at": "2020-10-07 09:17:00",
    "created_at": "2020-10-07 09:17:00"
  },
  {
    "LOCATION_ID": 4,
    "LOCATION_NAME": "ห้องกลุ่มงานเภสัชกรรม",
    "BUILDING_ID": "1",
    "CLASS": "104",
    "updated_at": "2020-10-07 09:17:00",
    "created_at": "2020-10-07 09:17:00"
  },
  {
    "LOCATION_ID": 5,
    "LOCATION_NAME": "ห้องจัดยาผู้ป่วย ชั้น 1",
    "BUILDING_ID": "1",
    "CLASS": "105",
    "updated_at": "2020-10-07 09:18:00",
    "created_at": "2020-10-07 09:18:00"
  },
  {
    "LOCATION_ID": 6,
    "LOCATION_NAME": "เคาร์เตอร์คัดกรอง 1 (ผู้ป่วยเก่า)",
    "BUILDING_ID": "1",
    "CLASS": "106",
    "updated_at": "2020-10-07 09:24:00",
    "created_at": "2020-10-07 09:19:00"
  },
  {
    "LOCATION_ID": 7,
    "LOCATION_NAME": "เคาร์เตอร์คัดกรอง 2 (ผู้ป่วยใหม่)",
    "BUILDING_ID": "1",
    "CLASS": "107",
    "updated_at": "2020-10-07 09:24:00",
    "created_at": "2020-10-07 09:20:00"
  },
  {
    "LOCATION_ID": 8,
    "LOCATION_NAME": "เคาร์เตอร์คัดกรอง 2 (รับยาเดิม)",
    "BUILDING_ID": "1",
    "CLASS": "108",
    "updated_at": "2020-10-07 09:24:00",
    "created_at": "2020-10-07 09:20:00"
  }
]
```
