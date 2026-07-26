# `ipd_nurse_diagnosis_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_diagnosis_template_id | int(11) | YES |  | NULL |  |  |
| template_name | varchar(50) | YES | UNI | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| diagnosis_text | text | YES |  | NULL |  |  |
| target_text | text | YES |  | NULL |  |  |
| plan_text | text | YES |  | NULL |  |  |
| evaluation_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_template_name | template_name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
