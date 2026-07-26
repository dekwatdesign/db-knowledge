# `emp_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| emp_status_id | int(11) | NO | PRI | 0 |  |  |
| emp_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | emp_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "emp_status_id": 1,
    "emp_status_name": "ลาออก"
  },
  {
    "emp_status_id": 2,
    "emp_status_name": "ปฎิบัติงาน"
  }
]
```
