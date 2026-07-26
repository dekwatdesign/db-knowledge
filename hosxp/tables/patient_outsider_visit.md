# `patient_outsider_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_outsider_visit_id | int(11) | NO | PRI | 0 |  |  |
| visit_date | date | YES |  | NULL |  |  |
| visit_time | time | YES |  | NULL |  |  |
| visit_note | text | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| patient_outsider_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_id | patient_outsider_id | no | 1 |
| PRIMARY | patient_outsider_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
