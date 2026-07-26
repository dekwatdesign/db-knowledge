# `supplies_con_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| SUP_ID | varchar(10) | YES | MUL |  |  | รหัสสินค้า |
| CON_ID | varchar(20) | YES | MUL |  |  | รหัสแผน |
| SUP_NAME | varchar(50) | YES |  |  |  | ชื่อรายการสินค้า |
| SUP_TOTAL | decimal(10,2) | YES |  | 0.00 |  |  |
| SUP_UNIT_ID | varchar(10) | YES | MUL |  |  |  |
| PRICE_PER_UNIT | decimal(10,5) | YES |  | 0.00000 |  |  |
| PRICE_SUM | decimal(20,5) | YES |  | NULL |  |  |
| SUP_UNIT_NAME | varchar(20) | YES |  |  |  |  |
| PRICE_PER_UNIT_LAST | decimal(20,5) | YES |  | NULL |  |  |
| SUP_PROP | varchar(200) | YES |  |  |  |  |
| SUP_TYPE_ID | int | YES |  | NULL |  |  |
| SUP_TYPE_NAME | varchar(200) | YES |  | NULL |  |  |
| SUP_DETAIL | varchar(200) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| CON_REMARK | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| IX_CON_ID | CON_ID | no | 1 |
| IX_ID | ID | no | 1 |
| IX_SUP_ID | SUP_ID | no | 1 |
| IX_SUP_UNIT_ID | SUP_UNIT_ID | no | 1 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
