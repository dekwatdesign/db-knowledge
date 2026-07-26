# `medication_dosage_instruction`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_dosage_instruction_id | int(11) | NO | PRI | 0 |  |  |
| medication_request_id | int(11) | YES | MUL | NULL |  |  |
| instruction_sequence | int(11) | YES |  | NULL |  |  |
| instruction_text | varchar(1000) | YES |  | NULL |  |  |
| timing_start | date | YES |  | NULL |  |  |
| timing_end | date | YES |  | NULL |  |  |
| timing_frequency | int(11) | YES |  | NULL |  |  |
| timing_period | int(11) | YES |  | NULL |  |  |
| timing_period_unit | varchar(10) | YES |  | NULL |  |  |
| route_code | varchar(15) | YES |  | NULL |  |  |
| dose_value | double(22,2) | YES |  | NULL |  |  |
| dose_unit | varchar(15) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hl7_route_of_admin_code | varchar(10) | YES |  | NULL |  |  |
| shortlist | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_medication_request_id | medication_request_id | no | 1 |
| PRIMARY | medication_dosage_instruction_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
