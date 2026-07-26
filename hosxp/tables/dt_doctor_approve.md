# `dt_doctor_approve`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_doctor_approve_id | int(11) | NO | PRI | 0 |  |  |
| dt_doctor_approve_date | datetime | YES |  | NULL |  |  |
| dt_doctor_approve_comment | text | YES |  | NULL |  |  |
| doctorcode | varchar(20) | YES |  | NULL |  |  |
| doctor_approve | varchar(20) | YES |  | NULL |  |  |
| dt_dep_id | int(11) | YES |  | NULL |  |  |
| dt_depcode | varchar(10) | YES |  | NULL |  |  |
| dt_doctor_approve_status_id | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_doctor_approve_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
