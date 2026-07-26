# `psych_staging_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_staging_summary_id | int(11) | NO | PRI | 0 |  |  |
| vn_an | varchar(13) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| psych_staging_sum_g | text | YES |  | NULL |  |  |
| psych_staging_sum_p | text | YES |  | NULL |  |  |
| psycy_staging_sum_phy | text | YES |  | NULL |  |  |
| psych_staging_sum_g_symptom | text | YES |  | NULL |  |  |
| psych_staging_sum_p_symptom | text | YES |  | NULL |  |  |
| psych_staging_sum_psy_symptom | text | YES |  | NULL |  |  |
| psych_staging_sum_dx_note | text | YES |  | NULL |  |  |
| psych_staging_s | char(1) | YES |  | NULL |  |  |
| psych_staging_a | char(1) | YES |  | NULL |  |  |
| psych_staging_f | char(1) | YES |  | NULL |  |  |
| psych_staging_e | char(1) | YES |  | NULL |  |  |
| psych_staging_refer_less48 | char(1) | YES |  | NULL |  |  |
| psych_staging_refer_more48 | char(1) | YES |  | NULL |  |  |
| psych_staging_death | char(1) | YES |  | NULL |  |  |
| psych_staging_adr | char(1) | YES |  | NULL |  |  |
| psych_staging_ect | char(1) | YES |  | NULL |  |  |
| psych_staging_injection | char(1) | YES |  | NULL |  |  |
| staging_entry_time | time | YES |  | NULL |  |  |
| staging_entry_date | date | YES |  | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES | MUL | NULL |  |  |
| entry_date | date | YES |  | NULL |  |  |
| staff_entry | varchar(50) | YES |  | NULL |  |  |
| doctor_assess | varchar(50) | YES |  | NULL |  |  |
| staff_report | varchar(50) | YES |  | NULL |  |  |
| doctor | varchar(50) | YES |  | NULL |  |  |
| doctor_date | date | YES |  | NULL |  |  |
| doctor_time | time | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_staging_summary_symtom | text | YES |  | NULL |  |  |
| psych_staging_summary_note | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vs | int(11) | YES |  | NULL |  |  |
| ns | int(11) | YES |  | NULL |  |  |
| suicide | int(11) | YES |  | NULL |  |  |
| homicide | int(11) | YES |  | NULL |  |  |
| again_to_object | int(11) | YES |  | NULL |  |  |
| ect | int(11) | YES |  | NULL |  |  |
| nt | int(11) | YES |  | NULL |  |  |
| adl | int(11) | YES |  | NULL |  |  |
| bio | int(11) | YES |  | NULL |  |  |
| psycho_social | int(11) | YES |  | NULL |  |  |
| infor_need | int(11) | YES |  | NULL |  |  |
| symptom_distress | int(11) | YES |  | NULL |  |  |
| severity_minimal_sum | varchar(50) | YES |  | NULL |  |  |
| severity_minimal_assessment | varchar(150) | YES |  | NULL |  |  |
| number_of_nurses | int(11) | YES |  | NULL |  |  |
| number_of_employees | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_shift_id | ipd_nurse_shift_id | no | 1 |
| ix_vn_an | vn_an | no | 1 |
| PRIMARY | psych_staging_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
