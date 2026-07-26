# `patient_hhc_plan_team`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_plan_team_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_plan_id | int(11) | YES | MUL | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| is_leader | char(1) | YES | MUL | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_hhc_plan_team_doctor | doctor_code | no | 1 |
| ix_idx_hhc_plan_team_leader | is_leader | no | 1 |
| ix_idx_hhc_plan_team_leader | patient_hhc_plan_id | no | 2 |
| ix_idx_hhc_plan_team_plan_id | patient_hhc_plan_id | no | 1 |
| PRIMARY | patient_hhc_plan_team_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
