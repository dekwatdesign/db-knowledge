# `psy_assessment_strain_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_strain_choice_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_strain_choice_name | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_strain_choice_score | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_strain_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psy_assessment_strain_choice_id": 1,
    "psy_assessment_strain_choice_name": "ไม่เคยเลย",
    "psy_assessment_strain_choice_score": 0,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_choice_id": 2,
    "psy_assessment_strain_choice_name": "เป็นครั้งคราว",
    "psy_assessment_strain_choice_score": 1,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_choice_id": 3,
    "psy_assessment_strain_choice_name": "เป็นบ่อยๆ",
    "psy_assessment_strain_choice_score": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_strain_choice_id": 4,
    "psy_assessment_strain_choice_name": "เป็นประจำ",
    "psy_assessment_strain_choice_score": 3,
    "hos_guid": null
  }
]
```
