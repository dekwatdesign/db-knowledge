# `school_officer_check_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| school_officer_check_list_id | int(11) | NO | PRI | 0 |  |  |
| village_student_screen_id | int(11) | YES | MUL | NULL |  |  |
| school_officer_check_id | int(11) | YES |  | NULL |  |  |
| check_value | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_student_screen_id | village_student_screen_id | no | 1 |
| PRIMARY | school_officer_check_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
