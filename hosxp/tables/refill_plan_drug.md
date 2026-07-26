# `refill_plan_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| plan_drug_id | int(11) | NO | PRI | 0 |  |  |
| plan_disease_id | int(11) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| default_qty | decimal(10,0) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_plan_drug_disease | plan_disease_id | no | 1 |
| ix_idx_plan_drug_icode | icode | no | 1 |
| PRIMARY | plan_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
