# `stock_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_class_id | int(11) | NO | PRI | 0 |  |  |
| stock_class_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| oldcode | varchar(20) | YES | MUL | NULL |  |  |
| item_type | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oldcode | oldcode | no | 1 |
| ix_stock_class_name | stock_class_name | yes | 1 |
| PRIMARY | stock_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
