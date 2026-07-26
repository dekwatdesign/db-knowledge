# `xray_report_list_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_report_list_id | int(11) | NO | PRI | 0 |  |  |
| xn | int(11) | YES | MUL | NULL |  |  |
| report_doctor | varchar(10) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| report_rtf | longblob | YES |  | NULL |  |  |
| report_text | longtext | YES |  | NULL |  |  |
| final_result | char(1) | YES |  | NULL |  |  |
| cancel_reason | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xn | xn | no | 1 |
| PRIMARY | xray_report_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
