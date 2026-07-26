# `customer_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_picture_id | int(11) | NO | PRI | 0 |  |  |
| customer_id | int(11) | YES | MUL | NULL |  |  |
| customer_picture_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | customer_id | no | 1 |
| PRIMARY | customer_picture_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
