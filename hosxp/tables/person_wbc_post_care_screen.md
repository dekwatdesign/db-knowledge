# `person_wbc_post_care_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_wbc_post_care_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_wbc_post_care_id | int(11) | YES | MUL | NULL |  |  |
| post_care_screen_id | int(11) | YES |  | NULL |  |  |
| screen_value | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_wbc_post_care_id | person_wbc_post_care_id | no | 1 |
| PRIMARY | person_wbc_post_care_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
