# `bms_risk_mgm_asmt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_mgm_asmt_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_list_id | int(11) | YES |  | NULL |  |  |
| assesment_date | date | YES |  | NULL |  |  |
| staff_code | varchar(50) | YES |  | NULL |  |  |
| assesment_text | text | YES |  | NULL |  |  |
| result_likelihood_type_id | int(11) | YES |  | NULL |  |  |
| result_consequence_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | bms_risk_mgm_asmt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
