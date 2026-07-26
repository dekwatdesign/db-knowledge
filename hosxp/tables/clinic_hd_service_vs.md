# `clinic_hd_service_vs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_service_vs_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_vs_opds_bp | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_service_vs_ap | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_vs_sc | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_vs_type_id | int(11) | YES |  | NULL |  |  |
| clinic_hd_service_vs_screener | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_service_vs_clinic_hd_service_vs_opds_bp | clinic_hd_service_vs_opds_bp | no | 1 |
| PRIMARY | clinic_hd_service_vs_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
