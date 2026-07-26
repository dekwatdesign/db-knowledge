# `reporttemplate_variable`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_variable_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_name | varchar(150) | YES | MUL | NULL |  |  |
| variable_name | varchar(150) | YES |  | NULL |  |  |
| reporttemplate_param_type_id | int(11) | YES |  | NULL |  |  |
| dialog_title | varchar(250) | YES |  | NULL |  |  |
| dialog_description | text | YES |  | NULL |  |  |
| reporttemplate_lku_type_id | int(11) | YES |  | NULL |  |  |
| preset_value | text | YES |  | NULL |  |  |
| disable_null | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reporttemplate_name | reporttemplate_name | no | 1 |
| ix_variable_name_template | reporttemplate_name | yes | 1 |
| ix_variable_name_template | variable_name | yes | 2 |
| PRIMARY | reporttemplate_variable_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
