# `person_bc_self_examination`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_self_examination_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| examination_date | date | YES |  | NULL |  |  |
| person_bc_examination_type_id | int(11) | YES |  | NULL |  |  |
| person_bc_correct_type_id | int(11) | YES |  | NULL |  |  |
| person_bc_result_note | text | YES |  | NULL |  |  |
| person_bc_result_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_bc_self_examination_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
