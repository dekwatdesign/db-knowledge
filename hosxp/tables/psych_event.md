# `psych_event`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_event_id | int(11) | NO | PRI | 0 |  |  |
| psych_plan_detail_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| psych_event_date | date | YES |  | NULL |  |  |
| psych_event_start_time | time | YES |  | NULL |  |  |
| psych_event_end_time | time | YES |  | NULL |  |  |
| psych_event_treat | char(1) | YES |  | NULL |  |  |
| psych_event_therapy | char(1) | YES |  | NULL |  |  |
| psych_event_recovery | char(1) | YES |  | NULL |  |  |
| psych_event_consult | char(1) | YES |  | NULL |  |  |
| psych_items_id | int(11) | YES |  | NULL |  |  |
| active_no_charge | char(1) | YES |  | NULL |  |  |
| psych_event_qty | int(11) | YES |  | NULL |  |  |
| psych_event_price | double(15,3) | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES |  | NULL |  |  |
| psych_event_assess_type_id | int(11) | YES |  | NULL |  |  |
| psych_event_result_note | longblob | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| dx_guid | varchar(38) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| psych_risk_items_chk | text | YES |  | NULL |  |  |
| psych_careful_items_chk | text | YES |  | NULL |  |  |
| psych_act_service_items_chk | text | YES |  | NULL |  |  |
| psych_refer_st_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_plan_detail_id | psych_plan_detail_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
