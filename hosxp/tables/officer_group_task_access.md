# `officer_group_task_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_group_task_access_id | int(11) | NO | PRI | 0 |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |
| officer_module_task_access_id | int(11) | YES |  | NULL |  |  |
| officer_task_id | int(11) | YES | MUL | NULL |  |  |
| officer_operation_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES | MUL | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| can_view | char(1) | YES |  | NULL |  |  |
| can_add | char(1) | YES |  | NULL |  |  |
| can_edit | char(1) | YES |  | NULL |  |  |
| can_delete | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_group_id | officer_group_id | no | 1 |
| ix_oper_id | officer_operation_id | no | 1 |
| ix_staff | staff | no | 1 |
| ix_staff_uni | staff | yes | 1 |
| ix_staff_uni | officer_task_id | yes | 2 |
| ix_staff_uni | officer_operation_id | yes | 3 |
| ix_task_id | officer_task_id | no | 1 |
| ix_task_uni | officer_group_id | yes | 1 |
| ix_task_uni | officer_task_id | yes | 2 |
| ix_task_uni | officer_operation_id | yes | 3 |
| ix_task_uni_index | officer_group_id | yes | 1 |
| ix_task_uni_index | officer_operation_id | yes | 2 |
| ix_task_uni_index | officer_task_id | yes | 3 |
| ix_uni | officer_group_id | yes | 1 |
| ix_uni | officer_module_task_access_id | yes | 2 |
| PRIMARY | officer_group_task_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "officer_group_task_access_id": 1,
    "officer_group_id": 1,
    "officer_module_task_access_id": 0,
    "officer_task_id": 49,
    "officer_operation_id": 0,
    "staff": "[MASKED_FULLNAME]",
    "update_datetime": "2022-02-07 15:47:50",
    "can_view": "Y",
    "can_add": "Y",
    "can_edit": "Y",
    "can_delete": "Y"
  }
]
```
