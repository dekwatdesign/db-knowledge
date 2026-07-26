# `work_shift_dep_job`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_dep_job_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_dep_id | int(11) | YES | MUL | NULL |  |  |
| work_shift_job_type_id | int(11) | YES |  | NULL |  |  |
| work_shift_dep_job_name | varchar(200) | YES |  | NULL |  |  |
| work_shift_dep_job_start | time | YES |  | NULL |  |  |
| work_shift_dep_job_finish | time | YES |  | NULL |  |  |
| work_shift_fee_type_id | int(11) | YES |  | NULL |  |  |
| work_shift_fee | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_work_shift_dep_id | work_shift_dep_id | no | 1 |
| PRIMARY | work_shift_dep_job_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
