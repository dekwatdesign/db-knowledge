# `student_regulation_period_report_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| student_regulation_period_report_summary_id | int(11) | NO | PRI | 0 |  |  |
| student_regulation_period_report_id | int(11) | YES |  | NULL |  |  |
| student_regulation_id | int(11) | YES |  | NULL |  |  |
| summary_pass | int(11) | YES |  | NULL |  |  |
| summary_no_pass | int(11) | YES |  | NULL |  |  |
| summary_total | int(11) | YES |  | NULL |  |  |
| village_school_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | student_regulation_period_report_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
