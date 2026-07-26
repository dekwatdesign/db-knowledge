# `customer_level_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| customer_level_detail_id | int(11) | NO | PRI | 0 |  |  |
| customer_level_id | int(11) | YES |  | NULL |  |  |
| customer_level_discount | double(15,3) | YES |  | NULL |  |  |
| accumulated_min_value | double(15,3) | YES |  | NULL |  |  |
| accumulated_max_value | double(15,3) | YES |  | NULL |  |  |
| exchange_point_value | double(15,3) | YES |  | NULL |  |  |
| exchange_cash_value | double(15,3) | YES |  | NULL |  |  |
| customer_level_condition | text | YES |  | NULL |  |  |
| customer_level_benefits | text | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | customer_level_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
