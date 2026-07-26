# `web_meta_data`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int unsigned | NO | PRI | NULL | auto_increment |  |
| meta_name | varchar(255) | NO |  | NULL |  |  |
| meta_value | varchar(255) | NO |  | NULL |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "id": 1,
    "meta_name": "displaygraph_class",
    "meta_value": "y",
    "created_at": "2021-05-11 19:19:33",
    "updated_at": "2022-06-01 02:39:19"
  },
  {
    "id": 2,
    "meta_name": "CPAY_DEFAULT_DEPARTMENT_SUB_SUB_ID",
    "meta_value": "12",
    "created_at": "2021-06-30 19:39:20",
    "updated_at": "2021-08-23 14:22:02"
  }
]
```
