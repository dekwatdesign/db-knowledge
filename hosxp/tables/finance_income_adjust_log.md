# `finance_income_adjust_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_income_adjust_log_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| adjust_datetime | datetime | YES |  | NULL |  |  |
| rx_transaction_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(35) | YES |  | NULL |  |  |
| xml_data | longtext | YES |  | NULL |  |  |
| inc_xml_data | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | finance_income_adjust_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
