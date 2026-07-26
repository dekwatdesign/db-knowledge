# `psy_assessment_psychosis_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_psychosis_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_psychosis_evaluate_name | varchar(100) | YES |  | NULL |  |  |
| psy_assessment_psychosis_evaluate_min | int(11) | YES |  | NULL |  |  |
| psy_assessment_psychosis_evaluate_max | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_psychosis_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psy_assessment_psychosis_evaluate_id": 1,
    "psy_assessment_psychosis_evaluate_name": "ปกติ",
    "psy_assessment_psychosis_evaluate_min": 0,
    "psy_assessment_psychosis_evaluate_max": 0,
    "hos_guid": null
  },
  {
    "psy_assessment_psychosis_evaluate_id": 2,
    "psy_assessment_psychosis_evaluate_name": "สงสัยว่าเป็นโรคจิต",
    "psy_assessment_psychosis_evaluate_min": 1,
    "psy_assessment_psychosis_evaluate_max": 99,
    "hos_guid": null
  }
]
```
