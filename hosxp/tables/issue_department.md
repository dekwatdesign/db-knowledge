# `issue_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_department_id | int(11) | NO | PRI | 0 |  |  |
| issue_department_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_department_name | issue_department_name | yes | 1 |
| PRIMARY | issue_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "issue_department_id": 1,
    "issue_department_name": "ทั่วไป"
  }
]
```
