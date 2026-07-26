# `sti_patient_register_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sti_patient_register_lab_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_id | int(11) | YES |  | NULL |  |  |
| sti_patient_lab_rpr_vdrl_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_lab_rapid_test_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_lab_confirmation_test_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_lab_gram_stain_type_id | int(11) | YES |  | NULL |  |  |
| gram_stain_gnd_value | varchar(50) | YES |  | NULL |  |  |
| gram_stain_pnm_value | varchar(50) | YES |  | NULL |  |  |
| gram_stain_other_value | varchar(50) | YES |  | NULL |  |  |
| sti_patient_lab_wet_smear_type_id | int(11) | YES |  | NULL |  |  |
| sti_patient_lab_pap_smear_type_id | int(11) | YES |  | NULL |  |  |
| wet_smear_abnormal_t_vaginalis | char(1) | YES |  | NULL |  |  |
| wet_smear_abnormal_clue_cell_20 | char(1) | YES |  | NULL |  |  |
| wet_smear_abnormal_other | char(1) | YES |  | NULL |  |  |
| wet_smear_abnormal_other_text | varchar(200) | YES |  | NULL |  |  |
| pap_smear_abnormal_hpv | char(1) | YES |  | NULL |  |  |
| pap_smear_abnormal_t_vaginalis | char(1) | YES |  | NULL |  |  |
| pap_smear_abnormal_cytology_abnormalities | char(1) | YES |  | NULL |  |  |
| pap_smear_abnormal_other | char(1) | YES |  | NULL |  |  |
| pap_smear_abnormal_other_text | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sti_patient_register_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
