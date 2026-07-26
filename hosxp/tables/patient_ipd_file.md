# `patient_ipd_file`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_ipd_file_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| patient_file_status_id | int(11) | YES |  | NULL |  |  |
| last_depcode | char(3) | YES |  | NULL |  |  |
| last_computer | varchar(100) | YES |  | NULL |  |  |
| last_datetime | datetime | YES |  | NULL |  |  |
| last_staff | varchar(50) | YES |  | NULL |  |  |
| rent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| ix_rent_id | rent_id | no | 1 |
| PRIMARY | patient_ipd_file_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
