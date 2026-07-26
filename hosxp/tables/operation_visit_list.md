# `operation_visit_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_visit_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_id | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| visit_note | text | YES |  | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| modify_staff | varchar(50) | YES |  | NULL |  |  |
| operation_visit_type_id | int(11) | YES |  | NULL |  |  |
| symptom | varchar(200) | YES |  | NULL |  |  |
| operation_satf_type_id | int(11) | YES |  | NULL |  |  |
| position_id | int(11) | YES |  | NULL |  |  |
| operation_visit_anes_type_id | int(11) | YES |  | NULL |  |  |
| pre_oper_note | text | YES |  | NULL |  |  |
| pre_anes_note | text | YES |  | NULL |  |  |
| pre_medication_note | text | YES |  | NULL |  |  |
| pre_premed_note | text | YES |  | NULL |  |  |
| operation_text | text | YES |  | NULL |  |  |
| anes_history_text | text | YES |  | NULL |  |  |
| medication_history_text | text | YES |  | NULL |  |  |
| operation_premed_text | text | YES |  | NULL |  |  |
| chronic_disease_text | text | YES |  | NULL |  |  |
| note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | operation_visit_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
