# `stock_item_drugusage_pos`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_drugusage_pos_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES | MUL | NULL |  |  |
| qr_code_url | varchar(200) | YES |  | NULL |  |  |
| therapeutic | varchar(200) | YES |  | NULL |  |  |
| therapeutic_eng | varchar(200) | YES |  | NULL |  |  |
| hinttext | varchar(200) | YES |  | NULL |  |  |
| hinttext_eng | varchar(200) | YES |  | NULL |  |  |
| special_advice_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugusage | drugusage | no | 1 |
| ix_item_id | item_id | no | 1 |
| PRIMARY | stock_item_drugusage_pos_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
