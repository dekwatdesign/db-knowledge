# `iclaim_ipd_discharge_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_ipd_discharge_detail_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| alcohol_related | char(1) | YES |  | NULL |  |  |
| alcohol_related_desc | varchar(250) | YES |  | NULL |  |  |
| addiction_related | char(1) | YES |  | NULL |  |  |
| addiction_related_desc | varchar(250) | YES |  | NULL |  |  |
| drug_abuse_related | char(1) | YES |  | NULL |  |  |
| drug_abuse_related_desc | varchar(250) | YES |  | NULL |  |  |
| pregnant | char(1) | YES |  | NULL |  |  |
| pregnant_desc | varchar(250) | YES |  | NULL |  |  |
| infertiliy | char(1) | YES |  | NULL |  |  |
| infertiliy_desc | varchar(250) | YES |  | NULL |  |  |
| child_birth | char(1) | YES |  | NULL |  |  |
| child_birth_desc | varchar(250) | YES |  | NULL |  |  |
| caesarean_section | char(1) | YES |  | NULL |  |  |
| caesarean_section_desc | varchar(250) | YES |  | NULL |  |  |
| miscarriage | char(1) | YES |  | NULL |  |  |
| miscarriage_desc | varchar(250) | YES |  | NULL |  |  |
| nervous | char(1) | YES |  | NULL |  |  |
| nervous_desc | varchar(250) | YES |  | NULL |  |  |
| mental | char(1) | YES |  | NULL |  |  |
| mental_desc | varchar(250) | YES |  | NULL |  |  |
| emotional | char(1) | YES |  | NULL |  |  |
| emotional_desc | varchar(250) | YES |  | NULL |  |  |
| sleeping_disorder | char(1) | YES |  | NULL |  |  |
| sleeping_disorder_desc | varchar(250) | YES |  | NULL |  |  |
| cosmetic_resason | char(1) | YES |  | NULL |  |  |
| cosmetic_resason_desc | varchar(250) | YES |  | NULL |  |  |
| dental_care | char(1) | YES |  | NULL |  |  |
| dental_care_desc | varchar(250) | YES |  | NULL |  |  |
| refractive_errors_correction | char(1) | YES |  | NULL |  |  |
| refractive_errors_corr_desc | varchar(250) | YES |  | NULL |  |  |
| congenital | char(1) | YES |  | NULL |  |  |
| congenital_desc | varchar(250) | YES |  | NULL |  |  |
| hereditary_disease | char(1) | YES |  | NULL |  |  |
| hereditary_disease_desc | varchar(250) | YES |  | NULL |  |  |
| physical_defects | char(1) | YES |  | NULL |  |  |
| physical_defects_desc | varchar(250) | YES |  | NULL |  |  |
| degenerative_change | char(1) | YES |  | NULL |  |  |
| degenerative_change_desc | varchar(250) | YES |  | NULL |  |  |
| hiv_test | char(1) | YES |  | NULL |  |  |
| hiv_test_result | char(1) | YES |  | NULL |  |  |
| hiv_test_date | datetime | YES |  | NULL |  |  |
| investigation_and_result | char(1) | YES |  | NULL |  |  |
| investigation_and_result_desc | varchar(250) | YES |  | NULL |  |  |
| pathological_report | char(1) | YES |  | NULL |  |  |
| pathological_report_desc | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| ipd_nurse_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| diag_text | text | YES |  | NULL |  |  |
| pe | text | YES |  | NULL |  |  |
| first_date_for_this_illness | date | YES |  | NULL |  |  |
| first_time_for_this_illness | time | YES |  | NULL |  |  |
| patient_clinical_finding | varchar(250) | YES |  | NULL |  |  |
| treatment | varchar(250) | YES |  | NULL |  |  |
| discharge_drg | varchar(250) | YES |  | NULL |  |  |
| opinion_symptom | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_ipd_discharge_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
