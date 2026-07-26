# `stock_supplier_parent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_supplier_parent_id | int(11) | NO | PRI | 0 |  |  |
| stock_supplier_parent_name | varchar(100) | YES |  | NULL |  |  |
| stock_supplier_parent_address | varchar(200) | YES |  | NULL |  |  |
| stock_supplieta_parent_tel | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_supplier_parent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
