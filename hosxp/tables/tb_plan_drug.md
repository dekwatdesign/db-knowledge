# `tb_plan_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_plan_drug_id | int(11) | NO | PRI | 0 |  |  |
| tb_plan_drug_date | date | YES |  | NULL |  |  |
| tb_plan_drug_doctor | varchar(6) | YES |  | NULL |  |  |
| tb_category_type_id | int(11) | YES |  | NULL |  |  |
| tb_plan_drug_other_note | varchar(100) | YES |  | NULL |  |  |
| tb_plan_drug_phase_intense_first_date | date | YES |  | NULL |  |  |
| tb_plan_drug_phase_intense_sum_week | int(11) | YES |  | NULL |  |  |
| tb_plan_drug_phase_continue_first_date | date | YES |  | NULL |  |  |
| tb_plan_drug_phase_continue_sum_month | int(11) | YES |  | NULL |  |  |
| tb_plan_drug_status_use | char(1) | YES |  | NULL |  |  |
| tb_plan_drug_cancel_cate_date | date | YES |  | NULL |  |  |
| tb_plan_drug_reason_cancel_cate | varchar(100) | YES |  | NULL |  |  |
| tb_plan_drug_user_save | varchar(6) | YES |  | NULL |  |  |
| tb_plan_drug_last_update | datetime | YES |  | NULL |  |  |
| patient_hhc_plan_id | int(11) | YES |  | NULL |  |  |
| tb_plan_drug_status_id | int(11) | YES |  | NULL |  |  |
| tb_plan_drug_cancel | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_plan_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
