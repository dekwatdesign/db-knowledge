# `hospital_work_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospital_work_shift_id | int(11) | NO | PRI | 0 |  |  |
| hospital_work_shift_date | date | YES |  | NULL |  |  |
| work_shift_dep_id | int(11) | YES |  | NULL |  |  |
| resource_count | int(11) | YES |  | NULL |  |  |
| rank_full | char(1) | YES |  | NULL |  |  |
| resource_wait_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hospital_work_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
