# `asset_care_repair_tech`

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

## Sample rows (7)

```json
[
  {
    "ID": 1,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 7,
    "updated_at": "2024-01-08 08:48:08",
    "created_at": "2024-01-08 08:48:08"
  },
  {
    "ID": 2,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 6,
    "updated_at": "2024-01-08 08:49:41",
    "created_at": "2024-01-08 08:49:41"
  },
  {
    "ID": 3,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 4,
    "updated_at": "2024-01-08 08:50:22",
    "created_at": "2024-01-08 08:50:22"
  },
  {
    "ID": 4,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 5,
    "updated_at": "2024-01-08 08:50:55",
    "created_at": "2024-01-08 08:50:55"
  },
  {
    "ID": 5,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 3,
    "updated_at": "2024-01-08 08:51:30",
    "created_at": "2024-01-08 08:51:30"
  },
  {
    "ID": 6,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 8,
    "updated_at": "2024-02-13 10:49:18",
    "created_at": "2024-02-13 10:49:18"
  },
  {
    "ID": 7,
    "REPAIR_ID": "",
    "HR_PERSON_ID": null,
    "HR_FULLNAME": "",
    "HR_POSITION": "",
    "REPAIR_INDEX_ID": 12,
    "updated_at": "2024-06-18 14:40:17",
    "created_at": "2024-06-18 14:40:17"
  }
]
```
