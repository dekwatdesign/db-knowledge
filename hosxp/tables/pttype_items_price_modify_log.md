# `pttype_items_price_modify_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_items_price_modify_log_id | int(11) | NO | PRI | 0 |  |  |
| log_datetime | datetime | YES |  | NULL |  |  |
| pttype | varchar(250) | YES | MUL | NULL |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| new_price | double(22,2) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| staff_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| ix_pttype | pttype | no | 1 |
| PRIMARY | pttype_items_price_modify_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
