# `oapp_schedule_task_finish`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_schedule_task_finish_id | int(11) | NO | PRI | 0 |  |  |
| task_name | varchar(200) | YES |  | NULL |  |  |
| oapp_id | int(11) | YES | MUL | NULL |  |  |
| run_time | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_oapp_id_name | oapp_id | yes | 1 |
| ix_oapp_id_name | task_name | yes | 2 |
| PRIMARY | oapp_schedule_task_finish_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
