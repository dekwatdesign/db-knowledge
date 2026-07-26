# `medplan_ipd_check`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medplan_ipd_check_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| med_before_approve_status | char(1) | YES |  | NULL |  |  |
| med_before_approve_staff | varchar(250) | YES |  | NULL |  |  |
| med_before_approve_datetime | datetime | YES |  | NULL |  |  |
| medplan_before_approve_note | text | YES |  | NULL |  |  |
| med_after_approve_status | char(1) | YES |  | NULL |  |  |
| med_after_approve_staff | varchar(250) | YES |  | NULL |  |  |
| med_after_approve_datetime | datetime | YES |  | NULL |  |  |
| medplan_after_approve_note | text | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| med_plan_rxdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_med_plan_number | med_plan_number | no | 1 |
| PRIMARY | medplan_ipd_check_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
