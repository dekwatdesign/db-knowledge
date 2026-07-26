# `grecord_org_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LOCATION_ID | int | NO | PRI | NULL | auto_increment |  |
| LOCATION_ORG_NAME | varchar(100) | YES |  |  |  |  |
| LOCATION_PHONE | varchar(100) | YES |  |  |  |  |
| LOCATION_EMAIL | varchar(100) | YES |  |  |  |  |
| LOCATION_ADDRESS | varchar(200) | YES |  |  |  |  |
| LOCATION_WEBSITE | varchar(100) | YES |  |  |  |  |
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
    "LOCATION_ORG_NAME": "[MASKED_FULLNAME]",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2020-10-01 07:47:30",
    "created_at": "2020-10-01 07:47:30"
  },
  {
    "LOCATION_ID": 2,
    "LOCATION_ORG_NAME": "โรงแรงอมารี ดอนเมือง รีพอร์ต",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2021-11-25 15:58:57",
    "created_at": "2021-11-25 15:58:57"
  },
  {
    "LOCATION_ID": 3,
    "LOCATION_ORG_NAME": "กรมสุขภาพจิต",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-01-17 11:59:48",
    "created_at": "2022-01-17 11:59:48"
  },
  {
    "LOCATION_ID": 4,
    "LOCATION_ORG_NAME": "บ้านเลขที่ 32/74 หมู่บ้านทิพย์วารี ถ.ฉลองกรุง แขวง ลำผักชี เขต หนองจอก กรุงเทพ",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-01-20 16:28:14",
    "created_at": "2022-01-20 16:28:14"
  },
  {
    "LOCATION_ID": 5,
    "LOCATION_ORG_NAME": "ศูนย์ราชการฯ",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-01-28 09:17:48",
    "created_at": "2022-01-28 09:17:48"
  },
  {
    "LOCATION_ID": 6,
    "LOCATION_ORG_NAME": "โรงแรมทีเค พาเลซ แอนด์ คอนเวนชั่น",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-02-14 09:41:59",
    "created_at": "2022-02-14 09:41:59"
  },
  {
    "LOCATION_ID": 7,
    "LOCATION_ORG_NAME": "หมู่บ้านชวนชื่นพาร์ควิลล์ เขต ทวีวีวัฒนา",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-02-22 10:25:12",
    "created_at": "2022-02-22 10:25:12"
  },
  {
    "LOCATION_ID": 8,
    "LOCATION_ORG_NAME": "43 หมู่ที่ 19 ถนนบางพลี-ตำหรุ  ตำบลบางพลีใหญ่  อำเภอบางพลี จังหวัดสมุทรปราการ 10540 เบอร์โทรศัพท์ 02",
    "LOCATION_PHONE": "",
    "LOCATION_EMAIL": "",
    "LOCATION_ADDRESS": "",
    "LOCATION_WEBSITE": "",
    "updated_at": "2022-03-11 15:07:36",
    "created_at": "2022-03-11 15:07:36"
  }
]
```
