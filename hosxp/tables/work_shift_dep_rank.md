# `work_shift_dep_rank`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_dep_rank_id | int(11) | NO | PRI | 0 |  |  |
| work_shift_rank_day_id | int(11) | YES | MUL | NULL |  |  |
| work_shift_dep_job_id | int(11) | YES | MUL | NULL |  |  |
| work_shift_dep_rank_qty | int(11) | YES |  | NULL |  |  |
| work_shift_dep_id | int(11) | YES | MUL | NULL |  |  |
| work_shift_time_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | work_shift_rank_day_id | yes | 1 |
| ix_uni | work_shift_dep_job_id | yes | 2 |
| ix_uni_index | work_shift_dep_job_id | yes | 1 |
| ix_uni_index | work_shift_rank_day_id | yes | 2 |
| ix_uni_index | work_shift_time_type_id | yes | 3 |
| ix_work_shift_dep_id | work_shift_dep_id | no | 1 |
| ix_work_shift_dep_job_id | work_shift_dep_job_id | no | 1 |
| PRIMARY | work_shift_dep_rank_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
