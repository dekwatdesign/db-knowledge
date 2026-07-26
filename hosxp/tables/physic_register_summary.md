# `physic_register_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_register_summary_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_summary_date | date | YES |  | NULL |  |  |
| physic_register_summary_note | text | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| lack_of_treatment_chk | char(1) | YES |  | NULL |  |  |
| satisfy_chk | char(1) | YES |  | NULL |  |  |
| vas_chk | char(1) | YES |  | NULL |  |  |
| vas_value | int(11) | YES |  | NULL |  |  |
| vas_last_date | date | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| refer_hospcode | varchar(9) | YES |  | NULL |  |  |
| sum_before_vas | int(11) | YES |  | NULL |  |  |
| sum_after_vas | int(11) | YES |  | NULL |  |  |
| sum_before_quality | int(11) | YES |  | NULL |  |  |
| sum_after_quality | int(11) | YES |  | NULL |  |  |
| goal_chk | char(1) | YES |  | NULL |  |  |
| homeprogram_chk | char(1) | YES |  | NULL |  |  |
| out_manual_chk | char(1) | YES |  | NULL |  |  |
| work_cgp_chk | char(1) | YES |  | NULL |  |  |
| transfer_chk | char(1) | YES |  | NULL |  |  |
| ambulation_chk | char(1) | YES |  | NULL |  |  |
| rom_to_function_chk | char(1) | YES |  | NULL |  |  |
| to_function_f_value | float | YES |  | NULL |  |  |
| to_function_ab_value | float | YES |  | NULL |  |  |
| to_function_ir_value | float | YES |  | NULL |  |  |
| to_function_er_value | float | YES |  | NULL |  |  |
| adl_chk | char(1) | YES |  | NULL |  |  |
| clinical_improve_o2_chk | char(1) | YES |  | NULL |  |  |
| clinical_improve_cxr_chk | char(1) | YES |  | NULL |  |  |
| clinical_improve_lung_chk | char(1) | YES |  | NULL |  |  |
| audit_first_assess | char(1) | YES |  | NULL |  |  |
| audit_reassess_soap | char(1) | YES |  | NULL |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| physic_pe_patient_type_id | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| treatment_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxphysic_register_summary_patient_type | physic_pe_patient_type_id | no | 1 |
| ix_idxphysic_register_summary_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_register_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
