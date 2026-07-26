# `psych_interview`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_interview_id | int(11) | NO | PRI | 0 |  |  |
| psych_interview_date | date | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| psych_interview_name | varchar(100) | YES |  | NULL |  |  |
| psych_interview_symptom | text | YES |  | NULL |  |  |
| psych_interview_history | text | YES |  | NULL |  |  |
| psych_interview_education | varchar(255) | YES |  | NULL |  |  |
| psych_interview_work | varchar(255) | YES |  | NULL |  |  |
| psych_interview_eco_status | varchar(255) | YES |  | NULL |  |  |
| psych_interview_marry_history | text | YES |  | NULL |  |  |
| psych_interview_baby_qty | int(11) | YES |  | NULL |  |  |
| psych_interview_military | varchar(255) | YES |  | NULL |  |  |
| psych_interview_menses_chk | char(1) | YES |  | NULL |  |  |
| psych_interview_menses_note | text | YES |  | NULL |  |  |
| psych_interview_narcotic_chk | char(1) | YES |  | NULL |  |  |
| psych_interview_narcotic_note | text | YES |  | NULL |  |  |
| psych_interview_character | text | YES |  | NULL |  |  |
| psych_interview_sick_chk | char(1) | YES |  | NULL |  |  |
| psych_interview_sick_note | text | YES |  | NULL |  |  |
| psych_interview_accident_chk | char(1) | YES |  | NULL |  |  |
| psych_interview_accident_note | text | YES |  | NULL |  |  |
| psych_interview_psy_chk | char(1) | YES |  | NULL |  |  |
| psych_interview_psy_note | text | YES |  | NULL |  |  |
| psych_interview_heredity | varchar(255) | YES |  | NULL |  |  |
| psych_interview_social_chk | char(1) | YES |  | NULL |  |  |
| psych_social_prob_items_code | varchar(50) | YES |  | NULL |  |  |
| psych_interview_social_note | text | YES |  | NULL |  |  |
| psych_interview_helpful | text | YES |  | NULL |  |  |
| login | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| patient_relation_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_interview_helpful_chk | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_patient_relation_type_id | patient_relation_type_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_interview_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
