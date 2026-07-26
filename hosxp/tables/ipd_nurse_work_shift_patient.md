# `ipd_nurse_work_shift_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_work_shift_patient_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_work_shift_id | int(11) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_work_shift_id | ipd_nurse_work_shift_id | no | 1 |
| PRIMARY | ipd_nurse_work_shift_patient_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
