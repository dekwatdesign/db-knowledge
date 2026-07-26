# `psych_guilt_info`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_guilt_info_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| psych_judgment_date | date | YES |  | NULL |  |  |
| staff_name | varchar(80) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| psych_judgment_note | varchar(255) | YES |  | NULL |  |  |
| psych_judgment_id | int(11) | YES | MUL | NULL |  |  |
| psych_case_id | int(11) | YES | MUL | NULL |  |  |
| psych_guilt_id | int(11) | YES | MUL | NULL |  |  |
| psych_offences_id | int(11) | YES | MUL | NULL |  |  |
| psych_add_date | date | YES |  | NULL |  |  |
| agency_sender_name | varchar(255) | YES |  | NULL |  |  |
| agency_return_name | varchar(255) | YES |  | NULL |  |  |
| bail | char(1) | YES |  | NULL |  |  |
| psych_forensic_obj_type_id | int(11) | YES |  | NULL |  |  |
| psych_process_judgment_id | int(11) | YES |  | NULL |  |  |
| psych_agency_send_id | int(11) | YES |  | NULL |  |  |
| psych_agency_return_id | int(11) | YES |  | NULL |  |  |
| psych_guilt_info_regis_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_case5 | psych_case_id | no | 1 |
| ix_Refpsych_guilt6 | psych_guilt_id | no | 1 |
| ix_Refpsych_judgment4 | psych_judgment_id | no | 1 |
| ix_Refpsych_offences7 | psych_offences_id | no | 1 |
| PRIMARY | psych_guilt_info_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
