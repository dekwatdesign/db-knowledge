# `rad_doctor_condition`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_doctor_condition_id | int(11) | NO | PRI | 0 |  |  |
| rad_doctor_confirm_id | int(11) | YES | MUL | NULL |  |  |
| rad_condition_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | rad_doctor_confirm_id | no | 1 |
| ix_id2 | rad_condition_type_id | no | 1 |
| PRIMARY | rad_doctor_condition_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
