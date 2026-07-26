# `psych_forensic_sender`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_forensic_sender_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(13) | YES |  | NULL |  |  |
| agency_sender_name | varchar(255) | YES |  | NULL |  |  |
| agency_return_name | varchar(255) | YES |  | NULL |  |  |
| bail | char(1) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| staff_name | varchar(100) | YES |  | NULL |  |  |
| psych_forensic_obj_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_process_judgment_id | int(11) | YES | MUL | NULL |  |  |
| psych_agency_send_id | int(11) | YES | MUL | NULL |  |  |
| psych_agency_return_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refpsych_agency_return4 | psych_agency_return_id | no | 1 |
| ix_Refpsych_agency_send3 | psych_agency_send_id | no | 1 |
| ix_Refpsych_forensic_obj_type1 | psych_forensic_obj_type_id | no | 1 |
| ix_Refpsych_process_judgment2 | psych_process_judgment_id | no | 1 |
| PRIMARY | psych_forensic_sender_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
