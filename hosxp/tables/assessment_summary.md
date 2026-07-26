# `assessment_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_summary_id | int(11) | NO | PRI | 0 |  |  |
| assessment_summary_field_id | int(11) | YES |  | NULL |  |  |
| assessment_sum_field_name | varchar(30) | YES |  | NULL |  |  |
| assessment_sum_button | varchar(30) | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES |  | NULL |  |  |
| assessment_items_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
