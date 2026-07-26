# `hrd_team_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| PERSON_ID | varchar(20) | YES |  |  |  |  |
| BOARD_NAME | varchar(100) | YES |  |  |  |  |
| BOARD_POSITION | varchar(100) | YES |  |  |  |  |
| TEAM_POSITION_ETC | varchar(100) | YES |  |  |  |  |
| TEAM_ID | varchar(255) | YES |  |  |  |  |
| TEAM_POSITION_ID | int | YES |  | NULL |  |  |
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
    "ID": 1,
    "PERSON_ID": "1",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "[MASKED_FULLNAME]",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 4,
    "updated_at": "2020-09-16 03:16:31",
    "created_at": "2020-09-16 03:15:15"
  },
  {
    "ID": 2,
    "PERSON_ID": "53",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "[MASKED_FULLNAME]",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 1,
    "updated_at": "2020-09-16 03:22:05",
    "created_at": "2020-09-16 03:15:47"
  },
  {
    "ID": 3,
    "PERSON_ID": "95",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 2,
    "updated_at": "2020-09-16 03:17:24",
    "created_at": "2020-09-16 03:17:24"
  },
  {
    "ID": 4,
    "PERSON_ID": "100",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 3,
    "updated_at": "2020-09-16 04:17:49",
    "created_at": "2020-09-16 03:18:48"
  },
  {
    "ID": 5,
    "PERSON_ID": "176",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 3,
    "updated_at": "2020-09-16 04:17:41",
    "created_at": "2020-09-16 04:17:41"
  },
  {
    "ID": 6,
    "PERSON_ID": "135",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 3,
    "updated_at": "2020-09-16 04:18:05",
    "created_at": "2020-09-16 04:18:05"
  },
  {
    "ID": 7,
    "PERSON_ID": "105",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 5,
    "updated_at": "2020-09-16 04:18:43",
    "created_at": "2020-09-16 04:18:43"
  },
  {
    "ID": 8,
    "PERSON_ID": "60",
    "BOARD_NAME": "[MASKED_FULLNAME]",
    "BOARD_POSITION": "พยาบาลวิชาชีพ",
    "TEAM_POSITION_ETC": null,
    "TEAM_ID": "12",
    "TEAM_POSITION_ID": 5,
    "updated_at": "2020-09-16 04:19:08",
    "created_at": "2020-09-16 04:19:08"
  }
]
```
