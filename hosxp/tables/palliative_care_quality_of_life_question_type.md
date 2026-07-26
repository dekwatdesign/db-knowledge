# `palliative_care_quality_of_life_question_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_quality_of_life_question_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_quality_of_life_question_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_quality_of_life_question_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_quality_of_life_question_type_id": 1,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ายังคงทำงานได้",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 2,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้าทำงานบ้านได้",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 3,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ายังคงมีความสุขกับชีวิต",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 4,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ายังคงทำกิจกรรมเพื่อการพักผ่อนหย่อนใจหรืองานอดิเรกได้",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 5,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ายังสามารถขับรถหรือขึ้นรถประจำทางได้ด้วยตนเอง",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 7,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้าทำกิจวัตรประจำวันได้ด้วยตนเอง เช่น แต่งตัว อาบน้ำ",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 8,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ารู้สึกมีอาการปวด",
    "hos_guid": null
  },
  {
    "palliative_care_quality_of_life_question_type_id": 9,
    "palliative_care_quality_of_life_question_type_name": "ข้าพเจ้ารู้สึกคลื่นไส้  หรือมีอาการคลื่นไส้ / อาเจียน",
    "hos_guid": null
  }
]
```
