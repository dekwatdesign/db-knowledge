# `stock_setting_document`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_setting_document_id | int(11) | NO | PRI | 0 |  |  |
| stock_setting_document_name | varchar(100) | YES |  | NULL |  |  |
| stock_setting_document_prefact | varchar(20) | YES |  | NULL |  |  |
| stock_setting_document_separator1 | varchar(5) | YES |  | NULL |  |  |
| stock_setting_document_runyear | int(11) | YES |  | NULL |  |  |
| stock_setting_document_runmonth | int(11) | YES |  | NULL |  |  |
| stock_setting_document_runwarehouse | int(11) | YES |  | NULL |  |  |
| stock_setting_document_status | int(11) | YES |  | NULL |  |  |
| stock_setting_document_runbdgyear | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | stock_setting_document_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
