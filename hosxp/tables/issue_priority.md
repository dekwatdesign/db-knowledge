# `issue_priority`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_priority_id | int(11) | NO | PRI | 0 |  |  |
| issue_priority_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_priority_name | issue_priority_name | yes | 1 |
| PRIMARY | issue_priority_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "issue_priority_id": 3,
    "issue_priority_name": "High"
  },
  {
    "issue_priority_id": 4,
    "issue_priority_name": "Immediate"
  },
  {
    "issue_priority_id": 1,
    "issue_priority_name": "Low"
  },
  {
    "issue_priority_id": 2,
    "issue_priority_name": "Medium"
  }
]
```
