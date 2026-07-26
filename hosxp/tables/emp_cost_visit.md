# `emp_cost_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_cost_visit_id | int(11) | NO | PRI | 0 |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| emp_cost_code | varchar(8) | YES |  | NULL |  |  |
| pttype | varchar(2) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| insert_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_cost_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
