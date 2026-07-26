# `student_regulation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_regulation_id | int(11) | NO | PRI | 0 |  |  |
| student_regulation_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_regulation_name | student_regulation_name | yes | 1 |
| PRIMARY | student_regulation_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "student_regulation_id": 1,
    "student_regulation_name": "ดูแลรักษาร่างกายและของใช้ให้สะอาด",
    "hos_guid": null
  },
  {
    "student_regulation_id": 2,
    "student_regulation_name": "รักษาฟันให้แข็งแรงและแปรงฟันทุกวันอย่างถูกต้อง",
    "hos_guid": null
  },
  {
    "student_regulation_id": 3,
    "student_regulation_name": "ล้างมือให้สะอาดก่อนกินอาหารและหลังขับถ่าย",
    "hos_guid": null
  },
  {
    "student_regulation_id": 4,
    "student_regulation_name": "กินอาหารสุข สะอาด ปราศจากอัตรายและหลีกเลี่ยงอาหารรสจัด สีฉูดฉาด",
    "hos_guid": null
  },
  {
    "student_regulation_id": 5,
    "student_regulation_name": "งดบุหรี่ สุรา สารเสพติด การพนัน และการสำส่อนทางเพศ",
    "hos_guid": null
  },
  {
    "student_regulation_id": 6,
    "student_regulation_name": "สร้างความสัมพันธ์ในครอบครัวให้อบอุ่น",
    "hos_guid": null
  },
  {
    "student_regulation_id": 7,
    "student_regulation_name": "ป้องกันอุบัติภัย ด้วยการไม่ประมาท",
    "hos_guid": null
  },
  {
    "student_regulation_id": 8,
    "student_regulation_name": "ออกกำลังกายสม่ำเสมอและตรวจสุขภาพประจำปี",
    "hos_guid": null
  }
]
```
