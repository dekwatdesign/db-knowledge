# `stock_sub_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_sub_class_id | int(11) | NO | PRI | 0 |  |  |
| stock_sub_class_name | varchar(200) | YES |  | NULL |  |  |
| stock_class_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_class_id | stock_class_id | no | 1 |
| PRIMARY | stock_sub_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
