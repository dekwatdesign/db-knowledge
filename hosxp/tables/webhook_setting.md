# `webhook_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| webhook_setting_id | int(11) | NO | PRI | 0 |  |  |
| webhook_module_id | int(11) | YES | MUL | NULL |  |  |
| webhook_setting_code | varchar(100) | YES | UNI | NULL |  |  |
| webhook_setting_description | varchar(2000) | YES |  | NULL |  |  |
| webhook_setting_url | varchar(250) | YES |  | NULL |  |  |
| webhook_active | char(1) | YES |  | NULL |  |  |
| webhook_authorization_key | varchar(1000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_webhook_module | webhook_module_id | no | 1 |
| ix_webhook_module | webhook_setting_code | no | 2 |
| ix_webhook_setting_code | webhook_setting_code | yes | 1 |
| PRIMARY | webhook_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
