# `informcom_repair_engineer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_ID | varchar(20) | YES |  |  |  |  |
| HR_PERSON_ID | varchar(10) | YES |  |  |  |  |
| HR_FULLNAME | varchar(200) | YES |  |  |  |  |
| HR_POSITION | varchar(200) | YES |  |  |  |  |
| REPAIR_INDEX_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_index | ID | no | 1 |
| ix_index | REPAIR_ID | no | 2 |
| ix_index | HR_PERSON_ID | no | 3 |
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 89,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1,
    "updated_at": "2022-08-16 11:55:30",
    "created_at": "2022-08-16 11:55:30"
  },
  {
    "ID": 92,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 2,
    "updated_at": "2022-10-05 15:48:42",
    "created_at": "2022-10-05 15:48:42"
  },
  {
    "ID": 91,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 3,
    "updated_at": "2022-10-05 15:47:59",
    "created_at": "2022-10-05 15:47:59"
  },
  {
    "ID": 93,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 4,
    "updated_at": "2022-12-13 11:29:51",
    "created_at": "2022-12-13 11:29:51"
  },
  {
    "ID": 94,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 5,
    "updated_at": "2022-12-23 11:02:01",
    "created_at": "2022-12-23 11:02:01"
  },
  {
    "ID": 95,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 6,
    "updated_at": "2023-01-12 15:02:09",
    "created_at": "2023-01-12 15:02:09"
  },
  {
    "ID": 96,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 7,
    "updated_at": "2023-04-10 14:59:04",
    "created_at": "2023-04-10 14:59:04"
  },
  {
    "ID": 97,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "64",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 8,
    "updated_at": "2023-05-24 10:32:19",
    "created_at": "2023-05-24 10:32:19"
  }
]
```
