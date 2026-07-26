# `clinic_hd_progress`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_progress_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_progress_date | date | YES | MUL | NULL |  |  |
| clinic_hd_progress_time | time | YES |  | NULL |  |  |
| clinic_hd_progress_recorder | varchar(15) | YES | MUL | NULL |  |  |
| clinic_hd_progress_type | varchar(255) | YES | MUL | NULL |  |  |
| clinic_hd_progress_note | text | YES |  | NULL |  |  |
| clinic_hd_progress_management | text | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_progress_clinic_hd_progress_date | clinic_hd_progress_date | no | 1 |
| ix_idx_clinic_hd_progress_clinic_hd_progress_recorder | clinic_hd_progress_recorder | no | 1 |
| ix_idx_clinic_hd_progress_clinic_hd_progress_type | clinic_hd_progress_type | no | 1 |
| ix_idx_clinic_hd_progress_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_progress_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
