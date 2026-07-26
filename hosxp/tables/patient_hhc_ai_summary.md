# `patient_hhc_ai_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_ai_summary_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| ai_summary | longtext | YES |  | NULL |  |  |
| ai_message | longtext | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES |  | NULL |  |  |
| patient_hhc_plan_summary_id | int(11) | YES |  | NULL |  |  |
| suggested_visit_days | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_ai_summary_id | yes | 1 |
| PRIMARY | vn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
