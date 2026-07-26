# `quick_department_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| quick_department_template_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| depcode | varchar(10) | YES |  | NULL |  |  |
| button_label | varchar(50) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| ovstost | varchar(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | quick_department_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
