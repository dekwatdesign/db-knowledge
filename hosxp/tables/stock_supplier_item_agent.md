# `stock_supplier_item_agent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supplier_item_agent_id | int(11) | NO | PRI | 0 |  |  |
| supplier_item_id | int(11) | YES | MUL | NULL |  |  |
| supplier_agent_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_supplier_item_id | supplier_item_id | no | 1 |
| PRIMARY | supplier_item_agent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
