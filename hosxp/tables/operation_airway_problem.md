# `operation_airway_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| airway_problem_id | int(11) | NO | PRI | 0 |  |  |
| airway_problem_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_airway_problem_name | airway_problem_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | airway_problem_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
