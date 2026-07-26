# `assessment_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_items_id | int(11) | NO | PRI | 0 |  |  |
| assessment_items_column | varchar(30) | YES |  | NULL |  |  |
| assessment_items_note | varchar(100) | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES | MUL | NULL |  |  |
| assessment_component_id | int(11) | YES | MUL | NULL |  |  |
| assessment_notnull | char(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refassessment_component3 | assessment_component_id | no | 1 |
| ix_Refassessment_form2 | assessment_form_id | no | 1 |
| PRIMARY | assessment_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
