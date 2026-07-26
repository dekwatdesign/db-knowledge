# `work_shift_dep_emp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| work_shift_dep_emp_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES | MUL | NULL |  |  |
| work_shift_dep_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | emp_id | yes | 1 |
| ix_uni | work_shift_dep_id | yes | 2 |
| PRIMARY | work_shift_dep_emp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
