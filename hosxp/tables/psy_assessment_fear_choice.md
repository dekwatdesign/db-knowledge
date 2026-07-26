# `psy_assessment_fear_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_choice_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_fear_choice_name | varchar(100) | YES |  | NULL |  |  |
| psy_assessment_fear_choice_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_fear_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psy_assessment_fear_choice_id": 1,
    "psy_assessment_fear_choice_name": "เป็นส่วนใหญ่",
    "psy_assessment_fear_choice_score": 3,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 2,
    "psy_assessment_fear_choice_name": "บ่อยครั้ง",
    "psy_assessment_fear_choice_score": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 3,
    "psy_assessment_fear_choice_name": "เป็นบางครั้ง",
    "psy_assessment_fear_choice_score": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 4,
    "psy_assessment_fear_choice_name": "ไม่เป็นเลย",
    "psy_assessment_fear_choice_score": 0,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 5,
    "psy_assessment_fear_choice_name": "เหมือนเดิม",
    "psy_assessment_fear_choice_score": 0,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 6,
    "psy_assessment_fear_choice_name": "ไม่มากเท่าแต่ก่อน",
    "psy_assessment_fear_choice_score": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 7,
    "psy_assessment_fear_choice_name": "มีเพียงเล็กน้อย",
    "psy_assessment_fear_choice_score": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_choice_id": 8,
    "psy_assessment_fear_choice_name": "เกือบไม่มีเลย",
    "psy_assessment_fear_choice_score": 3,
    "hos_guid": null
  }
]
```
