# `stock_wh_donation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_wh_donation_type_id | int(11) | NO | PRI | 0 |  |  |
| stock_wh_donation_type_name | varchar(200) | YES | UNI | NULL |  |  |
| acc_chart_type_code | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_wh_donation_type_name | stock_wh_donation_type_name | yes | 1 |
| PRIMARY | stock_wh_donation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
