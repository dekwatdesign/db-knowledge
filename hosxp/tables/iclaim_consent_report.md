# `iclaim_consent_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_consent_report_id | int(11) | NO | PRI | 0 |  |  |
| scan_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(13) | YES |  | NULL |  |  |
| insured_self_status | char(1) | YES |  | NULL |  |  |
| insured_parents_status | char(1) | YES |  | NULL |  |  |
| insurance_agent_name | varchar(250) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_consent_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
