# `issue_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_status_id | int(11) | NO | PRI | 0 |  |  |
| issue_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_status_name | issue_status_name | yes | 1 |
| PRIMARY | issue_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "issue_status_id": 2,
    "issue_status_name": "Acknowledged"
  },
  {
    "issue_status_id": 4,
    "issue_status_name": "Assigned"
  },
  {
    "issue_status_id": 6,
    "issue_status_name": "Closed"
  },
  {
    "issue_status_id": 3,
    "issue_status_name": "Confirmed"
  },
  {
    "issue_status_id": 1,
    "issue_status_name": "New"
  },
  {
    "issue_status_id": 5,
    "issue_status_name": "Resolved"
  }
]
```
