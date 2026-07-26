# `hosxp_marketplace_int_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hosxp_marketplace_int_setting_id | int(11) | NO | PRI | 0 |  |  |
| hosxp_marketplace_int_type_id | int(11) | YES | MUL | NULL |  |  |
| hosxp_marketplace_int_setting_name | varchar(200) | YES | UNI | NULL |  |  |
| hosxp_marketplace_int_api_token | varchar(1000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hosxp_marketplace_int_setting_name | hosxp_marketplace_int_setting_name | yes | 1 |
| ix_hosxp_marketplace_int_type_id | hosxp_marketplace_int_type_id | no | 1 |
| PRIMARY | hosxp_marketplace_int_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
