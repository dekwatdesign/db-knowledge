# `drugitems_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_location_id | int(11) | NO | PRI | 0 |  |  |
| location_code | varchar(10) | YES |  | NULL |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| location_detail_code | varchar(50) | YES |  | NULL |  |  |
| barcode | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_icode_id | icode | no | 1 |
| ix_icode_id | stock_department_id | no | 2 |
| PRIMARY | drugitems_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
