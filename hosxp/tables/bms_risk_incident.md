# `bms_risk_incident`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_risk_incident_id | int(11) | NO | PRI | 0 |  |  |
| bms_risk_mgm_list_id | int(11) | YES | MUL | NULL |  |  |
| bms_risk_incident_date | date | YES |  | NULL |  |  |
| bms_risk_incident_time | time | YES |  | NULL |  |  |
| bms_risk_incident_text | text | YES |  | NULL |  |  |
| bms_risk_incident_report_staff | varchar(50) | YES |  | NULL |  |  |
| bms_risk_level_type_id | int(11) | YES |  | NULL |  |  |
| bms_risk_begin_datetime | datetime | YES |  | NULL |  |  |
| bms_risk_end_datetime | datetime | YES |  | NULL |  |  |
| bms_risk_incident_mgm_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | bms_risk_mgm_list_id | no | 1 |
| PRIMARY | bms_risk_incident_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
