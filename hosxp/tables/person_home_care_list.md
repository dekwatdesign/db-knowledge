# `person_home_care_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_home_care_list_id | int(11) | NO | PRI | 0 |  |  |
| person_care_list_id | int(11) | YES | MUL | NULL |  |  |
| person_home_care_id | int(11) | YES | MUL | NULL |  |  |
| care_note | text | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_care_list_id | person_care_list_id | no | 1 |
| ix_person_home_care_id | person_home_care_id | no | 1 |
| PRIMARY | person_home_care_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
