# `bms_risk_incident_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_incident_clinic_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_incident_id | int(11) | YES | UNI | NULL |  |  |
| bms_risk_impact_type_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bms_risk_incident_id | bms_risk_incident_id | yes | 1 |
| PRIMARY | bms_risk_incident_clinic_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
