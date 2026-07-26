# `reporttemplate_ext_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_ext_script_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_name | varchar(150) | YES | MUL | NULL |  |  |
| event_type_id | int(11) | YES |  | NULL |  |  |
| event_script | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | reporttemplate_name | no | 1 |
| PRIMARY | reporttemplate_ext_script_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
