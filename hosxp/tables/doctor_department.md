# `doctor_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_department_id | int(11) | NO | PRI | 0 |  |  |
| doctor_department_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_department_name | doctor_department_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | doctor_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
