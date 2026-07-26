# `doctor_investigation_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doctor_investigation_report_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(25) | YES |  | NULL |  |  |
| report_date | date | YES |  | NULL |  |  |
| report_time | time | YES |  | NULL |  |  |
| report_rtf_text | longtext | YES |  | NULL |  |  |
| report_text | text | YES |  | NULL |  |  |
| confirm_report | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | doctor_investigation_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
