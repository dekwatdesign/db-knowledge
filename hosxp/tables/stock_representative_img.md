# `stock_representative_img`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_representative_img_id | int(11) | NO | PRI | 0 |  |  |
| stock_representative_id | int(11) | YES | MUL | NULL |  |  |
| stock_representative_img_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_representative_id | no | 1 |
| PRIMARY | stock_representative_img_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
