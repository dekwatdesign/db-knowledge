# `palliative_care_assessment_complacency_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_assessment_complacency_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_assessment_complacency_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_assessment_complacency_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_assessment_complacency_type_id": 1,
    "palliative_care_assessment_complacency_type_name": "ท่านได้รับทราบข้อมูลและอาการเปลี่ยนแปลงของผู้ป่วยอย่าง ต่อเนื่อง",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 2,
    "palliative_care_assessment_complacency_type_name": "ท่านได้มีส่วนร่วมในการวางแผนและตัดสินใจในการดูแลผู้ป่วย",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 3,
    "palliative_care_assessment_complacency_type_name": "ผู้ป่วยได้รับการดูแลด้านร่างกายอย่างเหมาะสม",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 4,
    "palliative_care_assessment_complacency_type_name": "ทีมรักษาพยาบาลทำให้ท่านรู้สึกอบอุ่นใจและไว้วางใจ",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 5,
    "palliative_care_assessment_complacency_type_name": "ท่านได้รับความสะดวกและอยู่ใกล้ชิดกับผู้ป่วย",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 6,
    "palliative_care_assessment_complacency_type_name": "ท่านได้รับการตอบสนองตามประเพณี ความเชื่อและศาสนาอย่าง เหมาะสมในระยะที่ผู้ป่วยใกล้ตาย และ/หรือหลังจากที่ผู้ป่วย ถึงแก่กรรม",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 7,
    "palliative_care_assessment_complacency_type_name": "ผู้ป่วยถึงแก่กรรมได้รับการปฏิบัติอย่างเหมาะสมจากทีม ผู้รักษาพยาบาล",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_type_id": 8,
    "palliative_care_assessment_complacency_type_name": "ท่านได้รับการช่วยเหลือ / แนะนำ /  อำนวยความสะดวกในขั้นตอน การนำผู้ป่วย ออกจากหอผู้ป่วย",
    "hos_guid": null
  }
]
```
