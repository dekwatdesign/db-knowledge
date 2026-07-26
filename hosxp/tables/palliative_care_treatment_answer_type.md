# `palliative_care_treatment_answer_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_treatment_answer_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_treatment_answer_type_name | varchar(255) | YES |  | NULL |  |  |
| palliative_care_treatment_answer_type_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_treatment_answer_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "palliative_care_treatment_answer_type_id": 1,
    "palliative_care_treatment_answer_type_name": "สำคัญมากที่สุด",
    "palliative_care_treatment_answer_type_score": 1,
    "hos_guid": null
  },
  {
    "palliative_care_treatment_answer_type_id": 2,
    "palliative_care_treatment_answer_type_name": "สำคัญมาก",
    "palliative_care_treatment_answer_type_score": 2,
    "hos_guid": null
  },
  {
    "palliative_care_treatment_answer_type_id": 3,
    "palliative_care_treatment_answer_type_name": "สำคัญปานกลาง",
    "palliative_care_treatment_answer_type_score": 3,
    "hos_guid": null
  },
  {
    "palliative_care_treatment_answer_type_id": 4,
    "palliative_care_treatment_answer_type_name": "สำคัญน้อย",
    "palliative_care_treatment_answer_type_score": 4,
    "hos_guid": null
  },
  {
    "palliative_care_treatment_answer_type_id": 5,
    "palliative_care_treatment_answer_type_name": "สำคัญน้อยที่สุด",
    "palliative_care_treatment_answer_type_score": 5,
    "hos_guid": null
  }
]
```
