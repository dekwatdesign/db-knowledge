# `bb_blood_bag`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_blood_bag_id | int(11) | NO | PRI | 0 |  |  |
| bb_prepare_date | date | YES |  | NULL |  |  |
| bb_blood_bag_unit_id | varchar(11) | YES | UNI | NULL |  |  |
| bb_blood_bag_type_id | int(11) | YES |  | NULL |  |  |
| bb_blood_bag_status_id | int(11) | YES |  | NULL |  |  |
| bb_blood_source_id | int(11) | YES |  | NULL |  |  |
| bb_blood_source_type | char(1) | YES |  | NULL |  |  |
| bb_blood_donor_times | int(11) | YES |  | NULL |  |  |
| bb_blood_group_id | varchar(5) | YES |  | NULL |  |  |
| bb_blood_group_hh | char(1) | YES |  | NULL |  |  |
| bb_blood_group_rh | char(1) | YES |  | NULL |  |  |
| lab_tpha | char(1) | YES |  | NULL |  |  |
| lab_hbsag | char(1) | YES |  | NULL |  |  |
| lab_alt | char(1) | YES |  | NULL |  |  |
| lab_anti_hcv | char(1) | YES |  | NULL |  |  |
| lab_anti_hiv | char(1) | YES |  | NULL |  |  |
| lab_hivag | char(1) | YES |  | NULL |  |  |
| lab_saline | char(1) | YES |  | NULL |  |  |
| lab_papain | char(1) | YES |  | NULL |  |  |
| lab_coombs | char(1) | YES |  | NULL |  |  |
| lab_anta | char(1) | YES |  | NULL |  |  |
| lab_antb | char(1) | YES |  | NULL |  |  |
| lab_hbvnat | char(1) | YES |  | NULL |  |  |
| lab_hcvnat | char(1) | YES |  | NULL |  |  |
| lab_hivnat | char(1) | YES |  | NULL |  |  |
| lab_result_lock | char(1) | YES |  | NULL |  |  |
| bb_lab_usr | varchar(100) | YES |  | NULL |  |  |
| bb_lab_upd | varchar(20) | YES |  | NULL |  |  |
| bb_lab_ipaddr | varchar(16) | YES |  | NULL |  |  |
| bb_department_id | int(11) | YES |  | NULL |  |  |
| bb_blood_subgroup | varchar(10) | YES |  | NULL |  |  |
| bb_blood_self | char(1) | YES |  | NULL |  |  |
| bb_blood_bpds | varchar(10) | YES |  | NULL |  |  |
| bb_blood_con | double(5,2) | YES |  | NULL |  |  |
| bb_branch_id | int(11) | YES |  | NULL |  |  |
| bb_blood_pulse | int(11) | YES |  | NULL |  |  |
| bb_blood_bw | double(4,1) | YES |  | NULL |  |  |
| bb_blood_hb | double(5,2) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| bb_blood_bpd | double(5,2) | YES |  | NULL |  |  |
| bb_blood_bps | double(5,2) | YES |  | NULL |  |  |
| bb_blood_symptom | varchar(30) | YES |  | NULL |  |  |
| lab_otbresult | varchar(15) | YES |  | NULL |  |  |
| lab_note | varchar(200) | YES |  | NULL |  |  |
| lab_otfnote | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_blood_bag_unit_id | bb_blood_bag_unit_id | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_blood_bag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
