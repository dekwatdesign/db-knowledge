# `tb_hhc_plan_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_plan_drug_id | int(11) | NO | PRI | 0 |  |  |
| tb_plan_drug_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_status_id | int(11) | YES |  | NULL |  |  |
| tb_phase_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_intense_name_drug | int(11) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_intense_begin_date | date | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_intense_end_date | date | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_continue_name_drug | int(11) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_continue_begin_date | date | YES |  | NULL |  |  |
| tb_hhc_plan_drug_phase_continue_end_date | date | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_without | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_rash | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_jointpain | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_amblyopia | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_yelloweyes | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_jaundice | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_tinnitus | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_other | char(1) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_effect_drug_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_hhc_sympton_common_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_sympton_common_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_hhc_feed_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_feed_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_hhc_feed_drug_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_feed_drug_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_hhc_drug_cases_rest | int(11) | YES |  | NULL |  |  |
| tb_hhc_urine_color_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_urine_color_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_officer_visit | varchar(6) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_last_update | datetime | YES |  | NULL |  |  |
| tb_hhc_plan_drug_user_save | varchar(6) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_date_visit | date | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| tb_hhc_plan_drug_time_visit | time | YES |  | NULL |  |  |
| tb_hhc_plan_drug_status_use | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_plan_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
