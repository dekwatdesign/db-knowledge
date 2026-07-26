# `ipd_nurse_note_classify`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ward | varchar(4) | YES | MUL | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| admdate | int(11) | YES |  | NULL |  |  |
| patient_name | varchar(200) | YES |  | NULL |  |  |
| bedno | varchar(6) | YES |  | NULL |  |  |
| age_y | tinyint(4) | YES |  | NULL |  |  |
| age_m | tinyint(4) | YES |  | NULL |  |  |
| age_d | tinyint(4) | YES |  | NULL |  |  |
| roomno | varchar(4) | YES |  | NULL |  |  |
| note_date | date | YES | MUL | NULL |  |  |
| note_time | time | YES |  | NULL |  |  |
| note1 | text | YES |  | NULL |  |  |
| note2 | text | YES |  | NULL |  |  |
| note3 | text | YES |  | NULL |  |  |
| temp | double(15,3) | YES |  | NULL |  |  |
| spo2_o2 | int(11) | YES |  | NULL |  |  |
| respiratory_rate | int(11) | YES |  | NULL |  |  |
| bp_diastolic | int(11) | YES |  | NULL |  |  |
| bp_systolic | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| range_code1 | char(2) | YES |  | NULL |  |  |
| range_code2 | char(2) | YES |  | NULL |  |  |
| range_code3 | char(2) | YES |  | NULL |  |  |
| sos_score | int(11) | YES |  | NULL |  |  |
| nurse_code1 | varchar(10) | YES |  | NULL |  |  |
| nurse_code2 | varchar(10) | YES |  | NULL |  |  |
| nurse_code3 | varchar(10) | YES |  | NULL |  |  |
| map | int(11) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idxipd_nurse_note_classify_hn | hn | no | 1 |
| ix_idxipd_nurse_note_classify_note_date | note_date | no | 1 |
| ix_idxipd_nurse_note_classify_ward | ward | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
