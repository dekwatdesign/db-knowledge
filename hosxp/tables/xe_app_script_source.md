# `xe_app_script_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_app_script_source_id | int(11) | NO | PRI | 0 |  |  |
| xe_app_script_id | int(11) | YES | MUL | NULL |  |  |
| source_type_name | varchar(10) | YES |  | NULL |  |  |
| source_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xe_app_script_id | xe_app_script_id | no | 1 |
| PRIMARY | xe_app_script_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
