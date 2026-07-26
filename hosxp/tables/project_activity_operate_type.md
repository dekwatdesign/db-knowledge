# `project_activity_operate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_activity_operate_type_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_operate_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_activity_operate_type_name | project_activity_operate_type_name | yes | 1 |
| PRIMARY | project_activity_operate_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "project_activity_operate_type_id": 1,
    "project_activity_operate_type_name": "ขออนุมัติ"
  },
  {
    "project_activity_operate_type_id": 2,
    "project_activity_operate_type_name": "ใบสั่งซื้อ"
  },
  {
    "project_activity_operate_type_id": 3,
    "project_activity_operate_type_name": "ตรวจรับ"
  }
]
```
