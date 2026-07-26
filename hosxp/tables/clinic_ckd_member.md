# `clinic_ckd_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_ckd_member_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_id | int(11) | YES | MUL | NULL |  |  |
| clinic_ckd_gfr_type_id | int(11) | YES |  | NULL |  |  |
| scr_dm_microalbumin | char(1) | YES |  | NULL |  |  |
| scr_proteinuria | char(1) | YES |  | NULL |  |  |
| scr_urine_rbc | char(1) | YES |  | NULL |  |  |
| scr_gfr_less60 | char(1) | YES |  | NULL |  |  |
| ckd_us_kub_status | char(1) | YES |  | NULL |  |  |
| ckd_us_kub_status_text | varchar(200) | YES |  | NULL |  |  |
| hbsag_status_text | varchar(200) | YES |  | NULL |  |  |
| antihbs_status_text | varchar(200) | YES |  | NULL |  |  |
| antihcv_status_text | varchar(200) | YES |  | NULL |  |  |
| antihiv_status_text | varchar(200) | YES |  | NULL |  |  |
| underlying_disease_text | varchar(200) | YES |  | NULL |  |  |
| smoking | char(1) | YES |  | NULL |  |  |
| smoking_text | varchar(200) | YES |  | NULL |  |  |
| ckd_fund_claim_type_id | int(11) | YES |  | NULL |  |  |
| ckd_register_no | varchar(255) | YES |  | NULL |  |  |
| ckd_register_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | clinicmember_id | no | 1 |
| PRIMARY | clinic_ckd_member_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
