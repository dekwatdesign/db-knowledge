# `physic_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_plan_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| physic_plan_date | date | YES | MUL | NULL |  |  |
| physic_plan_treatment_type1 | char(1) | YES |  | NULL |  |  |
| physic_plan_treatment_type2 | char(1) | YES |  | NULL |  |  |
| physic_plan_treatment_type3 | char(1) | YES |  | NULL |  |  |
| physic_plan_progress_text | text | YES |  | NULL |  |  |
| physic_plan_staff | varchar(255) | YES |  | NULL |  |  |
| physic_plan_lastupdate | datetime | YES | MUL | NULL |  |  |
| physic_planing_id | int(11) | YES | MUL | NULL |  |  |
| physic_plan_status | char(1) | YES |  | NULL |  |  |
| physic_plan_items_list | text | YES |  | NULL |  |  |
| physic_plan_request_date | date | YES | MUL | NULL |  |  |
| physic_plan_request_time | time | YES |  | NULL |  |  |
| physic_plan_request_ward | varchar(7) | YES |  | NULL |  |  |
| physic_plan_request_staff | varchar(6) | YES |  | NULL |  |  |
| physic_plan_request_note | text | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| physic_plan_s_text | text | YES |  | NULL |  |  |
| physic_plan_o_text | text | YES |  | NULL |  |  |
| physic_plan_a_text | text | YES |  | NULL |  |  |
| physic_plan_p_text | text | YES |  | NULL |  |  |
| physic_plan_vas | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_physic_planing_id | physic_planing_id | no | 1 |
| ix_physic_plan_date | physic_plan_date | no | 1 |
| ix_physic_plan_lastupdate | physic_plan_lastupdate | no | 1 |
| ix_physic_plan_request_date | physic_plan_request_date | no | 1 |
| ix_register_id | physic_register_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | physic_plan_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
