# `medplan_ipd_refill`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medplan_ipd_refill_id | int(11) | NO | PRI | 0 |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| refill_date | date | YES |  | NULL |  |  |
| refill_time | time | YES |  | NULL |  |  |
| ipt_order_id | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| request_staff | varchar(20) | YES |  | NULL |  |  |
| request_ok | char(1) | YES |  | NULL |  |  |
| medplan_ipd_refill_type_id | int(11) | YES |  | NULL |  |  |
| request_qty | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_med_plan_number | med_plan_number | no | 1 |
| ix_nr | med_plan_number | no | 1 |
| ix_nr | request_ok | no | 2 |
| PRIMARY | medplan_ipd_refill_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
