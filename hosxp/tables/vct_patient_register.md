# `vct_patient_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vct_patient_register_id | int(11) | NO | PRI | 0 |  |  |
| sti_patient_register_id | int(11) | YES |  | NULL |  |  |
| vct_patient_register_service_type_id | int(11) | YES |  | NULL |  |  |
| vct_patient_register_partner_type_id | int(11) | YES |  | NULL |  |  |
| partner_counseling_before_blood_test | char(1) | YES |  | NULL |  |  |
| partner_counseling_after_blood_test | char(1) | YES |  | NULL |  |  |
| partner_counseling_blood_result1 | char(1) | YES |  | NULL |  |  |
| partner_counseling_blood_result2 | char(1) | YES |  | NULL |  |  |
| vct_patient_register_partner_blood_result_type_id | int(11) | YES |  | NULL |  |  |
| hiv_pretest_counseling | char(1) | YES |  | NULL |  |  |
| hiv_pretest_counseling_date | date | YES |  | NULL |  |  |
| hiv_test | char(1) | YES |  | NULL |  |  |
| hiv_test_antibody_test_type_name | varchar(200) | YES |  | NULL |  |  |
| vct_patient_register_hiv_result_type_id | int(11) | YES |  | NULL |  |  |
| hiv_test_result_date | date | YES |  | NULL |  |  |
| hiv_post_test_counseling | char(1) | YES |  | NULL |  |  |
| hiv_post_test_counseling_date | date | YES |  | NULL |  |  |
| vct_patient_register_group_type_id | int(11) | YES |  | NULL |  |  |
| vct_patient_register_head_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_vct_patient_register_head_id | vct_patient_register_head_id | no | 1 |
| PRIMARY | vct_patient_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
