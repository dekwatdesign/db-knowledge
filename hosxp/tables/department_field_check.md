# `department_field_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| department_field_check_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| table_name | varchar(200) | YES |  | NULL |  |  |
| field_name | varchar(200) | YES |  | NULL |  |  |
| alert_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| PRIMARY | department_field_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
