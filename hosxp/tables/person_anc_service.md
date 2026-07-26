# `person_anc_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_anc_service_id | int(11) | NO | PRI | 0 |  |  |
| person_anc_id | int(11) | YES | MUL | NULL |  |  |
| anc_service_date | date | YES |  | NULL |  |  |
| anc_service_note | varchar(250) | YES |  | NULL |  |  |
| pa_week | int(11) | YES | MUL | NULL |  |  |
| service_result | char(1) | YES |  | NULL |  |  |
| provider_type | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| provider_hospcode | varchar(9) | YES |  | NULL |  |  |
| old_visitno | int(11) | YES | MUL | NULL |  |  |
| anc_service_type_id | int(11) | YES |  | NULL |  |  |
| anc_service_number | int(11) | YES |  | NULL |  |  |
| service_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| anc_service_time | time | YES |  | NULL |  |  |
| anc_location_type_id | int(11) | YES |  | NULL |  |  |
| old_visitcode | varchar(25) | YES | MUL | NULL |  |  |
| real_anc_service | char(1) | YES |  | NULL |  |  |
| home_visit | char(1) | YES |  | NULL |  |  |
| pass_quality | char(1) | YES |  | NULL |  |  |
| service_note_text | text | YES |  | NULL |  |  |
| ultrasound_flag | char(1) | YES |  | NULL |  |  |
| pa_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_old_visitcode | old_visitcode | no | 1 |
| ix_old_visitno | old_visitno | no | 1 |
| ix_pa_week | pa_week | no | 1 |
| ix_person_anc_id | person_anc_id | no | 1 |
| PRIMARY | person_anc_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
