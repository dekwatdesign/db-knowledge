# `meetting_inside_professionsub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MEETING_INSIDE_PROFESSION_ID | int | NO | PRI | NULL | auto_increment |  |
| MEETING_INSIDE_PROFESSION_NAME | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| MEETING_INSIDE_ID | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MEETING_INSIDE_PROFESSION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MEETING_INSIDE_PROFESSION_ID": 2,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-01-17 09:04:55",
    "updated_at": "2022-01-17 09:04:55",
    "MEETING_INSIDE_ID": "1"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 3,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-01-17 15:42:49",
    "updated_at": "2022-01-17 15:42:49",
    "MEETING_INSIDE_ID": "1"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 4,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-01-17 15:45:35",
    "updated_at": "2022-01-17 15:45:35",
    "MEETING_INSIDE_ID": "2"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 5,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-01-20 09:13:00",
    "updated_at": "2022-01-20 09:13:00",
    "MEETING_INSIDE_ID": "3"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 6,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-01-27 09:49:03",
    "updated_at": "2022-01-27 09:49:03",
    "MEETING_INSIDE_ID": "4"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 7,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-02-25 15:17:27",
    "updated_at": "2022-02-25 15:17:27",
    "MEETING_INSIDE_ID": "6"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 8,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-04-04 15:07:22",
    "updated_at": "2022-04-04 15:07:22",
    "MEETING_INSIDE_ID": "9"
  },
  {
    "MEETING_INSIDE_PROFESSION_ID": 9,
    "MEETING_INSIDE_PROFESSION_NAME": null,
    "created_at": "2022-04-05 09:30:56",
    "updated_at": "2022-04-05 09:30:56",
    "MEETING_INSIDE_ID": "12"
  }
]
```
