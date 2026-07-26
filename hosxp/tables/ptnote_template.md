# `ptnote_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptnote_template_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| template_name | varchar(50) | YES |  | NULL |  |  |
| template_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | ptnote_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
