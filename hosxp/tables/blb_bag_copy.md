# `blb_bag_copy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_donor_number | varchar(50) | YES |  | NULL |  |  |
| blb_bag_available_date | date | YES |  | NULL |  |  |
| blb_bag_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_lab_status_id | int(11) | YES |  | NULL |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |
| blb_bag_status_id | int(11) | YES | MUL | NULL |  |  |
| blood_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_cc | int(11) | YES |  | NULL |  |  |
| blb_bag_parent | int(11) | YES |  | NULL |  |  |
| blb_bag_lock | char(1) | YES |  | NULL |  |  |
| blb_bag_expire_date | date | YES |  | NULL |  |  |
| blb_bag_mfg_date | date | YES |  | NULL |  |  |
| blb_bag_hh | char(1) | YES |  | NULL |  |  |
| rh_id | int(11) | YES |  | NULL |  |  |
| blb_bag_concentrate | varchar(10) | YES |  | NULL |  |  |
| blb_bag_hgb | varchar(10) | YES |  | NULL |  |  |
| blb_bag_lab_approver | char(1) | YES |  | NULL |  |  |
| blb_bag_lab_approver_date | date | YES |  | NULL |  |  |
| blb_bag_lab_approver_time | time | YES |  | NULL |  |  |
| blb_bag_lab_reporter | varchar(50) | YES |  | NULL |  |  |
| blb_bag_lab_report_date | date | YES |  | NULL |  |  |
| blb_bag_lab_report_time | time | YES |  | NULL |  |  |
| blb_bag_oldcode | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_bag_lab_cell_a | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_cell_b | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_cell_d | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_cell_ab | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_serum_a | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_serum_b | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_serum_o | int(11) | YES |  | NULL |  |  |
| blb_bag_lab_note | varchar(250) | YES |  | NULL |  |  |
| blb_bag_blood_problem | varchar(250) | YES |  | NULL |  |  |
| blb_bag_split_component | char(1) | YES |  | NULL |  |  |
| blb_bag_antibody_result | varchar(250) | YES |  | NULL |  |  |
| blb_bag_lab_approve_doctor | char(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_status_id | blb_bag_status_id | no | 1 |
| ix_blb_bag_type_id | blb_bag_type_id | no | 1 |
| ix_blb_bloodgroup_id | blood_id | no | 1 |
| PRIMARY | blb_bag_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
