# `stock_item_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_item_department_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES | MUL | NULL |  |  |
| no_manual_draw | char(1) | YES |  | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| min_qty | int(11) | YES |  | NULL |  |  |
| max_qty | int(11) | YES |  | NULL |  |  |
| extra_qty | int(11) | YES |  | NULL |  |  |
| use_auto_value | char(1) | YES |  | NULL |  |  |
| avg_3_month_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_item_id | item_id | no | 1 |
| ix_unique | item_id | yes | 1 |
| ix_unique | department_id | yes | 2 |
| ix_unique_index | department_id | yes | 1 |
| ix_unique_index | item_id | yes | 2 |
| PRIMARY | stock_item_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
