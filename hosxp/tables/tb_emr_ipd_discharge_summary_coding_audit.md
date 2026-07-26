# `tb_emr_ipd_discharge_summary_coding_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | NO | PRI |  |  |  |
| loginname | varchar(50) | NO | PRI |  |  |  |
| doctor_name | varchar(255) | YES |  | NULL |  |  |
| doctor_primary_diagnosis | text | YES |  | NULL |  |  |
| doctor_comorbidity | text | YES |  | NULL |  |  |
| doctor_complication | text | YES |  | NULL |  |  |
| doctor_others_diag | text | YES |  | NULL |  |  |
| doctor_anesthetic_note | text | YES |  | NULL |  |  |
| doctor_operation_procedure | text | YES |  | NULL |  |  |
| doctor_note | text | YES |  | NULL |  |  |
| doctor_course_progressnote | text | YES |  | NULL |  |  |
| doctor_operation_findings | text | YES |  | NULL |  |  |
| doctor_dchstts | char(2) | YES |  | NULL |  |  |
| doctor_dchtype | char(2) | YES |  | NULL |  |  |
| doctor_dchtype_text | varchar(255) | YES |  | NULL |  |  |
| discharge_summary_user_log | varchar(50) | YES |  | NULL |  |  |
| discharge_summary_datetime_log | datetime | NO | PRI | 0000-00-00 00:00:00 |  |  |
| discharge_summary_status | char(2) | YES |  | NULL |  |  |
| loginname_delete_data | varchar(50) | YES |  | NULL |  |  |
| discharge_summary_delete_datetime_log | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| discharge_summary_datetime_log | discharge_summary_datetime_log | no | 1 |
| hn | hn | no | 1 |
| loginname | loginname | no | 1 |
| PRIMARY | an | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | loginname | yes | 3 |
| PRIMARY | discharge_summary_datetime_log | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
