# `rad_doctor_criteria`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_doctor_criteria_id | int(11) | NO | PRI | 0 |  |  |
| rad_doctor_confirm_id | int(11) | YES |  | NULL |  |  |
| rad_criteria_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | rad_criteria_type_id | no | 1 |
| PRIMARY | rad_doctor_criteria_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
