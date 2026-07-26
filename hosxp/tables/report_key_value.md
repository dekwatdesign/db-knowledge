# `report_key_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| report_key_value_id | int(11) | NO | PRI | 0 |  |  |
| report_key_name | varchar(200) | YES | MUL | NULL |  |  |
| report_key_integer | int(11) | YES |  | NULL |  |  |
| report_key_string | varchar(200) | YES |  | NULL |  |  |
| report_key_date_year | int(11) | YES | MUL | NULL |  |  |
| report_key_date_month | int(11) | YES |  | NULL |  |  |
| report_key_date_day | int(11) | YES | MUL | NULL |  |  |
| computer_name | varchar(200) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | no | 1 |
| ix_report_key_name | report_key_name | no | 1 |
| ix_ymd | report_key_date_year | no | 1 |
| ix_ymd | report_key_date_month | no | 2 |
| ix_ymd | report_key_date_day | no | 3 |
| ix_ymd_index | report_key_date_day | no | 1 |
| ix_ymd_index | report_key_date_month | no | 2 |
| ix_ymd_index | report_key_date_year | no | 3 |
| PRIMARY | report_key_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
