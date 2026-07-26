# `clinic_ckd_gfr_type_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_ckd_gfr_type_log_id | int(11) | NO | PRI | 0 |  |  |
| clinic_ckd_member_id | int(11) | YES |  | NULL |  |  |
| clinic_ckd_gfr_type_log_date | date | YES |  | NULL |  |  |
| clinic_ckd_gfr_type_log_time | time | YES |  | NULL |  |  |
| clinic_ckd_gfr_type_log_doctor | varchar(15) | YES |  | NULL |  |  |
| old_clinic_ckd_gfr_type_id | int(11) | YES |  | NULL |  |  |
| new_clinic_ckd_gfr_type_id | int(11) | YES |  | NULL |  |  |
| clinic_ckd_gfr_type_log_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | clinic_ckd_gfr_type_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
