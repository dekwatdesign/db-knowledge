# `person_screen_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_head_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES |  | NULL |  |  |
| person_screen_date | date | YES |  | NULL |  |  |
| person_screen_location_id | int(11) | YES |  | NULL |  |  |
| person_screen_type_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| person_screen_form_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | person_screen_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
