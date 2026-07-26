# `xray_report_ext`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_ext_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | UNI | NULL |  |  |
| xray_report_ext_loc_id | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| document_no | varchar(100) | YES |  | NULL |  |  |
| ext_bill_no | varchar(100) | YES |  | NULL |  |  |
| bill_date | date | YES |  | NULL |  |  |
| report_number | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xn | xn | yes | 1 |
| PRIMARY | xray_report_ext_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
