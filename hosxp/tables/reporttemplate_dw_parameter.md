# `reporttemplate_dw_parameter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_dw_parameter_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_dataview_id | int(11) | YES | MUL | NULL |  |  |
| parameter_name | varchar(250) | YES |  | NULL |  |  |
| reporttemplate_param_type_id | int(11) | YES |  | NULL |  |  |
| parameter_value | varchar(250) | YES |  | NULL |  |  |
| parameter_note | varchar(250) | YES |  | NULL |  |  |
| parameter_value_date | date | YES |  | NULL |  |  |
| parameter_value_time | time | YES |  | NULL |  |  |
| parameter_value_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_reporttemplate_dataview_id | reporttemplate_dataview_id | no | 1 |
| PRIMARY | reporttemplate_dw_parameter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
