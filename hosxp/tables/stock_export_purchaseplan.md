# `stock_export_purchaseplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_export_purchaseplan_id | int(11) | NO | PRI | 0 |  |  |
| item_id | int(11) | YES |  | NULL |  |  |
| yearbudget | int(11) | YES |  | NULL |  |  |
| period_rpt | varchar(100) | YES |  | NULL |  |  |
| date_send | varchar(100) | YES |  | NULL |  |  |
| export_datetime | datetime | YES |  | NULL |  |  |
| export_status_success | varchar(100) | YES |  | NULL |  |  |
| export_status_message | text | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| stock_plan_list_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | stock_export_purchaseplan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
