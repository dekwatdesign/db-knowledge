# `project_est_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_est_type_id | int(11) | NO | PRI | 0 |  |  |
| project_est_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_est_type_name | project_est_type_name | yes | 1 |
| PRIMARY | project_est_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "project_est_type_id": 1,
    "project_est_type_name": "วันประกาศ"
  },
  {
    "project_est_type_id": 2,
    "project_est_type_name": "วันลงนาม"
  },
  {
    "project_est_type_id": 3,
    "project_est_type_name": "วันส่งมอบงาน"
  }
]
```
