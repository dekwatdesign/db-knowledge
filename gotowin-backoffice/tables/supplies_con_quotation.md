# `supplies_con_quotation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| QUOTATION_ID | int | NO | PRI | NULL | auto_increment |  |
| QUOTATION_CON_NUM | varchar(20) | YES |  | NULL |  |  |
| QUOTATION_NUMBER | varchar(50) | YES |  | NULL |  |  |
| QUOTATION_VENDOR_ID | varchar(255) | YES |  | NULL |  |  |
| QUOTATION_VENDOR_ADD | varchar(255) | YES |  | NULL |  |  |
| QUOTATION_VENDOR_TAXNUM | varchar(20) | YES |  | NULL |  |  |
| QUOTATION_VENDOR_PICE | varchar(20) | YES |  | NULL |  |  |
| QUOTATION_WIN | varchar(10) | YES |  | NULL |  |  |
| QUOTATION_VENDOR_FILE_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | QUOTATION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
