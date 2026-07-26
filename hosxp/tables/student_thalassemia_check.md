# `student_thalassemia_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_thalassemia_check_id | int(11) | NO | PRI | 0 |  |  |
| student_thalassemia_check_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_student_thalassemia_check_name | student_thalassemia_check_name | yes | 1 |
| PRIMARY | student_thalassemia_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
