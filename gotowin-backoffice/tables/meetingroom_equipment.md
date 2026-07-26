# `meetingroom_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| ROOM_ARTICLE_ID | varchar(20) | YES |  | NULL |  |  |
| ROOM_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| AMOUNT | int | YES |  | NULL |  |  |

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
    "ID": 1,
    "ROOM_ARTICLE_ID": "3",
    "ROOM_ID": 1,
    "updated_at": "2019-10-29 15:47:50",
    "created_at": "2019-10-29 15:47:50",
    "AMOUNT": 1
  },
  {
    "ID": 2,
    "ROOM_ARTICLE_ID": "2",
    "ROOM_ID": 1,
    "updated_at": "2020-09-22 08:26:43",
    "created_at": "2020-09-22 08:26:43",
    "AMOUNT": 1
  },
  {
    "ID": 3,
    "ROOM_ARTICLE_ID": "4",
    "ROOM_ID": 1,
    "updated_at": "2020-09-22 08:27:07",
    "created_at": "2020-09-22 08:27:07",
    "AMOUNT": 10
  },
  {
    "ID": 4,
    "ROOM_ARTICLE_ID": "2",
    "ROOM_ID": 2,
    "updated_at": "2020-09-22 08:27:34",
    "created_at": "2020-09-22 08:27:34",
    "AMOUNT": 1
  },
  {
    "ID": 5,
    "ROOM_ARTICLE_ID": "3",
    "ROOM_ID": 2,
    "updated_at": "2020-09-22 08:27:40",
    "created_at": "2020-09-22 08:27:40",
    "AMOUNT": 1
  },
  {
    "ID": 6,
    "ROOM_ARTICLE_ID": "4",
    "ROOM_ID": 2,
    "updated_at": "2020-09-22 08:27:49",
    "created_at": "2020-09-22 08:27:49",
    "AMOUNT": 20
  },
  {
    "ID": 7,
    "ROOM_ARTICLE_ID": "6",
    "ROOM_ID": 2,
    "updated_at": "2020-09-22 08:27:55",
    "created_at": "2020-09-22 08:27:55",
    "AMOUNT": 2
  },
  {
    "ID": 8,
    "ROOM_ARTICLE_ID": "11",
    "ROOM_ID": 2,
    "updated_at": "2020-09-22 08:28:13",
    "created_at": "2020-09-22 08:28:13",
    "AMOUNT": 1
  }
]
```
