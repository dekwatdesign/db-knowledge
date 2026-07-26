# `ckup_pre_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_pre_visit_id | int(11) | NO | PRI | 0 |  |  |
| ckup_pre_visit_vstdate | date | YES |  | NULL |  |  |
| ckup_pre_visit_vsttime | time | YES |  | NULL |  |  |
| ckup_pre_visit_prog_list | varchar(255) | YES |  | NULL |  |  |
| pttype | char(3) | YES |  | NULL |  |  |
| patient_hn | varchar(13) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(255) | YES |  | NULL |  |  |
| ckup_service_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_visit_status_type_id | int(11) | YES | MUL | NULL |  |  |
| ckup_proj_id | int(11) | YES | MUL | NULL |  |  |
| ckup_pre_visit_prog_id | int(11) | YES | MUL | NULL |  |  |
| ckup_pre_visit_add_date | date | YES |  | NULL |  |  |
| ckup_pre_visit_depcode | char(3) | YES |  | NULL |  |  |
| ckup_pre_visit_doctor | varchar(6) | YES |  | NULL |  |  |
| ckup_pre_visit_note | varchar(255) | YES |  | NULL |  |  |
| ckup_pre_lab_order_number | int(11) | YES |  | NULL |  |  |
| ckup_ovst_id | int(11) | YES | MUL | NULL |  |  |
| ckup_pre_lab_order_num_list | varchar(250) | YES |  | NULL |  |  |
| ckup_other_comp_pttype | char(1) | YES |  | NULL |  |  |
| ckup_comp_id | int(11) | YES | MUL | NULL |  |  |
| ckup_pre_visit_ovstist | int(11) | YES |  | NULL |  |  |
| ckup_patient_comp_id | int(11) | YES |  | NULL |  |  |
| pttype_company_contact_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_comp_id | ckup_comp_id | no | 1 |
| ix_ckup_ovst_id | ckup_ovst_id | no | 1 |
| ix_ckup_pre_visit_prog_id | ckup_pre_visit_prog_id | no | 1 |
| ix_ckup_proj_id | ckup_proj_id | no | 1 |
| ix_ckup_service_type_id | ckup_service_type_id | no | 1 |
| ix_ckup_visit_status_type_id | ckup_visit_status_type_id | no | 1 |
| PRIMARY | ckup_pre_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
