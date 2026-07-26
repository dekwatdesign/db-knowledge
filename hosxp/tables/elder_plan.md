# `elder_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_plan_id | int(11) | NO | PRI | 0 |  |  |
| elder_plan_date | date | YES |  | NULL |  |  |
| elder_plan_visit_date | date | YES |  | NULL |  |  |
| elder_plan_visit_end_date | date | YES |  | NULL |  |  |
| elder_plan_round | int(11) | YES |  | NULL |  |  |
| doctor_code | char(15) | YES |  | NULL |  |  |
| elder_plan_detail | varchar(255) | YES |  | NULL |  |  |
| patient_hhc_plan | int(11) | YES |  | NULL |  |  |
| elder_home_visit_plan_status_id | int(11) | YES |  | NULL |  |  |
| person_visit_id | int(11) | YES |  | NULL |  |  |
| elder_patient_register_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
