# `stock_adjust_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_adj_head_id | int(11) | NO | PRI | 0 |  |  |
| adjust_date | date | YES | MUL | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| authorizer | varchar(20) | YES |  | NULL |  |  |
| authorize_date | date | YES |  | NULL |  |  |
| reason | varchar(250) | YES |  | NULL |  |  |
| department_id | int(11) | YES |  | NULL |  |  |
| stock_draw_id | int(11) | YES |  | NULL |  |  |
| stock_manual_id | int(11) | YES |  | NULL |  |  |
| stock_po_id | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_adj_head_document_id | varchar(50) | YES |  | NULL |  |  |
| status_appove_data | char(1) | YES |  | NULL |  |  |
| sp_ok | char(1) | YES |  | NULL |  |  |
| sp_status | varchar(200) | YES |  | NULL |  |  |
| stock_adjust_type_id | int(11) | YES |  | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| no_calc_stat | char(1) | YES |  | NULL |  |  |
| adjust_doc_no | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| adjust_date | adjust_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_adj_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
