# `emp_shift`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_shift_id | int(11) | NO | PRI | 0 |  |  |
| emp_shift_name | varchar(150) | YES | MUL | NULL |  |  |
| time_start | time | YES |  | NULL |  |  |
| time_end | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_nurse_shift_ipd_nurse_shift_name_idx_copy1 | emp_shift_name | no | 1 |
| PRIMARY | emp_shift_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
