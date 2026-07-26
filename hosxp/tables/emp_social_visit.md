# `emp_social_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_social_visit_id | int(11) | NO | PRI | 0 |  |  |
| emp_social_visit_date | date | YES |  | NULL |  |  |
| emp_social_visit_time | time | YES |  | NULL |  |  |
| emp_social_visit_symptom | varchar(255) | YES |  | NULL |  |  |
| emp_social_visit_progress | varchar(255) | YES |  | NULL |  |  |
| emp_social_visi_advice | varchar(255) | YES |  | NULL |  |  |
| emp_social_visit_help | varchar(255) | YES |  | NULL |  |  |
| emp_social_welfare_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsocial_welfare28 | emp_social_welfare_id | no | 1 |
| PRIMARY | emp_social_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
