# `rad_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_request_list_id | int(11) | NO | PRI | 0 |  |  |
| rad_request_form_id | int(11) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vnan | varchar(12) | YES | MUL | NULL |  |  |
| rad_request_date | date | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| rad_request_specimen_type_id | int(11) | YES |  | NULL |  |  |
| specimen_note | text | YES |  | NULL |  |  |
| rad_request_pathogen_type_id | int(11) | YES |  | NULL |  |  |
| pathogen_note | text | YES |  | NULL |  |  |
| rad_request_med_type_id | int(11) | YES |  | NULL |  |  |
| theory_note | text | YES |  | NULL |  |  |
| approve_staff | varchar(25) | YES |  | NULL |  |  |
| approve | char(1) | YES |  | NULL |  |  |
| approve_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_id | rad_request_form_id | no | 1 |
| ix_vn | vnan | no | 1 |
| PRIMARY | rad_request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
