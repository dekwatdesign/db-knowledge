# `patient_cancer_interrogate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_interrogate_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(15) | YES |  | NULL |  |  |
| gp | varchar(50) | YES |  | NULL |  |  |
| gp_last_date | date | YES |  | NULL |  |  |
| lmp_date | date | YES |  | NULL |  |  |
| o2sat | int(11) | YES |  | NULL |  |  |
| contraception_status | varchar(1) | YES |  | NULL |  |  |
| ud_status | varchar(1) | YES |  | NULL |  |  |
| ud_other_text | varchar(255) | YES |  | NULL |  |  |
| smoking_status | varchar(1) | YES |  | NULL |  |  |
| smoking_duration | int(11) | YES |  | NULL |  |  |
| smoking_quit_duration | int(11) | YES |  | NULL |  |  |
| smoking_qty_perday | varchar(11) | YES |  | NULL |  |  |
| alcohol_status | varchar(1) | YES |  | NULL |  |  |
| alcohol_duration | int(11) | YES |  | NULL |  |  |
| alcohol_quit_duration | int(11) | YES |  | NULL |  |  |
| alcohol_qty_perday | varchar(11) | YES |  | NULL |  |  |
| drug_allergy_status | varchar(1) | YES |  | NULL |  |  |
| drug_allergy_text | varchar(255) | YES |  | NULL |  |  |
| food_allergy_status | varchar(1) | YES |  | NULL |  |  |
| food_allergy_text | varchar(255) | YES |  | NULL |  |  |
| blood_group | varchar(2) | YES |  | NULL |  |  |
| blood_group_rh | varchar(1) | YES |  | NULL |  |  |
| vn | varchar(20) | YES |  | NULL |  |  |
| cancer_smoking_type_id | int(11) | YES |  | NULL |  |  |
| ph_status | varchar(1) | YES |  | NULL |  |  |
| ph_text | varchar(255) | YES |  | NULL |  |  |
| family_of_ca | varchar(255) | YES |  | NULL |  |  |
| anti_hiv_status | varchar(1) | YES |  | NULL |  |  |
| anti_hiv_text | varchar(255) | YES |  | NULL |  |  |
| source_info_status | varchar(1) | YES |  | NULL |  |  |
| source_info_text | varchar(255) | YES |  | NULL |  |  |
| medication_list | varchar(100) | YES |  | NULL |  |  |
| cancer_o2_type_id | int(11) | YES |  | NULL |  |  |
| ud_drug_icode | varchar(10) | YES |  | NULL |  |  |
| cancer_familiy_id | int(11) | YES |  | NULL |  |  |
| last_para | int(11) | YES |  | NULL |  |  |
| diseases_status | varchar(1) | YES |  | NULL |  |  |
| cancer_diseases_id | int(11) | YES |  | NULL |  |  |
| cancer_alcohol_type_id | int(11) | YES |  | NULL |  |  |
| smoking_start_year | int(11) | YES |  | NULL |  |  |
| smoking_quit_year | int(11) | YES |  | NULL |  |  |
| alcohol_start_year | int(11) | YES |  | NULL |  |  |
| alcohol_quit_year | int(11) | YES |  | NULL |  |  |
| cancer_contraception_id | int(11) | YES |  | NULL |  |  |
| lmp_text | varchar(200) | YES |  | NULL |  |  |
| contraception_text | varchar(255) | YES |  | NULL |  |  |
| family_history_status | varchar(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_interrogate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "patient_cancer_interrogate_id": 1,
    "clinicmember_id": null,
    "hn": "570001607",
    "gp": null,
    "gp_last_date": null,
    "lmp_date": null,
    "o2sat": null,
    "contraception_status": null,
    "ud_status": null,
    "ud_other_text": null,
    "smoking_status": null,
    "smoking_duration": null,
    "smoking_quit_duration": null,
    "smoking_qty_perday": null,
    "alcohol_status": null,
    "alcohol_duration": null,
    "alcohol_quit_duration": null,
    "alcohol_qty_perday": null,
    "drug_allergy_status": null,
    "drug_allergy_text": null,
    "food_allergy_status": null,
    "food_allergy_text": null,
    "blood_group": null,
    "blood_group_rh": null,
    "vn": null,
    "cancer_smoking_type_id": null,
    "ph_status": null,
    "ph_text": null,
    "family_of_ca": null,
    "anti_hiv_status": null,
    "anti_hiv_text": null,
    "source_info_status": null,
    "source_info_text": null,
    "medication_list": null,
    "cancer_o2_type_id": null,
    "ud_drug_icode": null,
    "cancer_familiy_id": null,
    "last_para": null,
    "diseases_status": null,
    "cancer_diseases_id": null,
    "cancer_alcohol_type_id": null,
    "smoking_start_year": null,
    "smoking_quit_year": null,
    "alcohol_start_year": null,
    "alcohol_quit_year": null,
    "cancer_contraception_id": null,
    "lmp_text": null,
    "contraception_text": null,
    "family_history_status": null,
    "hos_guid": null
  }
]
```
