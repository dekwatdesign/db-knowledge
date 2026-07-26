# `oapp_schedule_task`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_schedule_task_id | int(11) | NO | PRI | 0 |  |  |
| task_name | varchar(200) | YES |  | NULL |  |  |
| run_time | datetime | YES |  | NULL |  |  |
| schedule_datetime | datetime | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_task_name_schedule_datetime | schedule_datetime | yes | 1 |
| ix_task_name_schedule_datetime | task_name | yes | 2 |
| PRIMARY | oapp_schedule_task_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
