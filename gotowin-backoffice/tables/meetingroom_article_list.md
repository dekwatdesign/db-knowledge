# `meetingroom_article_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| SERVICE_ID | int | YES |  | NULL |  |  |
| ARTICLE_ID | varchar(10) | YES |  |  |  |  |
| TOTAL | int | YES |  | NULL |  |  |
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
    "ID": 7,
    "SERVICE_ID": 4,
    "ARTICLE_ID": "4",
    "TOTAL": 10,
    "updated_at": "2020-09-29 03:07:49",
    "created_at": "2020-09-29 03:07:49"
  },
  {
    "ID": 6,
    "SERVICE_ID": 4,
    "ARTICLE_ID": "2",
    "TOTAL": 1,
    "updated_at": "2020-09-29 03:07:49",
    "created_at": "2020-09-29 03:07:49"
  },
  {
    "ID": 5,
    "SERVICE_ID": 4,
    "ARTICLE_ID": "3",
    "TOTAL": 1,
    "updated_at": "2020-09-29 03:07:49",
    "created_at": "2020-09-29 03:07:49"
  },
  {
    "ID": 8,
    "SERVICE_ID": 4,
    "ARTICLE_ID": "16",
    "TOTAL": 1,
    "updated_at": "2020-09-29 03:07:49",
    "created_at": "2020-09-29 03:07:49"
  },
  {
    "ID": 9,
    "SERVICE_ID": 5,
    "ARTICLE_ID": "1",
    "TOTAL": 1,
    "updated_at": "2021-05-06 02:46:10",
    "created_at": "2021-05-06 02:46:10"
  },
  {
    "ID": 10,
    "SERVICE_ID": 5,
    "ARTICLE_ID": "3",
    "TOTAL": 1,
    "updated_at": "2021-05-06 02:46:10",
    "created_at": "2021-05-06 02:46:10"
  },
  {
    "ID": 59,
    "SERVICE_ID": 6,
    "ARTICLE_ID": "16",
    "TOTAL": 1,
    "updated_at": "2022-01-20 17:05:31",
    "created_at": "2022-01-20 17:05:31"
  },
  {
    "ID": 58,
    "SERVICE_ID": 6,
    "ARTICLE_ID": "1",
    "TOTAL": 1,
    "updated_at": "2022-01-20 17:05:31",
    "created_at": "2022-01-20 17:05:31"
  }
]
```
