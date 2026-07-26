# `atlas_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atlas_assessment_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| hn | varchar(12) | YES |  | NULL |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| assessment_json | longtext | YES |  | NULL |  |  |
| assessment_date | date | YES |  | NULL |  |  |
| assessment_time | time | YES |  | NULL |  |  |
| atlas_assessment_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | atlas_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
