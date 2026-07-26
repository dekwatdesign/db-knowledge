# `clinic_hd_service_ckd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_ckd_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| assessment_doctor_code | varchar(15) | YES |  | NULL |  |  |
| symptom_doctor_code | varchar(15) | YES |  | NULL |  |  |
| weight_doctor_code | varchar(15) | YES |  | NULL |  |  |
| clinic_hd_asm_va_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_catheter_type | varchar(255) | YES |  | NULL |  |  |
| dialyzer_disinfectant_test | char(1) | YES |  | NULL |  |  |
| dialyzer_kuf | int(11) | YES |  | NULL |  |  |
| dialyzer_surface_area | int(11) | YES |  | NULL |  |  |
| clinic_hd_machine_flow | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_service_ckd_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_service_ckd_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
