# `stretcher_change_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stretcher_change_log_id | char(20) | NO | PRI |  |  |  |
| stretcher_change_status | varchar(20) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| stretcher_register_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_work_status_id | int(11) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_change_log_doctor | doctor_code | no | 1 |
| ix_idx_stretcher_change_log_register | stretcher_register_id | no | 1 |
| ix_idx_stretcher_change_log_work | stretcher_work_status_id | no | 1 |
| PRIMARY | stretcher_change_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
