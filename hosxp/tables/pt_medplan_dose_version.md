# `pt_medplan_dose_version`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_medplan_dose_version_id | int(11) | NO | PRI | 0 |  |  |
| pt_medplan_medication_line_id | int(11) | YES | MUL | NULL |  |  |
| version_no | int(11) | YES |  | NULL |  |  |
| effective_start | datetime | YES |  | NULL |  |  |
| effective_end | datetime | YES | MUL | NULL |  |  |
| dose_amount | decimal(10,0) | YES |  | NULL |  |  |
| dose_unit_ucum | varchar(32) | YES |  | NULL |  |  |
| frequency | varchar(32) | YES |  | NULL |  |  |
| frequency_unit | varchar(10) | YES |  | NULL |  |  |
| when_code | varchar(32) | YES |  | NULL |  |  |
| route_code | varchar(40) | YES |  | NULL |  |  |
| duration_value | decimal(10,0) | YES |  | NULL |  |  |
| duration_unit | varchar(10) | YES |  | NULL |  |  |
| max_dose_per_period_value | decimal(10,0) | YES |  | NULL |  |  |
| max_dose_per_period_unit | varchar(10) | YES |  | NULL |  |  |
| sig_text | varchar(512) | YES |  | NULL |  |  |
| reason_code | varchar(50) | YES |  | NULL |  |  |
| reason_text | varchar(255) | YES |  | NULL |  |  |
| authored_by | varchar(50) | YES |  | NULL |  |  |
| authored_at | datetime | YES | MUL | NULL |  |  |
| based_on_version_id | bigint(20) | YES |  | NULL |  |  |
| medreq_fhir_id | varchar(64) | YES |  | NULL |  |  |
| committed_vn | varchar(20) | YES | MUL | NULL |  |  |
| opitemrece_hos_guid | varchar(40) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_version_authored | authored_at | no | 1 |
| ix_idx_version_commit | committed_vn | no | 1 |
| ix_idx_version_current | effective_end | no | 1 |
| ix_idx_version_current | pt_medplan_medication_line_id | no | 2 |
| ix_uq_line_versionno | pt_medplan_medication_line_id | yes | 1 |
| ix_uq_line_versionno | version_no | yes | 2 |
| PRIMARY | pt_medplan_dose_version_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
