# `dyspnea_assessment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dyspnea_assessment_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| create_date | date | YES | MUL | NULL |  |  |
| create_time | time | YES |  | NULL |  |  |
| dyspnea_scale | smallint(6) | YES |  | NULL |  |  |
| dyspnea_result_text | varchar(250) | YES |  | NULL |  |  |
| doctor_code | varchar(7) | YES |  | NULL |  |  |
| dyspnea_score | smallint(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dyspnea_assessment_create_date_idx | create_date | no | 1 |
| ix_dyspnea_assessment_hn_idx | hn | no | 1 |
| PRIMARY | dyspnea_assessment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
