# `psy_assessment_thaihappy_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_thaihappy_choice_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_thaihappy_choice_name | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_choice_score1 | int(11) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_choice_score2 | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_thaihappy_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psy_assessment_thaihappy_choice_id": 1,
    "psy_assessment_thaihappy_choice_name": "ไม่เลย",
    "psy_assessment_thaihappy_choice_score1": 1,
    "psy_assessment_thaihappy_choice_score2": 4,
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_choice_id": 2,
    "psy_assessment_thaihappy_choice_name": "เล็กน้อย",
    "psy_assessment_thaihappy_choice_score1": 2,
    "psy_assessment_thaihappy_choice_score2": 3,
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_choice_id": 3,
    "psy_assessment_thaihappy_choice_name": "มาก",
    "psy_assessment_thaihappy_choice_score1": 3,
    "psy_assessment_thaihappy_choice_score2": 2,
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_choice_id": 4,
    "psy_assessment_thaihappy_choice_name": "มากที่สุด",
    "psy_assessment_thaihappy_choice_score1": 4,
    "psy_assessment_thaihappy_choice_score2": 1,
    "hos_guid": null
  }
]
```
