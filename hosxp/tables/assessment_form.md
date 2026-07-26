# `assessment_form`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| assessment_form_id | int(11) | NO | PRI | 0 |  |  |
| assessment_form_table | varchar(100) | YES |  | NULL |  |  |
| assessment_form_name | varchar(100) | YES |  | NULL |  |  |
| assessment_form_dfm | longtext | YES |  | NULL |  |  |
| assessment_form_type | char(1) | YES |  | NULL |  |  |
| assessment_form_status | char(1) | YES |  | NULL |  |  |
| assessment_form_staff | varchar(50) | YES |  | NULL |  |  |
| assessment_form_datetime | datetime | YES |  | NULL |  |  |
| assessment_form_lastupdate | datetime | YES |  | NULL |  |  |
| assessment_form_mobile | char(1) | YES |  | NULL |  |  |
| assessment_form_active | varchar(3) | YES |  | NULL |  |  |
| assessment_form_width | int(11) | YES |  | NULL |  |  |
| assessment_form_height | int(11) | YES |  | NULL |  |  |
| assessment_form_report | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | assessment_form_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
