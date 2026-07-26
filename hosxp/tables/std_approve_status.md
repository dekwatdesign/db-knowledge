# `std_approve_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| std_approve_status_id | int(11) | NO | PRI | 0 |  |  |
| std_approve_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_std_approve_status_name | std_approve_status_name | yes | 1 |
| PRIMARY | std_approve_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "std_approve_status_id": 1,
    "std_approve_status_name": "Waiting"
  },
  {
    "std_approve_status_id": 2,
    "std_approve_status_name": "Accept"
  },
  {
    "std_approve_status_id": 3,
    "std_approve_status_name": "Unacccept"
  }
]
```
