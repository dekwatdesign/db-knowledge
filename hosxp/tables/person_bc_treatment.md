# `person_bc_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_treatment_id | int(11) | NO | PRI | 0 |  |  |
| person_bc_screen_id | int(11) | YES | MUL | NULL |  |  |
| person_bc_treatment_type_id | int(11) | YES |  | NULL |  |  |
| confirm_treatment | char(1) | YES |  | NULL |  |  |
| treatment_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_bc_screen_id | person_bc_screen_id | no | 1 |
| ix_unique | person_bc_screen_id | yes | 1 |
| ix_unique | person_bc_treatment_type_id | yes | 2 |
| PRIMARY | person_bc_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
