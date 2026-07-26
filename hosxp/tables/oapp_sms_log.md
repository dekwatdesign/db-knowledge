# `oapp_sms_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_sms_log_id | int(11) | NO | PRI | 0 |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| oapp_sms_log_datetime | datetime | YES |  | NULL |  |  |
| sms_message | varchar(200) | YES |  | NULL |  |  |
| phone_number | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oapp_id | oapp_id | no | 1 |
| PRIMARY | oapp_sms_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
