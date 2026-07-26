# `informcom_engineer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID_ENGINEER | int | NO | PRI | NULL | auto_increment | - |
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| POSITION | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| ENGINEER_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID_ENGINEER | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ID_ENGINEER": 5,
    "PERSON_ID": "253",
    "POSITION": "นักวิชาการคอมพิวเตอร์",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2023-10-05 07:52:08",
    "created_at": "2023-10-05 07:52:04"
  },
  {
    "ID_ENGINEER": 3,
    "PERSON_ID": "64",
    "POSITION": "นักวิชาการคอมพิวเตอร์",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-03-08 09:26:23",
    "created_at": "2022-03-08 09:26:11"
  },
  {
    "ID_ENGINEER": 4,
    "PERSON_ID": "63",
    "POSITION": "นักวิชาการคอมพิวเตอร์",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2023-01-12 07:57:18",
    "created_at": "2023-01-12 07:57:16"
  }
]
```
