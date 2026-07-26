# `supplies_officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| SUP_OFFICER_ID | int unsigned | NO | PRI | NULL | auto_increment |  |
| SUP_OFFICER_PERSON_ID | varchar(255) | YES |  | NULL |  |  |
| SUP_OFFICER_PERSON_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | SUP_OFFICER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "SUP_OFFICER_ID": 3,
    "SUP_OFFICER_PERSON_ID": "52",
    "SUP_OFFICER_PERSON_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2021-12-03 08:30:00",
    "created_at": "2021-05-13 07:01:09"
  }
]
```
