# `stock_check_warehouse_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_check_warehouse_head_id | int(11) | YES |  | NULL |  |  |
| stock_check_date | date | YES |  | NULL |  |  |
| stock_user_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |
| stock_check_no | varchar(30) | YES |  | NULL |  |  |
| remark | varchar(200) | YES |  | NULL |  |  |
| stock_count | int(11) | YES |  | NULL |  |  |
| warehouse_id | int(11) | YES |  | NULL |  |  |
| stock_price | double(22,3) | YES |  | NULL |  |  |
| runnumber | int(11) | YES |  | NULL |  |  |
| number_year | varchar(4) | YES |  | NULL |  |  |
| number_month | varchar(4) | YES |  | NULL |  |  |
| stock_check_warehouse_document_id | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
