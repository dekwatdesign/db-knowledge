# `assessment_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_head_id | int(11) | NO | PRI | 0 |  |  |
| vnan | varchar(13) | YES |  | NULL |  |  |
| assessment_head_staff | varchar(100) | YES |  | NULL |  |  |
| assessment_head_datetime | datetime | YES |  | NULL |  |  |
| assessment_form_id | int(11) | YES |  | NULL |  |  |
| assessment_head_lastupdate | datetime | YES |  | NULL |  |  |
| patient_type | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
