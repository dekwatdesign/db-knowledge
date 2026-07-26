# `patient_opd_file_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_opd_file_log_id | int(11) | NO | PRI | 0 |  |  |
| rent_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_rent_id | rent_id | no | 1 |
| PRIMARY | patient_opd_file_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
