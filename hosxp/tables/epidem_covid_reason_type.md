# `epidem_covid_reason_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| epidem_covid_reason_type_id | int(11) | NO | PRI | 0 |  |  |
| epidem_covid_reason_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | epidem_covid_reason_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "epidem_covid_reason_type_id": 1,
    "epidem_covid_reason_type_name": "เข้าเกณฑ์ PUI (ยกเว้นกรณีสัมผัสผู้ติดเชื้อยืนยัน)"
  },
  {
    "epidem_covid_reason_type_id": 2,
    "epidem_covid_reason_type_name": "มาตรวจด้วยประวัติสัมผัสผู้ติดเชื้อในครอบครัว/ร่วมบ้าน"
  },
  {
    "epidem_covid_reason_type_id": 3,
    "epidem_covid_reason_type_name": "มาตรวจด้วยประวัติสัมผัสผู้ติดเชื้อนอกครอบครัว/ที่ทำงาน/ชุมชน"
  },
  {
    "epidem_covid_reason_type_id": 4,
    "epidem_covid_reason_type_name": "ขอตรวจเอง (เข้าทำงาน/ผลตรวจ ATK / เดินทางไปต่างประเทศ / กังวัล)"
  },
  {
    "epidem_covid_reason_type_id": 5,
    "epidem_covid_reason_type_name": "Active case finding /Contact tracing (ค้นหาผู้สัมผัสในครอบครัว/ที่ทำงาน/ชุมชน)"
  },
  {
    "epidem_covid_reason_type_id": 6,
    "epidem_covid_reason_type_name": "สุ่มตรวจเชิงรุก/คัดกรอง ในพื้นที่ที่ไม่เคยมีรายงานการติดเชื้อ/สถานที่เสี่ยง นอกสถานพยาบาล"
  },
  {
    "epidem_covid_reason_type_id": 7,
    "epidem_covid_reason_type_name": "Sentinel surveillance"
  },
  {
    "epidem_covid_reason_type_id": 8,
    "epidem_covid_reason_type_name": "ตรวจก่อนทำหัตการ / Admit"
  }
]
```
