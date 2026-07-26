# `advice_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| advice_template_id | int(11) | NO | PRI | 0 |  |  |
| advice_template_name | varchar(200) | YES |  | NULL |  |  |
| advice_staff | varchar(50) | YES | MUL | NULL |  |  |
| advice_text | text | YES |  | NULL |  |  |
| opdscreen_advice_item_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | advice_staff | no | 1 |
| PRIMARY | advice_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
