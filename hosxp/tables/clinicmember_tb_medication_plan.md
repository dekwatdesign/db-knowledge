# `clinicmember_tb_medication_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_medication_plan_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_medication_plan_date | date | YES |  | NULL |  |  |
| clinicmember_tb_medication_plan_type_id | int(11) | YES |  | NULL |  |  |
| clinicmember_tb_medication_plan_reason_type_id | int(11) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| clinicmember_tb_medication_plan_duration_month | int(11) | YES |  | NULL |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| plan_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_id | clinicmember_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_medication_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
