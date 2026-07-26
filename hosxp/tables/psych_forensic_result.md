# `psych_forensic_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_forensic_result_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| psych_forensic_report_date | date | YES |  | NULL |  |  |
| psych_forensic_meet_date | date | YES |  | NULL |  |  |
| psych_forensic_evaluation_date | date | YES |  | NULL |  |  |
| psych_forensic_result_date | date | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff_name | varchar(80) | YES |  | NULL |  |  |
| psych_forensic_obj_type_id | int(11) | YES |  | NULL |  |  |
| psych_guilt_info_id | int(11) | YES |  | NULL |  |  |
| psych_evaluation_status_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_forensic_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
