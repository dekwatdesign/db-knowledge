# `patient_med_profile_hist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_med_profile_hist_id | int(11) | NO | PRI | 0 |  |  |
| patient_med_profile_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| order_datetime | datetime | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | patient_med_profile_id | no | 1 |
| PRIMARY | patient_med_profile_hist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
