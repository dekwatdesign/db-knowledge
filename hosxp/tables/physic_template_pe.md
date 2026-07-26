# `physic_template_pe`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_template_pe_id | int(11) | NO | PRI | 0 |  |  |
| physic_template_pe_date | date | YES |  | NULL |  |  |
| physic_template_pe_name | varchar(255) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES | MUL | NULL |  |  |
| physic_template_pe_history_now | text | YES |  | NULL |  |  |
| physic_template_pe_history | text | YES |  | NULL |  |  |
| physic_template_pe_cc | text | YES |  | NULL |  |  |
| physic_template_pe_pt_dx | text | YES |  | NULL |  |  |
| physic_template_pe_prohibition | text | YES |  | NULL |  |  |
| physic_template_pe_observation | text | YES |  | NULL |  |  |
| physic_template_pe_palpation | text | YES |  | NULL |  |  |
| physic_template_pe_arom | text | YES |  | NULL |  |  |
| physic_template_pe_prom | text | YES |  | NULL |  |  |
| physic_template_pe_mp | text | YES |  | NULL |  |  |
| physic_template_pe_access_move | text | YES |  | NULL |  |  |
| physic_template_pe_others | text | YES |  | NULL |  |  |
| physic_template_pe_pa | text | YES |  | NULL |  |  |
| physic_template_pe_gpt | text | YES |  | NULL |  |  |
| physic_template_pe_treatment | text | YES |  | NULL |  |  |
| physic_template_pe_recommen | text | YES |  | NULL |  |  |
| physic_template_pe_sum_and_dis | text | YES |  | NULL |  |  |
| physic_template_pe_staff | varchar(255) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_physic_template_pe_doctor | doctor_code | no | 1 |
| PRIMARY | physic_template_pe_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
