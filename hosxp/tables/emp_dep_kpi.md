# `emp_dep_kpi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_dep_kpi_id | int(11) | NO | PRI | 0 |  |  |
| emp_dep_kpi_name | text | YES |  | NULL |  |  |
| emp_dep_kpi_target_type_id | int(11) | YES |  | NULL |  |  |
| emp_dep_kpi_target | text | YES |  | NULL |  |  |
| emp_dep_kpi_target_unit | varchar(10) | YES |  | NULL |  |  |
| emp_dep_kpi_follow_fq_id | int(11) | YES |  | NULL |  |  |
| emp_dep_kpi_gauging | text | YES |  | NULL |  |  |
| emp_dep_kpi_point | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_dep_kpi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
