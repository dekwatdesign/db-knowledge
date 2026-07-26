# `physic_planing_itemslist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_planing_itemslist_id | int(11) | NO | PRI | 0 |  |  |
| physic_planing_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_planing_itemslist_qty | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_items_id | physic_items_id | no | 1 |
| ix_physic_planing_id | physic_planing_id | no | 1 |
| ix_physic_planing_itemslist_qty | physic_planing_itemslist_qty | no | 1 |
| PRIMARY | physic_planing_itemslist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
