# `dental_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_plan_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dtarea_code | varchar(10) | YES |  | NULL |  |  |
| master_id | int(11) | YES |  | NULL |  |  |
| dental_plan_diagnosis_text | text | YES |  | NULL |  |  |
| dental_work_type_id | int(11) | YES |  | NULL |  |  |
| dental_plan_status_id | int(11) | YES |  | NULL |  |  |
| dental_approve_status_id | int(11) | YES |  | NULL |  |  |
| plan_doctor_code | varchar(15) | YES |  | NULL |  |  |
| approve_doctor_code | varchar(15) | YES |  | NULL |  |  |
| dental_plan_date | date | YES |  | NULL |  |  |
| dental_plan_time | time | YES |  | NULL |  |  |
| dental_approve_datetime | datetime | YES |  | NULL |  |  |
| dental_plan_seq_number | int(11) | YES |  | NULL |  |  |
| dental_plan_start_date | date | YES |  | NULL |  |  |
| dental_plan_finish_date | date | YES |  | NULL |  |  |
| dental_plan_name | varchar(200) | YES |  | NULL |  |  |
| estimate_price | double(15,3) | YES |  | NULL |  |  |
| plan_active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dental_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
