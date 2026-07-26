# `officer_module_task_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_module_task_access_id | int(11) | NO | PRI | 0 |  |  |
| officer_module_id | int(11) | YES | MUL | NULL |  |  |
| officer_task_id | int(11) | YES |  | NULL |  |  |
| officer_operation_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_uni | officer_module_id | yes | 1 |
| ix_uni | officer_task_id | yes | 2 |
| ix_uni | officer_operation_id | yes | 3 |
| ix_uni_index | officer_module_id | yes | 1 |
| ix_uni_index | officer_operation_id | yes | 2 |
| ix_uni_index | officer_task_id | yes | 3 |
| PRIMARY | officer_module_task_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
