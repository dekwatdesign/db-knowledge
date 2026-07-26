# `issue_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_person_id | int(11) | NO | PRI | 0 |  |  |
| issue_person_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_person_name | issue_person_name | yes | 1 |
| PRIMARY | issue_person_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "issue_person_id": 1,
    "issue_person_name": "[MASKED_FULLNAME]"
  },
  {
    "issue_person_id": 2,
    "issue_person_name": "[MASKED_FULLNAME]"
  }
]
```
