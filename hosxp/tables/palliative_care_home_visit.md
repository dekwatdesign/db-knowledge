# `palliative_care_home_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_home_visit_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_home_visit_date | date | YES |  | NULL |  |  |
| palliative_care_home_visit_time | time | YES |  | NULL |  |  |
| palliative_care_home_visit_body_pain | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_body_pain_position | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_body_pain_score | varchar(10) | YES |  | NULL |  |  |
| palliative_care_home_visit_food | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_food_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_body_lesion | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_body_lesion_positon | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_caring | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_caring_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_sadly | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_sadly_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_worry | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_worry_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_strain | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_strain_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_dispirited | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_dispirited_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_other | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_mind_other_text | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_relation | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_skill_care | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_unacceptable | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_income | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_other | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_social_other_text | varchar(255) | YES |  | NULL |  |  |
| append_datetime | datetime | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |
| entry_user | varchar(255) | YES |  | NULL |  |  |
| palliative_care_patient_register_id | int(11) | YES |  | NULL |  |  |
| palliative_hhc_sent_id | int(11) | YES |  | NULL |  |  |
| palliative_care_patient_status_id | int(11) | YES |  | NULL |  |  |
| palliative_care_respiration_id | int(11) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_relation | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_relation_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_mean_sick | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_mean_sick_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_pardon | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_pardon_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_hope | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_hope_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_believe | char(1) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_believe_note | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_spirit_other | varchar(255) | YES |  | NULL |  |  |
| palliative_care_home_visit_drug | varchar(255) | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| transfer_plan_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_home_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
