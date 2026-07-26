# `schedule_task`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| task_name | varchar(250) | YES | MUL | NULL |  |  |
| task_user | varchar(50) | YES | MUL | NULL |  |  |
| task_date_time | datetime | YES | MUL | NULL |  |  |
| task_complete | char(1) | YES | MUL | NULL |  |  |
| task_due_date | date | YES | MUL | NULL |  |  |
| task_memo | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | id | yes | 1 |
| task_complete | task_complete | no | 1 |
| task_date_time | task_date_time | no | 1 |
| task_due_date | task_due_date | no | 1 |
| task_name | task_name | no | 1 |
| task_user | task_user | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
