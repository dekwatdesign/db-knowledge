# `officer_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_group_id | int(11) | NO | PRI | 0 |  |  |
| officer_group_name | varchar(200) | YES | UNI | NULL |  |  |
| officer_group_code | varchar(100) | YES | MUL | NULL |  |  |
| officer_module_list_text | varchar(2000) | YES |  | NULL |  |  |
| officer_task_list_text | varchar(3000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_officer_group_code | officer_group_code | no | 1 |
| ix_officer_group_name | officer_group_name | yes | 1 |
| PRIMARY | officer_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "officer_group_id": 1,
    "officer_group_name": "admin",
    "officer_group_code": null,
    "officer_module_list_text": null,
    "officer_task_list_text": null
  }
]
```
