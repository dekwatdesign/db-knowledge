# `palliative_care_assessment_complacency_answer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_assessment_complacency_answer_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_assessment_complacency_answer_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_assessment_complacency_answer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "palliative_care_assessment_complacency_answer_type_id": 1,
    "palliative_care_assessment_complacency_answer_name": "น้อย",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_answer_type_id": 2,
    "palliative_care_assessment_complacency_answer_name": "ปานกลาง",
    "hos_guid": null
  },
  {
    "palliative_care_assessment_complacency_answer_type_id": 3,
    "palliative_care_assessment_complacency_answer_name": "มาก",
    "hos_guid": null
  }
]
```
