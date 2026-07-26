# `sti_patient_std`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_std_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | UNI | NULL |  |  |
| patient_type | char(2) | YES |  | NULL |  |  |
| check_staff_service | char(1) | YES |  | NULL |  |  |
| check_tg | char(1) | YES |  | NULL |  |  |
| check_tg_sexchanges | char(1) | YES |  | NULL |  |  |
| check_location | char(1) | YES |  | NULL |  |  |
| sent_agency_check | char(1) | YES |  | NULL |  |  |
| agency_name | varchar(50) | YES |  | NULL |  |  |
| sent_agency_code | varchar(30) | YES |  | NULL |  |  |
| check_health | char(1) | YES |  | NULL |  |  |
| check_abnormally | char(1) | YES |  | NULL |  |  |
| check_sent_check | char(1) | YES |  | NULL |  |  |
| check_mandatory | char(1) | YES |  | NULL |  |  |
| mamdatory_name | varchar(100) | YES |  | NULL |  |  |
| check_track | char(1) | YES |  | NULL |  |  |
| track_num | varchar(30) | YES |  | NULL |  |  |
| check_track_result | char(1) | YES |  | NULL |  |  |
| check_result | char(1) | YES |  | NULL |  |  |
| check_other | char(1) | YES |  | NULL |  |  |
| other | varchar(100) | YES |  | NULL |  |  |
| check_havesex | char(1) | YES |  | NULL |  |  |
| check_sex_one_more | char(1) | YES |  | NULL |  |  |
| check_new_sex | char(1) | YES |  | NULL |  |  |
| check_coplesex_std | char(1) | YES |  | NULL |  |  |
| check_no_condom | char(1) | YES |  | NULL |  |  |
| check_rpr | char(1) | YES |  | NULL |  |  |
| check_non_reactive | char(1) | YES |  | NULL |  |  |
| check_weakly_reactive | char(1) | YES |  | NULL |  |  |
| check_reactive | char(1) | YES |  | NULL |  |  |
| reactive_num | char(10) | YES |  | NULL |  |  |
| check_rapidtest | char(1) | YES |  | NULL |  |  |
| check_rapid_non | char(1) | YES |  | NULL |  |  |
| check_rapid_reactive | char(1) | YES |  | NULL |  |  |
| check_confirmation | char(1) | YES |  | NULL |  |  |
| check_confirm_non | char(1) | YES |  | NULL |  |  |
| check_confirm_reactive | char(1) | YES |  | NULL |  |  |
| check_gram_stain | char(1) | YES |  | NULL |  |  |
| check_gram_normal | char(1) | YES |  | NULL |  |  |
| check_gnid | char(1) | YES |  | NULL |  |  |
| check_pmn | char(1) | YES |  | NULL |  |  |
| pmn | char(20) | YES |  | NULL |  |  |
| check_gram_other | char(1) | YES |  | NULL |  |  |
| gram_other | varchar(30) | YES |  | NULL |  |  |
| check_wet_smear | char(1) | YES |  | NULL |  |  |
| check_wet_normal | char(1) | YES |  | NULL |  |  |
| check_vaginalis | char(1) | YES |  | NULL |  |  |
| check_clue_cell | char(1) | YES |  | NULL |  |  |
| check_wet_other | char(1) | YES |  | NULL |  |  |
| wet_other | varchar(50) | YES |  | NULL |  |  |
| check_pap_smear | char(1) | YES |  | NULL |  |  |
| check_pap_normal | char(1) | YES |  | NULL |  |  |
| check_hpv | char(1) | YES |  | NULL |  |  |
| check_pap_vaginalis | char(1) | YES |  | NULL |  |  |
| check_cytoloty_abnormlities | char(1) | YES |  | NULL |  |  |
| check_pap_other | char(1) | YES |  | NULL |  |  |
| pap_other | varchar(50) | YES |  | NULL |  |  |
| check_use_counseling | char(1) | YES |  | NULL |  |  |
| check_use_service | char(1) | YES |  | NULL |  |  |
| check_pretest | char(1) | YES |  | NULL |  |  |
| pretest_duration | char(20) | YES |  | NULL |  |  |
| check_hiv | char(1) | YES |  | NULL |  |  |
| hiv_duration | char(20) | YES |  | NULL |  |  |
| check_posttest | char(1) | YES |  | NULL |  |  |
| posttest | char(20) | YES |  | NULL |  |  |
| check_result_hiv | char(1) | YES |  | NULL |  |  |
| result_hiv_duration | char(1) | YES |  | NULL |  |  |
| check_begin_Infection | char(1) | YES |  | NULL |  |  |
| check_not_care1 | char(1) | YES |  | NULL |  |  |
| check_recurrent | char(1) | YES |  | NULL |  |  |
| check_not_care2 | char(1) | YES |  | NULL |  |  |
| check_syphilis | char(1) | YES |  | NULL |  |  |
| check_not_care3 | char(1) | YES |  | NULL |  |  |
| check_syphilis2 | char(1) | YES |  | NULL |  |  |
| check_not_care4 | char(1) | YES |  | NULL |  |  |
| check_syphilis_below2 | char(1) | YES |  | NULL |  |  |
| check_not_care5 | char(1) | YES |  | NULL |  |  |
| check_syphilis_more2 | char(1) | YES |  | NULL |  |  |
| check_not_care6 | char(1) | YES |  | NULL |  |  |
| check_not_time | char(1) | YES |  | NULL |  |  |
| check_not_care7 | char(1) | YES |  | NULL |  |  |
| check_chancroid | char(1) | YES |  | NULL |  |  |
| check_not_care8 | char(1) | YES |  | NULL |  |  |
| check_gonorrhea | char(1) | YES |  | NULL |  |  |
| check_not_care9 | char(1) | YES |  | NULL |  |  |
| check_gonorrhea_incurrent | char(1) | YES |  | NULL |  |  |
| check_not_care10 | char(1) | YES |  | NULL |  |  |
| check_pseudogonorrh | char(1) | YES |  | NULL |  |  |
| check_not_care11 | char(1) | YES |  | NULL |  |  |
| check_trichomoniasis | char(1) | YES |  | NULL |  |  |
| check_not_care12 | char(1) | YES |  | NULL |  |  |
| chek_lgv | char(1) | YES |  | NULL |  |  |
| check_not_care13 | char(1) | YES |  | NULL |  |  |
| check_Warts | char(1) | YES |  | NULL |  |  |
| check_not_care14 | char(1) | YES |  | NULL |  |  |
| check_syphilis_other | char(1) | YES |  | NULL |  |  |
| sypilis_other | varchar(50) | YES |  | NULL |  |  |
| check_not_care15 | char(1) | YES |  | NULL |  |  |
| check_protect | char(1) | YES |  | NULL |  |  |
| check_sti | char(1) | YES |  | NULL |  |  |
| check_sex | char(1) | YES |  | NULL |  |  |
| check_not_sex | char(1) | YES |  | NULL |  |  |
| check_sex_service | char(1) | YES |  | NULL |  |  |
| check_Wife_Husband | char(1) | YES |  | NULL |  |  |
| check_sex_daily | char(1) | YES |  | NULL |  |  |
| check_sex_temporarily | char(1) | YES |  | NULL |  |  |
| check_sex_buy | char(1) | YES |  | NULL |  |  |
| check_sex_other | char(1) | YES |  | NULL |  |  |
| check_deposit_medicine | char(1) | YES |  | NULL |  |  |
| amount1 | int(11) | YES |  | NULL |  |  |
| check_together | char(1) | YES |  | NULL |  |  |
| amount2 | int(11) | YES |  | NULL |  |  |
| check_doc_track | char(1) | YES |  | NULL |  |  |
| doc_track_num | varchar(30) | YES |  | NULL |  |  |
| amount3 | int(11) | YES |  | NULL |  |  |
| check_howto_other | char(10) | YES |  | NULL |  |  |
| howto_other | varchar(30) | YES |  | NULL |  |  |
| amount4 | int(11) | YES |  | NULL |  |  |
| check_use_condom | char(1) | YES |  | NULL |  |  |
| condom_size49 | int(11) | YES |  | NULL |  |  |
| condom_size52 | int(11) | YES |  | NULL |  |  |
| condom_size54 | int(11) | YES |  | NULL |  |  |
| amount_unknow | int(11) | YES |  | NULL |  |  |
| condom_size_unknow | int(11) | YES |  | NULL |  |  |
| lubricant | int(11) | YES |  | NULL |  |  |
| check_pretest_counseling | char(1) | YES |  | NULL |  |  |
| check_hiv_testing | char(1) | YES |  | NULL |  |  |
| check_posttest_counseling | char(1) | YES |  | NULL |  |  |
| check_antibody | char(1) | YES |  | NULL |  |  |
| howto_anti_hiv | varchar(50) | YES |  | NULL |  |  |
| check_negative | char(1) | YES |  | NULL |  |  |
| check_indeterminate | char(1) | YES |  | NULL |  |  |
| check_positive | char(1) | YES |  | NULL |  |  |
| check_result_cd4 | char(1) | YES |  | NULL |  |  |
| result_cd4 | varchar(30) | YES |  | NULL |  |  |
| result_cd4_date | datetime | YES |  | NULL |  |  |
| check_result_sent_agency | char(1) | YES |  | NULL |  |  |
| sent_agency_name | varchar(50) | YES |  | NULL |  |  |
| due_date | datetime | YES |  | NULL |  |  |
| status | char(1) | YES |  | NULL |  |  |
| check_doc_track_orther | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn_unique | vn | yes | 1 |
| PRIMARY | patient_std_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
