# `gleave_leader_person`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| PERSON_ID | varchar(11) | YES |  |  |  |  |
| LEADER_ID | varchar(11) | YES |  |  |  |  |
| PERSON_NAME | varchar(255) | YES |  |  |  |  |
| ID | int | NO | PRI | NULL | auto_increment |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "PERSON_ID": "2",
    "LEADER_ID": "1",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 1,
    "updated_at": "2020-02-13 09:52:49",
    "created_at": "2020-02-13 09:52:49"
  },
  {
    "PERSON_ID": "1",
    "LEADER_ID": "1",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 2,
    "updated_at": "2020-09-16 04:29:30",
    "created_at": "2020-09-16 04:29:30"
  },
  {
    "PERSON_ID": "53",
    "LEADER_ID": "63",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 3,
    "updated_at": "2020-09-16 04:30:59",
    "created_at": "2020-09-16 04:30:59"
  },
  {
    "PERSON_ID": "22",
    "LEADER_ID": "250",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 694,
    "updated_at": "2025-01-31 04:23:27",
    "created_at": "2025-01-31 04:23:27"
  },
  {
    "PERSON_ID": "133",
    "LEADER_ID": "131",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 851,
    "updated_at": "2025-12-19 04:54:44",
    "created_at": "2025-12-19 04:54:44"
  },
  {
    "PERSON_ID": "296",
    "LEADER_ID": "118",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 744,
    "updated_at": "2025-10-17 04:25:28",
    "created_at": "2025-10-17 04:25:28"
  },
  {
    "PERSON_ID": "278",
    "LEADER_ID": "182",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 865,
    "updated_at": "2025-12-19 05:01:48",
    "created_at": "2025-12-19 05:01:48"
  },
  {
    "PERSON_ID": "252",
    "LEADER_ID": "182",
    "PERSON_NAME": "[MASKED_FULLNAME]",
    "ID": 861,
    "updated_at": "2025-12-19 05:01:12",
    "created_at": "2025-12-19 05:01:12"
  }
]
```
