# `survey_satisfy_pcu`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| survey_satisfy_id | int(11) | NO | PRI | 0 |  |  |
| survey_satisfy_name | varchar(90) | YES |  | NULL |  |  |
| survey_satisfy_part | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | survey_satisfy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "survey_satisfy_id": 10,
    "survey_satisfy_name": "1. เพศของท่าน",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 20,
    "survey_satisfy_name": "2. สถานภาพ",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 30,
    "survey_satisfy_name": "3. การศึกษา",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 40,
    "survey_satisfy_name": "4. อาชีพ",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 50,
    "survey_satisfy_name": "5. ท่านมารับบริการครั้งนี้เป็นครั้งที่เท่าใด ?",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 60,
    "survey_satisfy_name": "6. ระยะเวลารอคอย ตั้งแต่ยื่นบัตรถึงเสร็จสิ้นการรับ",
    "survey_satisfy_part": 10,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 70,
    "survey_satisfy_name": "1.   ให้การต้อนรับด้วยอัธยาศัยที่ดี สุภาพ ยิ้มแย้มแจ่มใส และกระตือรือร้น",
    "survey_satisfy_part": 20,
    "hos_guid": null
  },
  {
    "survey_satisfy_id": 80,
    "survey_satisfy_name": "2.   ให้บริการด้วยความเต็มใจ เอาใจใส่รับฟังปัญหาสุขภาพ",
    "survey_satisfy_part": 20,
    "hos_guid": null
  }
]
```
