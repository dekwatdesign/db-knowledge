# `meetingroom_objective`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| OBJECTIVE_ID | int | NO | PRI | NULL | auto_increment |  |
| OBJECTIVE_NAME | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | OBJECTIVE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "OBJECTIVE_ID": 1,
    "OBJECTIVE_NAME": "อบรม"
  },
  {
    "OBJECTIVE_ID": 2,
    "OBJECTIVE_NAME": "สัมมนา"
  },
  {
    "OBJECTIVE_ID": 3,
    "OBJECTIVE_NAME": "อื่นๆ"
  },
  {
    "OBJECTIVE_ID": 4,
    "OBJECTIVE_NAME": "ประชุม"
  }
]
```
