# `clinic_hd_service_pcr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_pcr_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_service_pcr_gv_dt | date | YES | MUL | NULL |  |  |
| clinic_hd_service_pcr_sp_dt | date | YES | MUL | NULL |  |  |
| clinic_hd_service_pcr_grp_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_pcr_grp_no | varchar(18) | YES | MUL | NULL |  |  |
| clinic_hd_service_pcr_unit | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_pcr_vol | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_pcr_react | text | YES |  | NULL |  |  |
| clinic_hd_service_pcr_giver_id | varchar(15) | YES |  | NULL |  |  |
| clinic_hd_service_pcr_chk_id | varchar(15) | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| clinic_hd_service_pcr_upd | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_service_pcr_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| ix_idx_clinic_hd_service_pcr_clinic_hd_service_pcr_grp_no | clinic_hd_service_pcr_grp_no | no | 1 |
| ix_idx_clinic_hd_service_pcr_clinic_hd_service_pcr_gv_dt | clinic_hd_service_pcr_gv_dt | no | 1 |
| ix_idx_clinic_hd_service_pcr_clinic_hd_service_pcr_sp_dt | clinic_hd_service_pcr_sp_dt | no | 1 |
| ix_idx_clinic_hd_service_pcr_staff | staff | no | 1 |
| PRIMARY | clinic_hd_service_pcr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
