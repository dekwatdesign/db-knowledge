# `warehouse_request_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| WAREHOUSE_REQUEST_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| WAREHOUSE_REQUEST_ID | int | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_DETAIL_ID | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_AMOUNT | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_UNIT | varchar(11) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_PRICE | varchar(20) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_SUM_PRICE | varchar(20) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_REMARK | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_LOT | varchar(255) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_GEN_DATE | date | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_EXP_DATE | date | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_AMOUNT_PAY | varchar(255) | YES |  | NULL |  |  |
| RECEIVE_SUB_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | WAREHOUSE_REQUEST_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
