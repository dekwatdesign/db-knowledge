# `bms_risk_mgm_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_detail_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_list_id | int(11) | YES |  | NULL |  |  |
| bms_risk_mgm_plan_text | text | YES |  | NULL |  |  |
| bms_risk_mgm_begin_date | date | YES |  | NULL |  |  |
| bms_risk_mgm_end_date | date | YES |  | NULL |  |  |
| bms_risk_mgm_eval_text | text | YES |  | NULL |  |  |
| bms_risk_mgm_old_risk_text | text | YES |  | NULL |  |  |
| bms_risk_mgm_new_risk_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | bms_risk_mgm_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
