# `hsk_psy_regtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(5) | NO | PRI | 0 |  |  |
| psy_name | varchar(100) | YES |  | NULL |  |  |
| st_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "psy_name": "จิตเวชเด็กและวัยรุ่นทั่วไป",
    "st_status": "Y"
  },
  {
    "id": 2,
    "psy_name": "จิตเวชผู้ใหญ่ทั่วไป",
    "st_status": "Y"
  },
  {
    "id": 3,
    "psy_name": "จิตเวชสูงอายุทั่วไป",
    "st_status": "Y"
  },
  {
    "id": 4,
    "psy_name": "นิติจิตเวช(มีคดีความ)",
    "st_status": "Y"
  },
  {
    "id": 5,
    "psy_name": "ขอรับรองความพิการ",
    "st_status": "Y"
  },
  {
    "id": 6,
    "psy_name": "ขอรับบุตรบุญธรรม",
    "st_status": "Y"
  },
  {
    "id": 7,
    "psy_name": "ขอเปิดสถานสงเคราะห์",
    "st_status": "Y"
  },
  {
    "id": 8,
    "psy_name": "ตรวจสุขภาพจิตเจ้าหน้าที่สถานสงเคราะห์",
    "st_status": "Y"
  }
]
```
