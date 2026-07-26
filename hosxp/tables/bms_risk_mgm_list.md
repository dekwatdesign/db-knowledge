# `bms_risk_mgm_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_list_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_coso_type_id | int(11) | YES |  | NULL |  |  |
| bms_risk_mgm_date | date | YES |  | NULL |  |  |
| risk_mgm_ident_text | text | YES |  | NULL |  |  |
| risk_mgm_impact_text | text | YES |  | NULL |  |  |
| bms_risk_likelihood_type_id | int(11) | YES | MUL | NULL |  |  |
| bms_risk_consequence_type_id | int(11) | YES | MUL | NULL |  |  |
| target_likelihood_type_id | int(11) | YES |  | NULL |  |  |
| target_consequence_type_id | int(11) | YES |  | NULL |  |  |
| current_likelihood_type_id | int(11) | YES |  | NULL |  |  |
| current_consequence_type_id | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| bms_risk_mgm_type_id | int(11) | YES |  | NULL |  |  |
| risk_mgm_plan_text | text | YES |  | NULL |  |  |
| bms_risk_mgm_subtype_id | int(11) | YES |  | NULL |  |  |
| emp_dep_id | int(11) | YES |  | NULL |  |  |
| incident_count | int(11) | YES |  | NULL |  |  |
| key_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | bms_risk_likelihood_type_id | no | 1 |
| ix_code | bms_risk_consequence_type_id | no | 2 |
| ix_code_index | bms_risk_consequence_type_id | no | 1 |
| ix_code_index | bms_risk_likelihood_type_id | no | 2 |
| ix_key_id | key_id | no | 1 |
| PRIMARY | bms_risk_mgm_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
