# `infowork_job_person_permission_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_PERMIS_LIST_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJOB_PERMIS_ID | bigint | NO |  | NULL |  |  |
| IWJOB_PERMIS_LIST_PERSON_ID | bigint | NO |  | NULL |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_PERMIS_LIST_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "IWJOB_PERMIS_LIST_ID": 1,
    "IWJOB_PERMIS_ID": 1,
    "IWJOB_PERMIS_LIST_PERSON_ID": 10,
    "created_at": "2022-01-18 15:25:13",
    "updated_at": "2022-01-18 15:25:13"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 2,
    "IWJOB_PERMIS_ID": 1,
    "IWJOB_PERMIS_LIST_PERSON_ID": 11,
    "created_at": "2022-01-18 15:25:23",
    "updated_at": "2022-01-18 15:25:23"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 3,
    "IWJOB_PERMIS_ID": 1,
    "IWJOB_PERMIS_LIST_PERSON_ID": 212,
    "created_at": "2022-01-18 15:25:51",
    "updated_at": "2022-01-18 15:25:51"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 4,
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_LIST_PERSON_ID": 59,
    "created_at": "2022-01-18 15:26:32",
    "updated_at": "2022-01-18 15:26:32"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 5,
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_LIST_PERSON_ID": 60,
    "created_at": "2022-01-18 15:26:46",
    "updated_at": "2022-01-18 15:26:46"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 6,
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_LIST_PERSON_ID": 63,
    "created_at": "2022-01-18 15:27:30",
    "updated_at": "2022-01-18 15:27:30"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 7,
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_LIST_PERSON_ID": 64,
    "created_at": "2022-01-18 15:28:01",
    "updated_at": "2022-01-18 15:28:01"
  },
  {
    "IWJOB_PERMIS_LIST_ID": 8,
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_LIST_PERSON_ID": 61,
    "created_at": "2022-01-18 15:28:23",
    "updated_at": "2022-01-18 15:28:23"
  }
]
```
