# `psych_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_plan_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psych_plan_name | varchar(255) | YES |  | NULL |  |  |
| active_charge | char(1) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| psych_plan_date | date | YES |  | NULL |  |  |
| psych_plan_time | time | YES |  | NULL |  |  |
| psych_plan_doctor_code | varchar(7) | YES |  | NULL |  |  |
| psych_plan_status_id | int(11) | YES |  | NULL |  |  |
| psych_plan_finish_date | date | YES |  | NULL |  |  |
| psych_acuity_type_id | int(11) | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES |  | NULL |  |  |
| psych_plan_reason_note | text | YES |  | NULL |  |  |
| psych_plan_start_date | date | YES |  | NULL |  |  |
| psych_plan_end_date | date | YES |  | NULL |  |  |
| psych_plan_result_note | longblob | YES |  | NULL |  |  |
| psych_plan_active | char(1) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| psych_plan_technique_note | longblob | YES |  | NULL |  |  |
| psych_plan_character_note | longblob | YES |  | NULL |  |  |
| psych_plan_comment_note | longblob | YES |  | NULL |  |  |
| psych_plan_next_treat_note | longblob | YES |  | NULL |  |  |
| psych_plan_tx_result_note | longblob | YES |  | NULL |  |  |
| psych_plan_used_tools | text | YES |  | NULL |  |  |
| psych_refer_st_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_opi_guid | opi_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
