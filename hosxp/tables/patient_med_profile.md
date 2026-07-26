# `patient_med_profile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_med_profile_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| patient_med_profile_name | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| no_end_date | char(1) | YES |  | NULL |  |  |
| check_order_count | char(1) | YES |  | NULL |  |  |
| order_count | int(11) | YES |  | NULL |  |  |
| real_order_count | int(11) | YES |  | NULL |  |  |
| allow_other_doctor_order | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor_code | no | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | patient_med_profile_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
