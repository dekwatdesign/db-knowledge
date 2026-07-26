# `patient_cm_allergy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cm_allergy_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| contrast_medium_type_id | int(11) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| allergy_date | date | YES |  | NULL |  |  |
| symptom_text | text | YES |  | NULL |  |  |
| cm_allergy_severity_type_id | int(11) | YES |  | NULL |  |  |
| cm_allergy_treatment_type_id | int(11) | YES |  | NULL |  |  |
| allergy_note_text | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| update_staff | varchar(25) | YES |  | NULL |  |  |
| deny_order | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| PRIMARY | patient_cm_allergy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
