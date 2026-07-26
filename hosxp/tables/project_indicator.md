# `project_indicator`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_indicator_id | int(11) | NO | PRI | 0 |  |  |
| project_id | int(11) | YES | MUL | NULL |  |  |
| project_indicator_name_text | text | YES |  | NULL |  |  |
| project_indicator_unit_name | varchar(200) | YES |  | NULL |  |  |
| project_indicator_success_text | text | YES |  | NULL |  |  |
| project_indicator_result_txt | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_id | project_id | no | 1 |
| PRIMARY | project_indicator_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
