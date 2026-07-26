# `hrd_team_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| TEAM_POSITION_ID | int | NO | PRI | NULL | auto_increment |  |
| TEAM_POSITION_NAME | varchar(255) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | TEAM_POSITION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "TEAM_POSITION_ID": 1,
    "TEAM_POSITION_NAME": "ประธาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 2,
    "TEAM_POSITION_NAME": "รองประธาน",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 3,
    "TEAM_POSITION_NAME": "เลขานุการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 4,
    "TEAM_POSITION_NAME": "ที่ปรึกษา",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 5,
    "TEAM_POSITION_NAME": "กรรมการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 6,
    "TEAM_POSITION_NAME": "ผู้ช่วยเลขานุการ",
    "updated_at": null,
    "created_at": null
  },
  {
    "TEAM_POSITION_ID": 10,
    "TEAM_POSITION_NAME": "กรรมการและผู้ช่วยเลขานุการ",
    "updated_at": "2020-02-18 13:40:54",
    "created_at": "2020-02-18 13:40:54"
  }
]
```
