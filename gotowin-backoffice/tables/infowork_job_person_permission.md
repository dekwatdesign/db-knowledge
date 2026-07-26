# `infowork_job_person_permission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| IWJOB_PERMIS_ID | bigint unsigned | NO | PRI | NULL | auto_increment |  |
| IWJOB_PERMIS_PERSON_ID | bigint | NO |  | NULL |  |  |
| created_at | timestamp | YES |  | NULL |  |  |
| updated_at | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | IWJOB_PERMIS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "IWJOB_PERMIS_ID": 1,
    "IWJOB_PERMIS_PERSON_ID": 8,
    "created_at": "2022-01-18 15:24:49",
    "updated_at": "2022-01-18 15:24:49"
  },
  {
    "IWJOB_PERMIS_ID": 2,
    "IWJOB_PERMIS_PERSON_ID": 53,
    "created_at": "2022-01-18 15:26:09",
    "updated_at": "2022-01-18 15:26:09"
  },
  {
    "IWJOB_PERMIS_ID": 3,
    "IWJOB_PERMIS_PERSON_ID": 26,
    "created_at": "2022-01-18 15:29:22",
    "updated_at": "2022-01-18 15:29:22"
  },
  {
    "IWJOB_PERMIS_ID": 4,
    "IWJOB_PERMIS_PERSON_ID": 22,
    "created_at": "2022-01-19 02:18:37",
    "updated_at": "2022-01-19 02:18:37"
  },
  {
    "IWJOB_PERMIS_ID": 5,
    "IWJOB_PERMIS_PERSON_ID": 36,
    "created_at": "2022-01-19 02:19:16",
    "updated_at": "2022-01-19 02:19:16"
  }
]
```
