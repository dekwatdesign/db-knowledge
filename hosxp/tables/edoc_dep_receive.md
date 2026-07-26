# `edoc_dep_receive`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_dep_receive_id | int(11) | NO | PRI | 0 |  |  |
| edoc_id | int(11) | YES | MUL | NULL |  |  |
| hospital_department_id | int(11) | YES |  | NULL |  |  |
| receive_datetime | datetime | YES |  | NULL |  |  |
| receive_staff | varchar(25) | YES |  | NULL |  |  |
| receive_no | varchar(25) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES | UNI | NULL |  |  |
| emp_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | edoc_id | yes | 1 |
| ix_unique | hospital_department_id | yes | 2 |
| ix_unique_index | emp_dep_id | yes | 1 |
| PRIMARY | edoc_dep_receive_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
