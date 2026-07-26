# `xe_app_script_property`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_app_script_property_id | int(11) | NO | PRI | 0 |  |  |
| xe_app_script_id | int(11) | YES | MUL | NULL |  |  |
| property_name | varchar(200) | YES |  | NULL |  |  |
| property_type_name | varchar(100) | YES |  | NULL |  |  |
| method_body | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_id | xe_app_script_id | no | 1 |
| PRIMARY | xe_app_script_property_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
