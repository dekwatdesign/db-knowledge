# `emp_segment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_segment_id | int(11) | NO | PRI | 0 |  |  |
| emp_segment_name | varchar(100) | YES |  | NULL |  |  |
| emp_agency_work_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_segment_precis | varchar(20) | YES |  | NULL |  |  |
| emp_org_oldcode | varchar(30) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_segment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
