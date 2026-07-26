# `psy_assessment_fear_evaluate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_assessment_fear_evaluate_type_id | int(11) | NO | PRI | 0 |  |  |
| psy_assessment_fear_evaluate_type_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_assessment_fear_evaluate_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "psy_assessment_fear_evaluate_type_id": 1,
    "psy_assessment_fear_evaluate_type_name": "วิตดกกังวล",
    "hos_guid": null
  },
  {
    "psy_assessment_fear_evaluate_type_id": 2,
    "psy_assessment_fear_evaluate_type_name": "ซึมเศร้า",
    "hos_guid": null
  }
]
```
