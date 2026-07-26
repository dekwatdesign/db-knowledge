# `person_screen_normal_value1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_normal_value1_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_id | int(11) | YES | MUL | NULL |  |  |
| min_value | double(15,3) | YES |  | NULL |  |  |
| max_value | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_id | person_screen_id | no | 1 |
| PRIMARY | person_screen_normal_value1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
