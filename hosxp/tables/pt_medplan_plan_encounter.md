# `pt_medplan_plan_encounter`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medplan_plan_encounter_id | int(11) | NO | PRI | 0 |  |  |
| pt_medplan_plan_id | int(11) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| committed_by | varchar(50) | YES |  | NULL |  |  |
| committed_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_plan_enc_vn | vn | no | 1 |
| ix_uq_plan_vn | pt_medplan_plan_id | yes | 1 |
| ix_uq_plan_vn | vn | yes | 2 |
| PRIMARY | pt_medplan_plan_encounter_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
