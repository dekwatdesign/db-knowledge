# `xe_app_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xe_app_script_id | int(11) | NO | PRI | 0 |  |  |
| xe_app_script_name | varchar(200) | YES | UNI | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| xe_app_description_text | text | YES |  | NULL |  |  |
| xe_app_update_datetime | datetime | YES |  | NULL |  |  |
| xe_app_module_name | varchar(200) | YES | MUL | NULL |  |  |
| xe_app_framework_name | varchar(200) | YES |  | NULL |  |  |
| xe_app_unit_name | varchar(200) | YES |  | NULL |  |  |
| xe_app_bpl | longblob | YES |  | NULL |  |  |
| has_bpl | char(1) | YES |  | NULL |  |  |
| root_class | varchar(200) | YES |  | NULL |  |  |
| load_on_start | char(1) | YES |  | NULL |  |  |
| script_active | char(1) | YES |  | NULL |  |  |
| xe_app_bpl_md5 | varchar(50) | YES |  | NULL |  |  |
| customize_dpr | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_module_name | xe_app_module_name | no | 1 |
| ix_xe_app_script_name | xe_app_script_name | yes | 1 |
| PRIMARY | xe_app_script_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
