# `assessment_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_script_id | int(11) | NO | PRI | 0 |  |  |
| assessment_script_sql | text | YES |  | NULL |  |  |
| assessment_items_id | int(11) | YES |  | NULL |  |  |
| assessment_script_parameter | varchar(30) | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES |  | NULL |  |  |
| assessment_script_button | varchar(100) | YES |  | NULL |  |  |
| assessment_script_value | varchar(100) | YES |  | NULL |  |  |
| assessment_script_not_edit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_script_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
