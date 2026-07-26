# `palliative_care_quality_of_life`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_quality_of_life_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_quality_of_life_question_type_id | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_answer_type_id | int(11) | YES |  | NULL |  |  |
| palliative_care_home_visit_id | int(11) | YES |  | NULL |  |  |
| palliative_care_quality_of_life_note | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_quality_of_life_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
