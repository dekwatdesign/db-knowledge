# `clinic_hd_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_problem_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_service_id | int(11) | YES | MUL | NULL |  |  |
| clinic_hd_problem_date | date | YES | MUL | NULL |  |  |
| clinic_hd_problem_time | time | YES |  | NULL |  |  |
| clinic_hd_problem_recorder | varchar(255) | YES | MUL | NULL |  |  |
| clinic_hd_problem_note | text | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_clinic_hd_problem_clinic_hd_problem_date | clinic_hd_problem_date | no | 1 |
| ix_idx_clinic_hd_problem_clinic_hd_problem_recorder | clinic_hd_problem_recorder | no | 1 |
| ix_idx_clinic_hd_problem_clinic_hd_service_id | clinic_hd_service_id | no | 1 |
| PRIMARY | clinic_hd_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
