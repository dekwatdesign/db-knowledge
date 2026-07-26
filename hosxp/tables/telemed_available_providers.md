# `telemed_available_providers`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| telemed_available_providers_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| session_id | varchar(200) | YES | MUL | NULL |  |  |
| flag | varchar(50) | YES |  | NULL |  |  |
| created_datetime | datetime | YES | MUL | NULL |  |  |
| last_active_datetime | datetime | YES | MUL | NULL |  |  |
| current_status | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_created_datetime | created_datetime | no | 1 |
| ix_doctor_code | doctor_code | no | 1 |
| ix_last_active | last_active_datetime | no | 1 |
| ix_session_id | session_id | no | 1 |
| PRIMARY | telemed_available_providers_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
