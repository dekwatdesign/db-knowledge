# `informrepair_tech`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIRTECH_ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(10) | YES |  |  |  |  |
| TECH_POSITION | varchar(255) | YES |  |  |  |  |
| ACTIVE | enum('True','False') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIRTECH_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "REPAIRTECH_ID": 21,
    "PERSON_ID": "9",
    "TECH_POSITION": "พนักงานพิมพ์",
    "ACTIVE": "True",
    "updated_at": "2026-04-01 08:38:00",
    "created_at": "2023-07-13 02:56:38"
  },
  {
    "REPAIRTECH_ID": 20,
    "PERSON_ID": "14",
    "TECH_POSITION": "เจ้าพนักงานโสตทัศนศึกษา",
    "ACTIVE": "True",
    "updated_at": "2026-04-01 08:38:00",
    "created_at": "2022-10-19 02:22:05"
  },
  {
    "REPAIRTECH_ID": 26,
    "PERSON_ID": "281",
    "TECH_POSITION": "[MASKED_FULLNAME]",
    "ACTIVE": "True",
    "updated_at": "2026-04-01 08:46:10",
    "created_at": "2026-04-01 08:46:06"
  },
  {
    "REPAIRTECH_ID": 24,
    "PERSON_ID": "297",
    "TECH_POSITION": "ช่างไฟฟ้า",
    "ACTIVE": "True",
    "updated_at": "2026-04-01 08:38:01",
    "created_at": "2025-12-02 03:35:45"
  }
]
```
