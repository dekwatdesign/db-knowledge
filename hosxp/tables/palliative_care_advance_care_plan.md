# `palliative_care_advance_care_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_advance_care_plan_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_advance_care_plan_date | date | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_visit_date | date | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pain | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pain_position | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pain_score | varchar(10) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pain_solution_morphine | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pain_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_food | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_food_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pressure_score | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pressure_solution | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_lesion | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_lesion_position | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_lesion_solution | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_breathless | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_breathless_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_bps | double(13,3) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_bpd | double(13,3) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_p | double(13,3) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_rr | double(13,3) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_t | double(13,3) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_pulse_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_caring | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_caring_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_caring_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_leak | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_leak_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_leak_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_sadly | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_sadly_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_strain | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_strain_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_strain_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_sadly_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_discouraged | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_discouraged_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_discouraged_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_mind | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_mind_other | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_mind_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_mind_other_cause | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_relation_care | char(10) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_relation_care_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_skill_care | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_skill_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_unacceptable | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_unacceptable_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_income | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_income_solution | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_other | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_other_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_social_other_solution | varchar(255) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(10) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| doctor_code | char(7) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_relation | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_relation_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_mean_sick | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_mean_sick_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_pardon | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_pardon_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_believe | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_believe_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_hope | char(1) | YES |  | NULL |  |  |
| palliative_care_advance_care_plan_spirit_hope_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_status_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_advance_care_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
