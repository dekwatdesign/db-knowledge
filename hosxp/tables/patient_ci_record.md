# `patient_ci_record`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_ci_record_id | int(11) | NO | PRI | 0 |  |  |
| patient_ci_record_vn | varchar(13) | YES | MUL | NULL |  |  |
| patient_ci_record_service_code | varchar(15) | YES | MUL | NULL |  |  |
| patient_ci_record_count | int(11) | YES |  | NULL |  |  |
| patient_ci_record_lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_patient_ci_record_service_code | patient_ci_record_service_code | no | 1 |
| ix_idx_patient_ci_record_vn | patient_ci_record_vn | no | 1 |
| PRIMARY | patient_ci_record_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
