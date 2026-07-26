# `html_program`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| html_program_id | int(11) | NO | PRI | 0 |  |  |
| html_program_name | varchar(250) | YES | UNI | NULL |  |  |
| html_program_text | longtext | YES |  | NULL |  |  |
| create_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_html_program_name | html_program_name | yes | 1 |
| PRIMARY | html_program_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
