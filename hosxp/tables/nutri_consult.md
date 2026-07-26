# `nutri_consult`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_date | date | YES |  | NULL |  |  |
| nutri_consult_time | time | YES |  | NULL |  |  |
| nutri_consult_doctor_note | text | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| nutri_consult_confirm | char(1) | YES |  | NULL |  |  |
| nutri_consult_confirm_date | date | YES |  | NULL |  |  |
| nutri_consult_confirm_time | time | YES |  | NULL |  |  |
| nutri_consult_confirm_staff | varchar(50) | YES |  | NULL |  |  |
| nutri_consult_receive | char(1) | YES |  | NULL |  |  |
| nutri_consult_receive_date | date | YES |  | NULL |  |  |
| nutri_consult_receive_time | time | YES |  | NULL |  |  |
| nutri_consult_receive_staff | varchar(50) | YES |  | NULL |  |  |
| nutri_consult_status_id | int(11) | YES | MUL | NULL |  |  |
| nutri_priority_id | int(11) | YES | MUL | NULL |  |  |
| nutri_consult_type_id | int(11) | YES | MUL | NULL |  |  |
| nutri_consult_track | char(1) | YES |  | NULL |  |  |
| nutri_consult_track_date | date | YES |  | NULL |  |  |
| nutri_consult_track_time | time | YES |  | NULL |  |  |
| nutri_consult_track_doctor | varchar(15) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refdoctor32 | doctor_code | no | 1 |
| ix_Refnutri_consult_status14 | nutri_consult_status_id | no | 1 |
| ix_Refnutri_consult_type22 | nutri_consult_type_id | no | 1 |
| ix_Refnutri_priority15 | nutri_priority_id | no | 1 |
| PRIMARY | nutri_consult_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
