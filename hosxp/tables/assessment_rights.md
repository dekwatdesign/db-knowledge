# `assessment_rights`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_rights_id | int(11) | NO | PRI | 0 |  |  |
| officer_group_id | int(11) | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES |  | NULL |  |  |
| assessment_rights_view | char(1) | YES |  | NULL |  |  |
| assessment_rights_add | char(1) | YES |  | NULL |  |  |
| assessment_rights_edit | char(1) | YES |  | NULL |  |  |
| assessment_rights_delete | char(1) | YES |  | NULL |  |  |
| officer_rights_edit | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_rights_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
