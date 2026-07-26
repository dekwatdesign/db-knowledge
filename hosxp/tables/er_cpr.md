# `er_cpr`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_cpr_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| cpr_date | date | YES |  | NULL |  |  |
| cpr_time | time | YES |  | NULL |  |  |
| cpr_note_text | text | YES |  | NULL |  |  |
| is_death | char(1) | YES |  | NULL |  |  |
| death_date | date | YES |  | NULL |  |  |
| death_time | time | YES |  | NULL |  |  |
| finish_date | date | YES |  | NULL |  |  |
| finish_time | time | YES |  | NULL |  |  |
| has_defibrillator | char(1) | YES |  | NULL |  |  |
| helper_doctor_code | varchar(15) | YES |  | NULL |  |  |
| er_cpr_result_type_id | int(11) | YES |  | NULL |  |  |
| er_cpr_time_minute | int(11) | YES |  | NULL |  |  |
| found_cardiac_arrest_datetime | datetime | YES |  | NULL |  |  |
| er_cpr_score_type_id | int(11) | YES |  | NULL |  |  |
| helper_list | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | er_cpr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
