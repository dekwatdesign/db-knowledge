# `patient_cancer_plan_date`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_plan_date_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| plan_start_date | date | YES |  | NULL |  |  |
| plan_start_time | time | YES |  | NULL |  |  |
| plan_staff_start | varchar(100) | YES |  | NULL |  |  |
| end_date_plan | date | YES |  | NULL |  |  |
| end_time_plan | time | YES |  | NULL |  |  |
| end_staff_plan | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_plan_date_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
