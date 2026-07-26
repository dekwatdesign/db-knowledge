# `psy_assessment_fear_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_fear_evaluate_name | varchar(100) | YES |  | NULL |  |  |
| psy_assessment_fear_evaluate_min | int(11) | YES |  | NULL |  |  |
| psy_assessment_fear_evaluate_max | int(11) | YES |  | NULL |  |  |
| psy_assessment_fear_evaluate_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_fear_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psy_assessment_fear_evaluate_id": 1,
    "psy_assessment_fear_evaluate_name": "ไม่มีความผิดปกติ",
    "psy_assessment_fear_evaluate_min": 0,
    "psy_assessment_fear_evaluate_max": 7,
    "psy_assessment_fear_evaluate_type_id": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_id": 2,
    "psy_assessment_fear_evaluate_name": "มีอาการวิตกกังวลสูง แต่ยังไม่ผิดปกติชัดเจน",
    "psy_assessment_fear_evaluate_min": 8,
    "psy_assessment_fear_evaluate_max": 10,
    "psy_assessment_fear_evaluate_type_id": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_id": 3,
    "psy_assessment_fear_evaluate_name": "มีอาการวิตกกังวลสูง ผิดปกติทางจิตเวช",
    "psy_assessment_fear_evaluate_min": 11,
    "psy_assessment_fear_evaluate_max": 21,
    "psy_assessment_fear_evaluate_type_id": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_id": 4,
    "psy_assessment_fear_evaluate_name": "ไม่มีความผิดปกติ",
    "psy_assessment_fear_evaluate_min": 0,
    "psy_assessment_fear_evaluate_max": 7,
    "psy_assessment_fear_evaluate_type_id": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_id": 5,
    "psy_assessment_fear_evaluate_name": "มีอาการวิตกซึมเศร้าสูง แต่ยังไม่ผิดปกติชัดเจน",
    "psy_assessment_fear_evaluate_min": 8,
    "psy_assessment_fear_evaluate_max": 10,
    "psy_assessment_fear_evaluate_type_id": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_id": 6,
    "psy_assessment_fear_evaluate_name": "มีอาการวิตกซึมเศร้าสูง ผิดปกติทางจิตเวช",
    "psy_assessment_fear_evaluate_min": 11,
    "psy_assessment_fear_evaluate_max": 21,
    "psy_assessment_fear_evaluate_type_id": 2,
    "hos_guid": null
  }
]
```
