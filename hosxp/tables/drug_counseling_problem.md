# `drug_counseling_problem`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| counseling_problem_id | int(11) | NO | PRI | 0 |  |  |
| problem_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | counseling_problem_id | yes | 1 |
| problem_name | problem_name | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
