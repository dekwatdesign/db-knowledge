# `iclaim_opd_discharge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_opd_discharge_id | int(11) | NO | PRI | 0 |  |  |
| transaction_uid | varchar(250) | YES |  | NULL |  |  |
| transaction_no | varchar(250) | YES |  | NULL |  |  |
| claim_no | varchar(100) | YES |  | NULL |  |  |
| total_approved_amount | double(15,3) | YES |  | NULL |  |  |
| total_excess_amount | double(15,3) | YES |  | NULL |  |  |
| final_pss_score | int(11) | YES |  | NULL |  |  |
| requst_json | text | YES |  | NULL |  |  |
| respones_json | text | YES |  | NULL |  |  |
| message_status | char(10) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| iclaim_service_id | int(11) | YES | MUL | NULL |  |  |
| response_json | text | YES |  | NULL |  |  |
| claim_is_follow_up_chk | char(1) | YES |  | NULL |  |  |
| claim_from_motorcycle_chk | char(1) | YES |  | NULL |  |  |
| alcohol_related_chk | char(1) | YES |  | NULL |  |  |
| addiction_related_chk | char(1) | YES |  | NULL |  |  |
| visit_with_alcohol_or_drug_chk | char(1) | YES |  | NULL |  |  |
| iclaim_check_history_id | int(11) | YES |  | NULL |  |  |
| accident_cause_over_45_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_iclaim_service_id | iclaim_service_id | no | 1 |
| PRIMARY | iclaim_opd_discharge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
