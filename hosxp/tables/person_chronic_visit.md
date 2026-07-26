# `person_chronic_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_chronic_visit_id | int(11) | NO | PRI | 0 |  |  |
| person_chronic_id | int(11) | YES |  | NULL |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| visit_staff | varchar(50) | YES |  | NULL |  |  |
| visit_note | longtext | YES |  | NULL |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| vital_sign | text | YES |  | NULL |  |  |
| diagnosis_text | text | YES |  | NULL |  |  |
| operation_text | text | YES |  | NULL |  |  |
| medication_text | text | YES |  | NULL |  |  |
| bw | double(15,3) | YES |  | NULL |  |  |
| height | double(15,3) | YES |  | NULL |  |  |
| bps | int(11) | YES |  | NULL |  |  |
| bpd | int(11) | YES |  | NULL |  |  |
| pulse | int(11) | YES |  | NULL |  |  |
| rr | int(11) | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_chronic_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
