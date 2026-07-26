# `rad_criteria_type_con`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rad_criteria_type_con_id | int(11) | NO | PRI | 0 |  |  |
| rad_criteria_type_id | int(11) | YES | MUL | NULL |  |  |
| rad_criteria_type_con_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | rad_criteria_type_id | no | 1 |
| PRIMARY | rad_criteria_type_con_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
