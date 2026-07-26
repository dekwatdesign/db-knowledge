# `reporttemplate_dataview`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_dataview_id | int(11) | NO | PRI | 0 |  |  |
| reporttemplate_name | varchar(150) | YES | MUL | NULL |  |  |
| dataview_name | varchar(100) | YES | MUL | NULL |  |  |
| dataview_sql | text | YES |  | NULL |  |  |
| dataview_master | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dataview_name_template | dataview_name | yes | 1 |
| ix_dataview_name_template | reporttemplate_name | yes | 2 |
| ix_reporttemplate_name | reporttemplate_name | no | 1 |
| PRIMARY | reporttemplate_dataview_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
