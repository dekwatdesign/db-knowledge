# `warehouse_treasury_export_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TREASURY_EXPORT_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| TREASURY_RECEIVE_ID | int | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_TYPE | int | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_UNIT | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_AMOUNT | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_PICE_UNIT | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_VALUE | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_LOT | varchar(255) | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_GEN_DATE | date | YES |  | NULL |  |  |
| TREASURY_EXPORT_SUB_EXP_DATE | date | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| TREASURY_ID | varchar(100) | YES |  | NULL |  |  |
| WAREHOUSE_REQUEST_SUB_ID | int | YES |  | NULL |  |  |
| TREASURT_PAY_ID | int | YES |  | NULL |  |  |
| TREASURY_RECEIVE_SUB_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TREASURY_EXPORT_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
