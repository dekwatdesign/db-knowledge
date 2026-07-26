# `patient_cancer_rt_date`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_cancer_rt_date_id | int(11) | NO | PRI | 0 |  |  |
| patient_cancer_cure_plan_id | int(11) | YES |  | NULL |  |  |
| rt_start_date | date | YES |  | NULL |  |  |
| rt_start_time | time | YES |  | NULL |  |  |
| rt_staff_start | varchar(100) | YES |  | NULL |  |  |
| rt_end_date | date | YES |  | NULL |  |  |
| rt_end_time | time | YES |  | NULL |  |  |
| rt_staff_end | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_cancer_rt_date_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
