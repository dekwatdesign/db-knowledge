# `drp_intervention_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drp_intervention_list_id | int(11) | NO | PRI | 0 |  |  |
| drp_regist_id | int(11) | YES |  | NULL |  |  |
| drp_intervention_type_id | int(11) | YES |  | NULL |  |  |
| drp_outcome_type_id | int(11) | YES |  | NULL |  |  |
| drp_intervention_note | longtext | YES |  | NULL |  |  |
| drp_problem_list_id | int(11) | YES |  | NULL |  |  |
| drp_intervention_text | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drp_intervention_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "drp_intervention_list_id": 1,
    "drp_regist_id": null,
    "drp_intervention_type_id": 6,
    "drp_outcome_type_id": null,
    "drp_intervention_note": null,
    "drp_problem_list_id": 11,
    "drp_intervention_text": "I2.1 : ที่ตัวผู้ป่วยหรือผู้ดูแล : ให้คำแนะนำเรื่องยากับผู้ป่วย"
  }
]
```
