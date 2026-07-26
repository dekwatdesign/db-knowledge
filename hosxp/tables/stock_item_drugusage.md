# `stock_item_drugusage`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_drugusage_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | UNI | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| qr_code_url | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | yes | 1 |
| PRIMARY | stock_item_drugusage_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
