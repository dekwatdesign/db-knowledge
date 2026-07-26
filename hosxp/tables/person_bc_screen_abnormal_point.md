# `person_bc_screen_abnormal_point`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_screen_abnormal_point_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_screen_id | int(11) | YES | MUL | NULL |  |  |
| person_breast_side_id | char(1) | YES |  | NULL |  |  |
| person_breast_point_id | int(11) | YES |  | NULL |  |  |
| abnormal | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_screen_id | person_bc_screen_id | no | 1 |
| ix_unique1 | person_bc_screen_id | no | 1 |
| ix_unique1 | person_breast_side_id | no | 2 |
| ix_unique1 | person_breast_point_id | no | 3 |
| ix_unique1_index | person_bc_screen_id | no | 1 |
| ix_unique1_index | person_breast_point_id | no | 2 |
| ix_unique1_index | person_breast_side_id | no | 3 |
| PRIMARY | person_bc_screen_abnormal_point_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
