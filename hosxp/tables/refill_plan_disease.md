# `refill_plan_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| plan_disease_id | int(11) | NO | PRI | 0 |  |  |
| plan_id | int(11) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| diagtype | varchar(5) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_plan_disease_plan | plan_id | no | 1 |
| PRIMARY | plan_disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
