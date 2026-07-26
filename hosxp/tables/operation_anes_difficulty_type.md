# `operation_anes_difficulty_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anes_attempt_difficulty_id | int(11) | NO | PRI | 0 |  |  |
| anes_difficulty_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_anes_difficulty_type_name | anes_difficulty_type_name | yes | 1 |
| PRIMARY | anes_attempt_difficulty_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
