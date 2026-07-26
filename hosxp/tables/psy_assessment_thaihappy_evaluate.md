# `psy_assessment_thaihappy_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_thaihappy_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_thaihappy_evaluate_name | varchar(255) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_evaluate_min | int(11) | YES |  | NULL |  |  |
| psy_assessment_thaihappy_evaluate_max | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_thaihappy_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psy_assessment_thaihappy_evaluate_id": 1,
    "psy_assessment_thaihappy_evaluate_name": "สุขภาพจิตต่ำกว่าคนทั่วไป",
    "psy_assessment_thaihappy_evaluate_min": 0,
    "psy_assessment_thaihappy_evaluate_max": 43,
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_evaluate_id": 2,
    "psy_assessment_thaihappy_evaluate_name": "สุขภาพจิตเท่ากับคนทั่วไป",
    "psy_assessment_thaihappy_evaluate_min": 44,
    "psy_assessment_thaihappy_evaluate_max": 50,
    "hos_guid": null
  },
  {
    "psy_assessment_thaihappy_evaluate_id": 3,
    "psy_assessment_thaihappy_evaluate_name": "สุขภาพจิตดีกว่าคนทั่วไป",
    "psy_assessment_thaihappy_evaluate_min": 51,
    "psy_assessment_thaihappy_evaluate_max": 60,
    "hos_guid": null
  }
]
```
