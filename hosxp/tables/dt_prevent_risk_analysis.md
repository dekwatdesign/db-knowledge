# `dt_prevent_risk_analysis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_prevent_risk_analysis_id | int(11) | NO | PRI | 0 |  |  |
| dt_prevent_risk_analysis_note | text | YES |  | NULL |  |  |
| dt_prevent_risk_analysis_caries | varchar(50) | YES |  | NULL |  |  |
| dt_prevent_risk_analysis_snote | text | YES |  | NULL |  |  |
| dt_prevent_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdt_prevent21 | dt_prevent_id | no | 1 |
| PRIMARY | dt_prevent_risk_analysis_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
