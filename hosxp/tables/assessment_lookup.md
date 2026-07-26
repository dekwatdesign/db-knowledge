# `assessment_lookup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_lookup_id | int(11) | NO | PRI | 0 |  |  |
| assessment_items_column | varchar(30) | YES |  | NULL |  |  |
| assessment_items_table | varchar(30) | YES |  | NULL |  |  |
| assessment_items_listfield | varchar(30) | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES |  | NULL |  |  |
| assessment_lookup_query | longtext | YES |  | NULL |  |  |
| assessment_lookup_select | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_lookup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
