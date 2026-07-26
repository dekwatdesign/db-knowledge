# `stock_department_item_ppr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_department_item_ppr_id | int(11) | NO | PRI | 0 |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| stock_vendor_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_department_id | department_id | no | 1 |
| ix_department_vendor_id | department_id | no | 1 |
| ix_department_vendor_id | stock_vendor_id | no | 2 |
| ix_dep_item_vendor | department_id | yes | 1 |
| ix_dep_item_vendor | item_id | yes | 2 |
| ix_dep_item_vendor | stock_vendor_id | yes | 3 |
| PRIMARY | stock_department_item_ppr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
