# `clinic_oapp_notification`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_oapp_notification_id | int(11) | NO | PRI | 0 |  |  |
| clinic | varchar(3) | YES | MUL | NULL |  |  |
| clinic_oapp_notification_name | varchar(200) | YES |  | NULL |  |  |
| notification_template_text | varchar(1000) | YES |  | NULL |  |  |
| notification_hrs_csv_list | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic | clinic | no | 1 |
| ix_unique | clinic | yes | 1 |
| ix_unique | clinic_oapp_notification_name | yes | 2 |
| PRIMARY | clinic_oapp_notification_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
