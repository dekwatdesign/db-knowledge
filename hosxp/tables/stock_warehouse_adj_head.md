# `stock_warehouse_adj_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_warehouse_adj_head_id | int(11) | NO | PRI | 0 |  |  |
| adjust_date | date | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| adjust_reason | varchar(250) | YES |  | NULL |  |  |
| reference_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| stock_cutpay_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_warehouse_adj_document_id | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_warehouse_adj_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
