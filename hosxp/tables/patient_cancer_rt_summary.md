# `patient_cancer_rt_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_rt_summary_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| patient_cancer_ca_head_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_faceneck_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_faceneck_spc_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_lung_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_breast_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_breast_spc_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_abdomen_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_cervix_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_pelvis_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_bone_met_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_3dcrt_dose | float | YES |  | NULL |  |  |
| patient_cancer_ca_other_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_point_a_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_a_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_b_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_rectal_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_absorb_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_ldr_total_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_point_a_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_a_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_b_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_rectal_avg_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_absorb_dose | float | YES |  | NULL |  |  |
| patient_cancer_icrt_hdr_total_dose | float | YES |  | NULL |  |  |
| rt_date | date | YES |  | NULL |  |  |
| rt_time | time | YES |  | NULL |  |  |
| rt_staff1 | varchar(30) | YES |  | NULL |  |  |
| rt_staff2 | varchar(30) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_rt_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
