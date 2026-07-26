# `oapp_moph_appointment_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_moph_appointment_log_id | int(11) | NO | PRI | NULL |  |  |
| oapp_id | int(11) | NO | MUL | NULL |  |  |
| appointment_date | date | NO |  | NULL |  |  |
| push_status | varchar(20) | NO |  | NULL |  |  |
| pushed_at | datetime | NO |  | NULL |  |  |
| error_message | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_oapp_moph_appointment_log_oapp_id_push_status | oapp_id | no | 1 |
| ix_idx_oapp_moph_appointment_log_oapp_id_push_status | push_status | no | 2 |
| PRIMARY | oapp_moph_appointment_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
