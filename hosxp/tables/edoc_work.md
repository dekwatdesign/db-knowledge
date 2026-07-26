# `edoc_work`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_work_id | int(11) | NO | PRI | 0 |  |  |
| edoc_work_name | varchar(200) | YES |  | NULL |  |  |
| edoc_work_status_id | int(11) | YES |  | NULL |  |  |
| edoc_work_detail | text | YES |  | NULL |  |  |
| edoc_work_emp_id | int(11) | YES |  | NULL |  |  |
| edoc_id | int(11) | YES |  | NULL |  |  |
| edoc_work_begin_date | date | YES |  | NULL |  |  |
| edoc_work_end_date | date | YES |  | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| emp_work_updatetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_work_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
