# `physic_pe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_pe_id | int(11) | NO | PRI | 0 |  |  |
| physic_pe_date | date | YES | MUL | NULL |  |  |
| physic_pe_doctor | varchar(7) | YES | MUL | NULL |  |  |
| physic_pe_qty | int(11) | YES |  | NULL |  |  |
| physic_pe_history | text | YES |  | NULL |  |  |
| physic_pe_prohibition | text | YES |  | NULL |  |  |
| physic_pe_intensity_list | varchar(50) | YES |  | NULL |  |  |
| physic_pe_aggravating_list | varchar(250) | YES |  | NULL |  |  |
| physic_pe_aggravating_note | text | YES |  | NULL |  |  |
| physic_pe_easing_list | varchar(250) | YES |  | NULL |  |  |
| physic_pe_easing_note | text | YES |  | NULL |  |  |
| physic_pe_sleep_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_cough_pain_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_urine_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_walk_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_sleep_posture | varchar(50) | YES |  | NULL |  |  |
| physic_pe_pillow | varchar(50) | YES |  | NULL |  |  |
| physic_pe_bed | varchar(50) | YES |  | NULL |  |  |
| physic_pe_sit | varchar(50) | YES |  | NULL |  |  |
| physic_pe_observation | text | YES |  | NULL |  |  |
| physic_pe_consciousness_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_o2therapy_note | text | YES |  | NULL |  |  |
| physic_pe_chest_shape_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_cough_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_edema_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_edema_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_breating_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_breating_acs_use | varchar(250) | YES |  | NULL |  |  |
| physic_pe_breating_other | varchar(250) | YES |  | NULL |  |  |
| physic_pe_palpation | text | YES |  | NULL |  |  |
| physic_pe_palpation_list | varchar(50) | YES |  | NULL |  |  |
| physic_pe_sub_emphysema_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_sub_emphysema_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_tactile_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_tactile_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_rhonchi_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_rhonchi_note | varchar(250) | YES |  | NULL |  |  |
| physic_pe_percussion_note | text | YES |  | NULL |  |  |
| physic_pe_auscultation | text | YES |  | NULL |  |  |
| physic_pe_bed_mobility | int(11) | YES |  | NULL |  |  |
| physic_pe_bed_mobility_note | text | YES |  | NULL |  |  |
| physic_pe_ambulation | int(11) | YES |  | NULL |  |  |
| physic_pe_ambulation_note | text | YES |  | NULL |  |  |
| physic_pe_problem_list | varchar(250) | YES |  | NULL |  |  |
| physic_pe_problem_note | text | YES |  | NULL |  |  |
| physic_pe_goal_list | varchar(250) | YES |  | NULL |  |  |
| physic_pe_goal_note | text | YES |  | NULL |  |  |
| physic_pe_plan_of_treatment | text | YES |  | NULL |  |  |
| physic_pe_other_note | text | YES |  | NULL |  |  |
| physic_pe_spacial_test_note | text | YES |  | NULL |  |  |
| physic_pe_acsmvt_note | text | YES |  | NULL |  |  |
| physic_pe_muscle_power_note | text | YES |  | NULL |  |  |
| physic_pe_follow_command | varchar(100) | YES |  | NULL |  |  |
| physic_pe_treatment_note | text | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| physic_pe_other_test_note | text | YES |  | NULL |  |  |
| physic_pe_vbi | int(11) | YES |  | NULL |  |  |
| physic_pe_chin_out | int(11) | YES |  | NULL |  |  |
| physic_pe_chin_in | int(11) | YES |  | NULL |  |  |
| physic_pe_test_spuring | int(11) | YES |  | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES |  | NULL |  |  |
| physic_pe_xray_note | text | YES |  | NULL |  |  |
| physic_pe_mri_note | text | YES |  | NULL |  |  |
| physic_pe_o2therapy_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_percussion_list | varchar(100) | YES |  | NULL |  |  |
| physic_pe_rom_note | text | YES |  | NULL |  |  |
| physic_pe_heart_echo_date | date | YES |  | NULL |  |  |
| physic_pe_heart_echo_value | float | YES |  | NULL |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| physic_pe_ventilator_chk | char(1) | YES |  | NULL |  |  |
| physic_pe_ventilator_note | varchar(150) | YES |  | NULL |  |  |
| physic_pe_cag_date | date | YES |  | NULL |  |  |
| physic_pe_cag_detail | varchar(255) | YES |  | NULL |  |  |
| physic_pe_learning_chk | char(1) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| physic_pe_initial_symptom_list | varchar(50) | YES |  | NULL |  |  |
| physic_pe_home_programe_list | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_pe_date | physic_pe_date | no | 1 |
| ix_idx_physic_pe_register_id | physic_register_id | no | 1 |
| ix_physic_pe_doctor | physic_pe_doctor | no | 1 |
| PRIMARY | physic_pe_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
