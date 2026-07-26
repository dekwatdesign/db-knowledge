# `asset_care_enginer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ENGINERCARE_ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| POSITION | varchar(100) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| ENGINEER_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ENGINERCARE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ENGINERCARE_ID": 1,
    "PERSON_ID": "81",
    "POSITION": "เจ้าพนักงานทันตสาธารณสุข",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2021-12-03 08:31:25",
    "created_at": "2021-12-03 08:31:19"
  },
  {
    "ENGINERCARE_ID": 2,
    "PERSON_ID": "42",
    "POSITION": "ช่างไฟฟ้า",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-01-27 02:48:59",
    "created_at": "2022-01-27 02:48:41"
  },
  {
    "ENGINERCARE_ID": 3,
    "PERSON_ID": "43",
    "POSITION": "ช่างสี",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-01-27 02:49:00",
    "created_at": "2022-01-27 02:48:49"
  },
  {
    "ENGINERCARE_ID": 4,
    "PERSON_ID": "41",
    "POSITION": "ผู้ช่วยช่างทั่วไป",
    "ACTIVE": "True",
    "ENGINEER_NAME": "[MASKED_FULLNAME]",
    "updated_at": "2022-01-27 02:49:00",
    "created_at": "2022-01-27 02:48:55"
  }
]
```
