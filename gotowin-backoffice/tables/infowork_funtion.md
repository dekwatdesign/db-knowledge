# `infowork_funtion`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| FUNTION_ID | int | NO | PRI | NULL | auto_increment |  |
| FUNTION_NAME | varchar(600) | YES |  | NULL |  |  |
| FUNTION_DETAIL | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | FUNTION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "FUNTION_ID": 6,
    "FUNTION_NAME": "ทักษะทางเวชปฏิบัติ",
    "FUNTION_DETAIL": "ความรู้ ความสามารถในการปฏิบัติงานตามมาตรฐานวิชาชีพ การซักประวัติ ตรวจร่างกาย วินิจฉัย รักษา ให้คำแนะนำ",
    "ACTIVE": "True",
    "updated_at": "2020-04-28 19:37:24",
    "created_at": "2020-04-28 17:43:20"
  },
  {
    "FUNTION_ID": 8,
    "FUNTION_NAME": "การดูแลผู้ป่วยฉุกเฉิน",
    "FUNTION_DETAIL": "สามารถวินิจฉัยภาวะฉุกเฉิน  แก้ไขปัญหาเบื้องต้นได้อย่างทันท่วงที ให้การรักษาเฉพาะโรคได้ตามความเชี่ยวชาญแต่ละสาขา ส่งปรึกษา และส่งต่อได้ในเวลาที่เหมาะสม",
    "ACTIVE": "True",
    "updated_at": "2020-04-28 19:37:38",
    "created_at": "2020-04-28 17:45:30"
  },
  {
    "FUNTION_ID": 9,
    "FUNTION_NAME": "ทักษะการสื่อสารและสร้างสัมพันธภาพ",
    "FUNTION_DETAIL": "สามารถสื่อสารกับผู้รับบริการและครอบครัว และสื่อสารกับทีมงานสหวิชาชีพ เพื่อประโยชน์ในการดูแลรักษา",
    "ACTIVE": "True",
    "updated_at": "2020-04-28 19:37:54",
    "created_at": "2020-04-28 19:31:48"
  }
]
```
