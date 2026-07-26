# `inhome_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inhome_form_id | int(11) | NO | PRI | 0 |  |  |
| doctorcode | varchar(7) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| inhome_date | date | YES |  | NULL |  |  |
| inhome_i_adl_id | int(11) | YES |  | NULL |  |  |
| inhome_i_adl_text | text | YES |  | NULL |  |  |
| inhome_n_weight | double(22,3) | YES |  | NULL |  |  |
| inhome_n_height | int(11) | YES |  | NULL |  |  |
| inhome_n_bmi | double(22,3) | YES |  | NULL |  |  |
| inhome_n_food_id | int(11) | YES |  | NULL |  |  |
| inhome_n_food_text | text | YES |  | NULL |  |  |
| inhome_n_food_suitable_id | int(11) | YES |  | NULL |  |  |
| inhome_n_food_suitable_text | text | YES |  | NULL |  |  |
| inhome_n_alcohol_id | int(11) | YES |  | NULL |  |  |
| inhome_n_alcohol_text | text | YES |  | NULL |  |  |
| inhome_n_drug_id | int(11) | YES |  | NULL |  |  |
| inhome_n_drug_text | text | YES |  | NULL |  |  |
| inhome_n_caffeine_id | int(11) | YES |  | NULL |  |  |
| inhome_n_caffeine_text | text | YES |  | NULL |  |  |
| inhome_h_environment_id | int(11) | YES |  | NULL |  |  |
| inhome_h_environment_text | text | YES |  | NULL |  |  |
| inhome_o_care_given_id | int(11) | YES |  | NULL |  |  |
| inhome_o_care_given_text | text | YES |  | NULL |  |  |
| inhome_o_help_given_text | text | YES |  | NULL |  |  |
| inhome_o_authority_id | int(11) | YES |  | NULL |  |  |
| inhome_o_authority_name | varchar(200) | YES |  | NULL |  |  |
| inhome_o_authority_tel | bigint(20) | YES |  | NULL |  |  |
| inhome_m_medicine_id | int(11) | YES |  | NULL |  |  |
| inhome_m_medicine_text | text | YES |  | NULL |  |  |
| inhome_m_medicine_total | text | YES |  | NULL |  |  |
| inhome_m_food_text | text | YES |  | NULL |  |  |
| inhome_m_herb_text | text | YES |  | NULL |  |  |
| inhome_m_other_medicine_text | text | YES |  | NULL |  |  |
| inhome_e_vt_temperature | double(22,3) | YES |  | NULL |  |  |
| inhome_e_vt_bps | int(11) | YES |  | NULL |  |  |
| inhome_e_vt_bpd | int(11) | YES |  | NULL |  |  |
| inhome_e_vt_hr | int(11) | YES |  | NULL |  |  |
| inhome_e_vt_rr | int(11) | YES |  | NULL |  |  |
| inhome_e_vt_summarize | text | YES |  | NULL |  |  |
| inhome_st_safety_id | int(11) | YES |  | NULL |  |  |
| inhome_st_safety_text | text | YES |  | NULL |  |  |
| inhome_sh_spiritual_text | text | YES |  | NULL |  |  |
| inhome_ss_service_text | text | YES |  | NULL |  |  |
| last_update | timestamp | YES |  | NULL |  |  |
| home_visit_patient_signed_id | int(11) | YES |  | NULL |  |  |
| home_visit_staff_signed_id | int(11) | YES |  | NULL |  |  |
| home_visit_relation_id | int(11) | YES |  | NULL |  |  |
| inhome_n_bmi_id | int(11) | YES |  | NULL |  |  |
| home_visit_relative_signed_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inhome_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
