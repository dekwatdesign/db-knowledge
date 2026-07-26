# `dental_work_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dental_work_type_id | int(11) | NO | PRI | 0 |  |  |
| dental_work_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dental_work_type_name | dental_work_type_name | yes | 1 |
| PRIMARY | dental_work_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dental_work_type_id": 1,
    "dental_work_type_name": "Type 1"
  },
  {
    "dental_work_type_id": 2,
    "dental_work_type_name": "Type 2"
  },
  {
    "dental_work_type_id": 3,
    "dental_work_type_name": "Type 3"
  }
]
```
