# `person_screen_form_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_form_detail_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_form_id | int(11) | YES | MUL | NULL |  |  |
| person_screen_id | int(11) | YES |  | NULL |  |  |
| control_type | varchar(50) | YES |  | NULL |  |  |
| list_value | text | YES |  | NULL |  |  |
| control_data | text | YES |  | NULL |  |  |
| class_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_form_id | person_screen_form_id | no | 1 |
| PRIMARY | person_screen_form_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
