# `social_doctor_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| social_doctor_template_id | int(11) | NO | PRI | 0 |  |  |
| social_doctor_template_name | varchar(250) | YES |  | NULL |  |  |
| social_activity_temp_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | social_doctor_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
