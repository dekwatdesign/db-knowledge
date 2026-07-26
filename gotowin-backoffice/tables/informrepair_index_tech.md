# `informrepair_index_tech`

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
    "ID": 87,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1091,
    "updated_at": "2023-08-15 10:39:40",
    "created_at": "2023-08-15 10:39:40"
  },
  {
    "ID": 88,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1089,
    "updated_at": "2023-08-15 10:42:46",
    "created_at": "2023-08-15 10:42:46"
  },
  {
    "ID": 89,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "9",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1093,
    "updated_at": "2023-08-17 08:53:42",
    "created_at": "2023-08-17 08:53:42"
  },
  {
    "ID": 90,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "14",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1093,
    "updated_at": "2023-08-17 08:53:42",
    "created_at": "2023-08-17 08:53:42"
  },
  {
    "ID": 91,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "42",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1092,
    "updated_at": "2023-08-17 08:57:41",
    "created_at": "2023-08-17 08:57:41"
  },
  {
    "ID": 92,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "9",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1090,
    "updated_at": "2023-08-17 13:19:33",
    "created_at": "2023-08-17 13:19:33"
  },
  {
    "ID": 93,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "42",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1098,
    "updated_at": "2023-08-22 10:41:35",
    "created_at": "2023-08-22 10:41:35"
  },
  {
    "ID": 94,
    "REPAIR_ID": "",
    "HR_PERSON_ID": "14",
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 1097,
    "updated_at": "2023-08-22 10:43:27",
    "created_at": "2023-08-22 10:43:27"
  }
]
```
