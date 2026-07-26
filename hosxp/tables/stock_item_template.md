# `stock_item_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_template_id | int(11) | NO | PRI | 0 |  |  |
| stock_item_template_name | varchar(200) | YES |  | NULL |  |  |
| officer_id | int(11) | YES | MUL | NULL |  |  |
| template_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_id | officer_id | no | 1 |
| PRIMARY | stock_item_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
