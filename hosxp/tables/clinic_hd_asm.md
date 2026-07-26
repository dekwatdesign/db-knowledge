# `clinic_hd_asm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_asm_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| clinic_hd_member_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_asm_visit_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_visit_time | time | YES |  | NULL |  |  |
| clinic_hd_asm_visit_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_year | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_staff | varchar(15) | YES |  | NULL |  |  |
| clinic_hd_asm_pttype | char(2) | YES | MUL | NULL |  |  |
| clinic_hd_asm_occupation | varchar(255) | YES | MUL | NULL |  |  |
| clinic_hd_asm_income | double(18,2) | YES |  | NULL |  |  |
| clinic_hd_asm_dx_main | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_dx_other | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_capd_start | date | YES |  | NULL |  |  |
| clinic_hd_asm_hd_start | date | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_dm | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_ht | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_pkd | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_toxic | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_herb | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_inf_prev | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_cath_infect | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_no_cg | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_esrd_high_trans | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_va_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_va_made_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_va_start_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_va_hosp | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_va_surgeon | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_va_comp_prev | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_va_dlc | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_va_dlc_side_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_hbsag | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_anti_hbs | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_anti_hcv | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_hbs_titer | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_vac_flu | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_vac_flu_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_vac_pneumo | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_vac_pneumo_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_vac_hepb | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_vac_hepb_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_tx_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_tx_hosp | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_ptd_surg | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_ptd_surg_date | date | YES |  | NULL |  |  |
| clinic_hd_asm_ptd_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_ptd_surg_hosp | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_bone_fx | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_bone_fx_pos | int(11) | YES |  | NULL |  |  |
| clinic_hd_asm_cabg_pci | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_cabg_pci_hosp | varchar(255) | YES |  | NULL |  |  |
| clinic_hd_asm_adm_last_y | char(1) | YES |  | NULL |  |  |
| clinic_hd_asm_adm_reason | varchar(255) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_asm_clinic_hd_asm_occupation | clinic_hd_asm_occupation | no | 1 |
| ix_idx_clinic_hd_asm_clinic_hd_asm_pttype | clinic_hd_asm_pttype | no | 1 |
| ix_idx_clinic_hd_asm_clinic_hd_member_id | clinic_hd_member_id | no | 1 |
| ix_idx_clinic_hd_asm_vn | vn | no | 1 |
| PRIMARY | clinic_hd_asm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
