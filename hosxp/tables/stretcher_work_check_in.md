# `stretcher_work_check_in`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_work_check_in_id | int(11) | NO | PRI | 0 |  |  |
| stretcher_work_check_in_date | date | YES | MUL | NULL |  |  |
| check_in_datetime | datetime | YES |  | NULL |  |  |
| check_out_datetime | datetime | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| stretcher_service_id | int(11) | YES | MUL | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_work_check_in_date | stretcher_work_check_in_date | no | 1 |
| ix_idx_stretcher_work_check_in_doctor | doctor_code | no | 1 |
| ix_idx_stretcher_work_check_in_nurse_shift | ipd_nurse_shift_id | no | 1 |
| ix_idx_stretcher_work_check_in_service | stretcher_service_id | no | 1 |
| PRIMARY | stretcher_work_check_in_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
