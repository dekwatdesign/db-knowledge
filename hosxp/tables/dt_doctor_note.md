# `dt_doctor_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_doctor_note_id | int(11) | NO | PRI | 0 |  |  |
| dt_doctor_note_date | date | YES |  | NULL |  |  |
| dt_depcode_code | varchar(2) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| dt_doctor_note_descriptive | text | YES |  | NULL |  |  |
| dt_doctor_note_plan_next | text | YES |  | NULL |  |  |
| dt_doctor_note_caution | text | YES |  | NULL |  |  |
| dt_doctor_note_next_visit_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| staff_entry | varchar(20) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_doctor_note_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
