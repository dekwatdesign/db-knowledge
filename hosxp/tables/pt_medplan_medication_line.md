# `pt_medplan_medication_line`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medplan_medication_line_id | int(11) | NO | PRI | 0 |  |  |
| pt_medplan_plan_id | int(11) | YES |  | NULL |  |  |
| active_flag | tinyint(4) | YES | MUL | NULL |  |  |
| icode | varchar(20) | YES | MUL | NULL |  |  |
| tmt_code | varchar(64) | YES | MUL | NULL |  |  |
| route_code | varchar(40) | YES |  | NULL |  |  |
| prn_flag | tinyint(4) | YES |  | NULL |  |  |
| condition_ref | varchar(64) | YES |  | NULL |  |  |
| indication_code | varchar(50) | YES | MUL | NULL |  |  |
| indication_sys | varchar(15) | YES |  | NULL |  |  |
| indication_text | varchar(255) | YES |  | NULL |  |  |
| medication_fhir_id | varchar(64) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| created_by | varchar(50) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_line_icode | icode | no | 1 |
| ix_idx_line_indication | indication_code | no | 1 |
| ix_idx_line_indication | indication_sys | no | 2 |
| ix_idx_line_plan_active | active_flag | no | 1 |
| ix_idx_line_plan_active | pt_medplan_plan_id | no | 2 |
| ix_idx_line_tmt | tmt_code | no | 1 |
| PRIMARY | pt_medplan_medication_line_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
