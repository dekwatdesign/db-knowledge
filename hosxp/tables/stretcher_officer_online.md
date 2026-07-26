# `stretcher_officer_online`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_code | varchar(15) | NO | PRI |  |  |  |
| doctor_name | varchar(100) | YES |  | NULL |  |  |
| online_status | varchar(100) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| stretcher_register_id | int(11) | YES | MUL | NULL |  |  |
| stretcher_work_check_in_id | int(11) | YES | MUL | NULL |  |  |
| latitude | varchar(255) | YES |  | NULL |  |  |
| longtitude | varchar(255) | YES |  | NULL |  |  |
| location_update_time | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_stretcher_officer_online_checkin | stretcher_work_check_in_id | no | 1 |
| ix_idx_stretcher_officer_online_register | stretcher_register_id | no | 1 |
| PRIMARY | doctor_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
