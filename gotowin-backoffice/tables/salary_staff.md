# `salary_staff`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| STAFF_ID | int | NO | PRI | NULL | auto_increment |  |
| STAFF_HR_ID | varchar(10) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| STAFF_LEADER_ID | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | STAFF_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "STAFF_ID": 1,
    "STAFF_HR_ID": "1",
    "updated_at": "2021-08-03 11:18:32",
    "created_at": null,
    "STAFF_LEADER_ID": "1"
  }
]
```
