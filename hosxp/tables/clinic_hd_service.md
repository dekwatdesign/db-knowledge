# `clinic_hd_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_id | int(11) | NO | PRI | 0 |  |  |
| clinic_ckd_member_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_machine_id | int(11) | YES |  | NULL |  |  |
| session_onset_time | datetime | YES |  | NULL |  |  |
| session_off_time | datetime | YES |  | NULL |  |  |
| session_duration_hour | double(15,3) | YES |  | NULL |  |  |
| machine_k | double(15,3) | YES |  | NULL |  |  |
| machine_ca | double(15,3) | YES |  | NULL |  |  |
| machine_na | double(15,3) | YES |  | NULL |  |  |
| machine_hco | double(15,3) | YES |  | NULL |  |  |
| machine_na_variation | char(1) | YES |  | NULL |  |  |
| machine_na_variation_value | double(15,3) | YES |  | NULL |  |  |
| machine_hco_variation | char(1) | YES |  | NULL |  |  |
| machine_hco_variation_value | double(15,3) | YES |  | NULL |  |  |
| machine_uf_profile | char(1) | YES |  | NULL |  |  |
| machine_prog_value | double(15,3) | YES |  | NULL |  |  |
| machine_temperature | double(15,3) | YES |  | NULL |  |  |
| machine_conductivity | double(15,3) | YES |  | NULL |  |  |
| machine_flow | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_dialyzer_id | int(11) | YES |  | NULL |  |  |
| dialyzer_use_no | int(11) | YES |  | NULL |  |  |
| dialyzer_tcv_1 | double(15,3) | YES |  | NULL |  |  |
| dialyzer_tcv_2 | double(15,3) | YES |  | NULL |  |  |
| dialyzer_formalin_test | char(1) | YES |  | NULL |  |  |
| dialyzer_leak_test | char(1) | YES |  | NULL |  |  |
| dialyzer_anticoagulant_yn | char(1) | YES |  | NULL |  |  |
| dialyzer_heparin_yn | char(1) | YES |  | NULL |  |  |
| dialyzer_clean | char(1) | YES |  | NULL |  |  |
| dialyzer_flush | char(1) | YES |  | NULL |  |  |
| dialyzer_medication_clearance | double(15,3) | YES |  | NULL |  |  |
| pre_hd_pale | char(1) | YES |  | NULL |  |  |
| pre_hd_fever | char(1) | YES |  | NULL |  |  |
| pre_hd_dyspnea | char(1) | YES |  | NULL |  |  |
| pre_hd_itching | char(1) | YES |  | NULL |  |  |
| pre_hd_nv | char(1) | YES |  | NULL |  |  |
| pre_hd_crep | char(1) | YES |  | NULL |  |  |
| pre_hd_orthopnea | char(1) | YES |  | NULL |  |  |
| pre_hd_headache | char(1) | YES |  | NULL |  |  |
| pre_hd_edema | char(1) | YES |  | NULL |  |  |
| pre_hd_bleeding | char(1) | YES |  | NULL |  |  |
| pre_hd_other_text | text | YES |  | NULL |  |  |
| service_date | date | YES |  | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| machine_test | char(1) | YES |  | NULL |  |  |
| machine_na_start | double(15,3) | YES |  | NULL |  |  |
| machine_na_off | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_disinfect_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_concious_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_breath_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_edema_type_id | int(11) | YES |  | NULL |  |  |
| o2_sat_percent | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_o2_type_id | int(11) | YES |  | NULL |  |  |
| weight_dry_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_last_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_pre_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_gain_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_goal_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_meal_drink_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_post_kgs | double(15,3) | YES |  | NULL |  |  |
| weight_lost_kgs | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_vss_type_id | int(11) | YES |  | NULL |  |  |
| vascular_thrill | char(1) | YES |  | NULL |  |  |
| vascular_bruit | char(1) | YES |  | NULL |  |  |
| vascular_inflammation | char(1) | YES |  | NULL |  |  |
| hd_note | text | YES |  | NULL |  |  |
| hd_nurse_code | varchar(25) | YES |  | NULL |  |  |
| hd_nurse_aid_code | varchar(25) | YES |  | NULL |  |  |
| dialysate_temp | double(15,3) | YES |  | NULL |  |  |
| dialysate_flow | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_machine_no | varchar(20) | YES |  | NULL |  |  |
| vascular_hematoma | char(1) | YES |  | NULL |  |  |
| vascular_note | text | YES |  | NULL |  |  |
| stop_a_minute | int(11) | YES |  | NULL |  |  |
| stop_v_minute | int(11) | YES |  | NULL |  |  |
| weight_netuf_kgs | double(15,3) | YES |  | NULL |  |  |
| clinic_hd_dch_type_id | int(11) | YES |  | NULL |  |  |
| urine | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | clinic_ckd_member_id | no | 1 |
| PRIMARY | clinic_hd_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
