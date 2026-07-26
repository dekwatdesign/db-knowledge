# `ovst_vaccine_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_vaccine_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| vaccine_screen_id | int(11) | YES |  | NULL |  |  |
| vaccine_screen_name | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_vaccine_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_vaccine_screen_id": 1,
    "vn": "640518151523",
    "vaccine_screen_id": 1002,
    "vaccine_screen_name": "ไม่เคย แพ้วัคซีนไข้หวัดไหญ่ หรือ สารประกอบในวัคซีนอย่างรุนแรง",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 2,
    "vn": "640518151523",
    "vaccine_screen_id": 1003,
    "vaccine_screen_name": "ไม่มี ไข้ หรืออาการเจ็บปวดอย่างเฉียบพลัน",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 3,
    "vn": "640518151523",
    "vaccine_screen_id": 1004,
    "vaccine_screen_name": "ไม่มีภาวะเลือดออกง่าย หรือหยุดยาก เกล็ดเลือดต่ำ การแข็งตัวของเลือดผิดปกติ หรือได้รับยาต้านการแข็งตัวของเลือด",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 4,
    "vn": "640518151523",
    "vaccine_screen_id": 1005,
    "vaccine_screen_name": "ไม่ได้นอนรักษาตัวและออกจากโรงพยาบาลในระยะเวลา 14 วัน",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 5,
    "vn": "640518151523",
    "vaccine_screen_id": 1006,
    "vaccine_screen_name": "ไม่มี โรคประจำตัวที่ยังมีอาการกำเริบ เช่น ใจสั่น เจ็บแน่นหน้าอก หอบ เหนื่อย",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 6,
    "vn": "640518151523",
    "vaccine_screen_id": 1007,
    "vaccine_screen_name": "ไม่อยู่ในภาวะตั้งครรภ์ ที่มีความเสี่ยงสูง",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 7,
    "vn": "640518151523",
    "vaccine_screen_id": 1008,
    "vaccine_screen_name": "ไม่มีอายุต่ำกว่า 18 ปี",
    "doctor_code": "125"
  },
  {
    "ovst_vaccine_screen_id": 8,
    "vn": "640518151523",
    "vaccine_screen_id": 1009,
    "vaccine_screen_name": "ไม่ได้ตรวจพบเชื้อโควิด 19 ในช่วง 10 วันที่ผ่านมา",
    "doctor_code": "125"
  }
]
```
