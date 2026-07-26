# `stock_department_item_rsv`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_department_item_rsv_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| reserve_qty | int(11) | YES |  | NULL |  |  |
| reserve_note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_department_id | department_id | no | 1 |
| ix_department_uniq | department_id | yes | 1 |
| ix_department_uniq | item_id | yes | 2 |
| PRIMARY | stock_department_item_rsv_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
