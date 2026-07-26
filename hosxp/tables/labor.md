# `labor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| laborid | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| hname | varchar(70) | YES |  | NULL |  |  |
| hage | int(11) | YES |  | NULL |  |  |
| haddress | varchar(255) | YES |  | NULL |  |  |
| mother_gvalue | varchar(10) | YES |  | NULL |  |  |
| mother_p1value | varchar(10) | YES |  | NULL |  |  |
| mother_p2value | varchar(10) | YES |  | NULL |  |  |
| mother_avalue | varchar(10) | YES |  | NULL |  |  |
| mother_lvalue | varchar(10) | YES |  | NULL |  |  |
| mother_place | varchar(50) | YES |  | NULL |  |  |
| mother_total | int(11) | YES |  | NULL |  |  |
| mother_lmp | varchar(10) | YES |  | NULL |  |  |
| mother_edc | varchar(10) | YES |  | NULL |  |  |
| mother_aging | int(11) | YES |  | NULL |  |  |
| mother_vdrl | varchar(10) | YES |  | NULL |  |  |
| mother_hiv | varchar(10) | YES |  | NULL |  |  |
| mother_hbsag | varchar(10) | YES |  | NULL |  |  |
| mother_hct | varchar(10) | YES |  | NULL |  |  |
| mother_thalassemia | varchar(10) | YES |  | NULL |  |  |
| labour_spontaneous | char(1) | YES |  | NULL |  |  |
| labour_induced | char(1) | YES |  | NULL |  |  |
| labour_augmentation | char(1) | YES |  | NULL |  |  |
| labour_starttime | time | YES |  | NULL |  |  |
| labour_startdate | date | YES |  | NULL |  |  |
| labour_closetime | time | YES |  | NULL |  |  |
| labour_closedate | date | YES |  | NULL |  |  |
| labour_finishtime | time | YES |  | NULL |  |  |
| labour_finishdate | date | YES |  | NULL |  |  |
| labour_othertime | time | YES |  | NULL |  |  |
| labour_otherdate | date | YES |  | NULL |  |  |
| labour_firststagehour | int(11) | YES |  | NULL |  |  |
| labour_firststageminute | int(11) | YES |  | NULL |  |  |
| labour_secondstagehour | int(11) | YES |  | NULL |  |  |
| labour_secondstageminute | int(11) | YES |  | NULL |  |  |
| labour_thirdstagehour | int(11) | YES |  | NULL |  |  |
| labour_thirdstageminute | int(11) | YES |  | NULL |  |  |
| labour_totalhour | int(11) | YES |  | NULL |  |  |
| labour_totalminute | int(11) | YES |  | NULL |  |  |
| labour_allhour | int(11) | YES |  | NULL |  |  |
| labour_allminute | int(11) | YES |  | NULL |  |  |
| labour_drug_mo | char(1) | YES |  | NULL |  |  |
| labour_drug_mo_desc | varchar(40) | YES |  | NULL |  |  |
| labour_drug_phenergan | char(1) | YES |  | NULL |  |  |
| labour_drug_phenergen_desc | varchar(40) | YES |  | NULL |  |  |
| labour_drug_pethidine | char(1) | YES |  | NULL |  |  |
| labour_drug_pethidine_desc | varchar(40) | YES |  | NULL |  |  |
| labour_drug_other | char(1) | YES |  | NULL |  |  |
| labour_drug_other_desc | varchar(255) | YES |  | NULL |  |  |
| membrane_starttime | time | YES |  | NULL |  |  |
| membrane_startdate | date | YES |  | NULL |  |  |
| membrane_arm | char(1) | YES |  | NULL |  |  |
| membrane_spontancous | char(1) | YES |  | NULL |  |  |
| membrane_clear | char(1) | YES |  | NULL |  |  |
| membrane_mild | char(1) | YES |  | NULL |  |  |
| membrane_moderate | char(1) | YES |  | NULL |  |  |
| membrane_thick | char(1) | YES |  | NULL |  |  |
| labor_type | varchar(20) | YES |  | NULL |  |  |
| labor_indication | varchar(20) | YES |  | NULL |  |  |
| perineum_type | varchar(20) | YES |  | NULL |  |  |
| perineum_desc | varchar(20) | YES |  | NULL |  |  |
| placenta_howto | varchar(20) | YES |  | NULL |  |  |
| placenta_weight | int(11) | YES |  | NULL |  |  |
| placenta_side | int(11) | YES |  | NULL |  |  |
| placenta_wide | int(11) | YES |  | NULL |  |  |
| placenta_length | int(11) | YES |  | NULL |  |  |
| placenta_neck | int(11) | YES |  | NULL |  |  |
| placenta_desc | varchar(255) | YES |  | NULL |  |  |
| placenta_height | int(11) | YES |  | NULL |  |  |
| placenta_bloodloss | int(11) | YES |  | NULL |  |  |
| placenta_dd | varchar(10) | YES |  | NULL |  |  |
| placenta_heart | int(11) | YES |  | NULL |  |  |
| placenta_drug_methergin | char(1) | YES |  | NULL |  |  |
| placenta_drug_methergin_desc | varchar(10) | YES |  | NULL |  |  |
| placenta_drug_other | char(1) | YES |  | NULL |  |  |
| placenta_drug_desc | varchar(10) | YES |  | NULL |  |  |
| placenta_drug_methergin_who | varchar(30) | YES |  | NULL |  |  |
| placenta_drug_who | varchar(30) | YES |  | NULL |  |  |
| placenta_drug_other_desc | varchar(30) | YES |  | NULL |  |  |
| infant_sex | char(1) | YES |  | NULL |  |  |
| infant_weight | double(15,3) | YES |  | NULL |  |  |
| infant_head | double(15,3) | YES |  | NULL |  |  |
| infant_bb | double(15,3) | YES |  | NULL |  |  |
| infant_length | double(15,3) | YES |  | NULL |  |  |
| infant_tempo | varchar(5) | YES |  | NULL |  |  |
| infant_breath | int(11) | YES |  | NULL |  |  |
| infant_room | varchar(5) | YES |  | NULL |  |  |
| infant_desc | varchar(255) | YES |  | NULL |  |  |
| infant_apgarscore1 | int(11) | YES |  | NULL |  |  |
| infant_apgarscore5 | int(11) | YES |  | NULL |  |  |
| infant_apgarscore10 | int(11) | YES |  | NULL |  |  |
| infant_abnormality | char(1) | YES |  | NULL |  |  |
| infant_abnormality_desc | varchar(255) | YES |  | NULL |  |  |
| infant_help | varchar(5) | YES |  | NULL |  |  |
| infant_help_o2tubing | char(1) | YES |  | NULL |  |  |
| infant_help_o2bagcmask | char(1) | YES |  | NULL |  |  |
| infant_help_o2ettube | char(1) | YES |  | NULL |  |  |
| infant_medication | varchar(255) | YES |  | NULL |  |  |
| infant_terramycin | char(1) | YES |  | NULL |  |  |
| infant_vitk1 | char(1) | YES |  | NULL |  |  |
| infant_hbvac | char(1) | YES |  | NULL |  |  |
| infant_hbig | char(1) | YES |  | NULL |  |  |
| note_effect | char(1) | YES |  | NULL |  |  |
| note_effect_desc | varchar(255) | YES |  | NULL |  |  |
| labor_who | varchar(10) | YES |  | NULL |  |  |
| labor_cleaning | varchar(10) | YES |  | NULL |  |  |
| labor_record | varchar(10) | YES |  | NULL |  |  |
| labor_doctor | varchar(10) | YES |  | NULL |  |  |
| mother_method | char(1) | YES |  | NULL |  |  |
| labour_drug_mo_date | date | YES |  | NULL |  |  |
| labour_drug_mo_time | time | YES |  | NULL |  |  |
| labour_drug_phenergan_date | date | YES |  | NULL |  |  |
| labour_drug_phenergan_time | time | YES |  | NULL |  |  |
| labour_drug_pethidine_date | date | YES |  | NULL |  |  |
| labour_drug_pethidine_time | time | YES |  | NULL |  |  |
| membrane_arm_method | char(1) | YES |  | NULL |  |  |
| membrane_descrip | char(1) | YES |  | NULL |  |  |
| placenta_drug_methergin_date | date | YES |  | NULL |  |  |
| placenta_drug_methergin_time | time | YES |  | NULL |  |  |
| mother_lmp_date | date | YES |  | NULL |  |  |
| mother_edc_date | date | YES |  | NULL |  |  |
| infant2_sex | char(1) | YES |  | NULL |  |  |
| infant2_weight | int(11) | YES |  | NULL |  |  |
| infant2_head | int(11) | YES |  | NULL |  |  |
| infant2_bb | int(11) | YES |  | NULL |  |  |
| infant2_length | int(11) | YES |  | NULL |  |  |
| infant2_tempo | varchar(5) | YES |  | NULL |  |  |
| infant2_breath | int(11) | YES |  | NULL |  |  |
| infant2_room | varchar(5) | YES |  | NULL |  |  |
| infant2_desc | varchar(255) | YES |  | NULL |  |  |
| infant2_apgarscore1 | int(11) | YES |  | NULL |  |  |
| infant2_apgarscore5 | int(11) | YES |  | NULL |  |  |
| infant2_apgarscore10 | int(11) | YES |  | NULL |  |  |
| infant2_abnormality | char(1) | YES |  | NULL |  |  |
| infant2_abnormality_desc | varchar(255) | YES |  | NULL |  |  |
| infant2_help | varchar(5) | YES |  | NULL |  |  |
| infant2_help_o2tubing | char(1) | YES |  | NULL |  |  |
| infant2_help_o2bagcmask | char(1) | YES |  | NULL |  |  |
| infant2_help_o2ettube | char(1) | YES |  | NULL |  |  |
| infant2_medication | varchar(255) | YES |  | NULL |  |  |
| infant2_terramycin | char(1) | YES |  | NULL |  |  |
| infant2_vitk1 | char(1) | YES |  | NULL |  |  |
| infant2_hbvac | char(1) | YES |  | NULL |  |  |
| infant2_hbig | char(1) | YES |  | NULL |  |  |
| infant3_sex | char(1) | YES |  | NULL |  |  |
| infant3_weight | int(11) | YES |  | NULL |  |  |
| infant3_head | int(11) | YES |  | NULL |  |  |
| infant3_bb | int(11) | YES |  | NULL |  |  |
| infant3_length | int(11) | YES |  | NULL |  |  |
| infant3_tempo | varchar(5) | YES |  | NULL |  |  |
| infant3_breath | int(11) | YES |  | NULL |  |  |
| infant3_room | varchar(5) | YES |  | NULL |  |  |
| infant3_desc | varchar(255) | YES |  | NULL |  |  |
| infant3_apgarscore1 | int(11) | YES |  | NULL |  |  |
| infant3_apgarscore5 | int(11) | YES |  | NULL |  |  |
| infant3_apgarscore10 | int(11) | YES |  | NULL |  |  |
| infant3_abnormality | char(1) | YES |  | NULL |  |  |
| infant3_abnormality_desc | varchar(255) | YES |  | NULL |  |  |
| infant3_help | varchar(5) | YES |  | NULL |  |  |
| infant3_help_o2tubing | char(1) | YES |  | NULL |  |  |
| infant3_help_o2bagcmask | char(1) | YES |  | NULL |  |  |
| infant3_help_o2ettube | char(1) | YES |  | NULL |  |  |
| infant3_medication | varchar(255) | YES |  | NULL |  |  |
| infant3_terramycin | char(1) | YES |  | NULL |  |  |
| infant3_vitk1 | char(1) | YES |  | NULL |  |  |
| infant3_hbvac | char(1) | YES |  | NULL |  |  |
| infant3_hbig | char(1) | YES |  | NULL |  |  |
| labor_guid | varchar(38) | YES | MUL | NULL |  |  |
| sulture_doctor | varchar(9) | YES |  | NULL |  |  |
| entry_staff | varchar(25) | YES |  | NULL |  |  |
| labour_cervical_3cm_time | time | YES |  | NULL |  |  |
| labour_cervical_3cm_date | date | YES |  | NULL |  |  |
| labour_cervical_time | time | YES |  | NULL |  |  |
| labour_cervical_date | date | YES |  | NULL |  |  |
| perineum_type_id | int(11) | YES |  | NULL |  |  |
| sulture_type_id | int(11) | YES |  | NULL |  |  |
| placenta_type_id | int(11) | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| placenta_bps | double(15,3) | YES |  | NULL |  |  |
| placenta_bpd | double(15,3) | YES |  | NULL |  |  |
| labour_placenta_desc_id | int(11) | YES |  | NULL |  |  |
| drip_synto_dose | varchar(10) | YES |  | NULL |  |  |
| drip_synto_date | date | YES |  | NULL |  |  |
| drip_synto_time | time | YES |  | NULL |  |  |
| drip_pethidine_dose | varchar(10) | YES |  | NULL |  |  |
| drip_pethidine_date | date | YES |  | NULL |  |  |
| drip_pethidine_time | time | YES |  | NULL |  |  |
| drip_methergine_dose | varchar(10) | YES |  | NULL |  |  |
| drip_methergine_date | date | YES |  | NULL |  |  |
| drip_methergine_time | time | YES |  | NULL |  |  |
| drip_oxytocin_dose | varchar(20) | YES |  | NULL |  |  |
| drip_oxytocin_date | date | YES |  | NULL |  |  |
| drip_oxytocin_time | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an_unique | an | yes | 1 |
| ix_labor_guid | labor_guid | no | 1 |
| PRIMARY | laborid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
