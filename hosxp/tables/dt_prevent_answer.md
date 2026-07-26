# `dt_prevent_answer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_answer_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_answer_name | varchar(50) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| dt_prevent_question_group_id | int(11) | YES |  | NULL |  |  |
| dt_prevent_question_mapping_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_prevent_answer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
