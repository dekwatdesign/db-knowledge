# `drugitems_sks_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_sks_history_id | int(11) | NO | PRI | 0 |  |  |
| icode | char(7) | YES | MUL | NULL |  |  |
| effective_datetime | datetime | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| tmt_tpu_code | varchar(15) | YES |  | NULL |  |  |
| sks_product_category_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_sks_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
