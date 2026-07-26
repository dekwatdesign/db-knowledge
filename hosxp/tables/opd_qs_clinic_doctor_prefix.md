# `opd_qs_clinic_doctor_prefix`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_clinic_doctor_prefix_id | int(11) | NO | PRI | 0 |  |  |
| clinic | varchar(3) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| queue_prefix | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_doctor | clinic | yes | 1 |
| ix_clinic_doctor | doctor_code | yes | 2 |
| PRIMARY | opd_qs_clinic_doctor_prefix_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
