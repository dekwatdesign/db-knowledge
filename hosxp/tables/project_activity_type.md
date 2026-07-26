# `project_activity_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_activity_type_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_activity_type_name | project_activity_type_name | yes | 1 |
| PRIMARY | project_activity_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "project_activity_type_id": 1,
    "project_activity_type_name": "จัดซื้อ"
  },
  {
    "project_activity_type_id": 2,
    "project_activity_type_name": "จัดจ้าง"
  }
]
```
