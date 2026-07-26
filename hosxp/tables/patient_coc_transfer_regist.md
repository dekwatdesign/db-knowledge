# `patient_coc_transfer_regist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_coc_transfer_regist_id | int(11) | NO | PRI | 0 |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| patient_coc_severity_type_id | int(11) | YES |  | NULL |  |  |
| care_problem_text | text | YES |  | NULL |  |  |
| medical_appliance_text | text | YES |  | NULL |  |  |
| patient_coc_keeper_type_id | int(11) | YES |  | NULL |  |  |
| care_plan_text | text | YES |  | NULL |  |  |
| transfer_hospcode | varchar(9) | YES |  | NULL |  |  |
| is_intermediate_care | char(1) | YES |  | NULL |  |  |
| patient_coc_visit_id | int(11) | YES | MUL | NULL |  |  |
| transfer_date | date | YES |  | NULL |  |  |
| transfer_time | time | YES |  | NULL |  |  |
| transfer_staff | varchar(25) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| thai_coc_tr_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_pcvi | patient_coc_visit_id | no | 1 |
| PRIMARY | patient_coc_transfer_regist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
