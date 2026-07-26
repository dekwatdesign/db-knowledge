# `gleave_leader`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| LEADER_ID | int | NO | PRI | 0 |  |  |
| LEADER_NAME | varchar(100) | YES |  |  |  |  |
| LEADER_POSITION | varchar(100) | YES |  |  |  |  |
| LEADER_TOP_NAME | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | LEADER_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "LEADER_ID": 80,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "ทันตแพทย์",
    "LEADER_TOP_NAME": "",
    "updated_at": "2024-02-19 08:25:08",
    "created_at": "2024-02-19 08:25:08"
  },
  {
    "LEADER_ID": 59,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "นักวิเคราะห์นโยบายและแผน",
    "LEADER_TOP_NAME": "",
    "updated_at": "2025-12-22 03:00:07",
    "created_at": "2025-12-22 03:00:07"
  },
  {
    "LEADER_ID": 131,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "พยาบาลวิชาชีพ",
    "LEADER_TOP_NAME": "",
    "updated_at": "2021-12-02 03:12:31",
    "created_at": "2021-12-02 03:12:31"
  },
  {
    "LEADER_ID": 53,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "[MASKED_FULLNAME]",
    "LEADER_TOP_NAME": "",
    "updated_at": "2021-12-03 07:38:14",
    "created_at": "2021-12-03 07:38:14"
  },
  {
    "LEADER_ID": 134,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "พยาบาลวิชาชีพ",
    "LEADER_TOP_NAME": "",
    "updated_at": "2024-01-04 08:35:37",
    "created_at": "2024-01-04 08:35:37"
  },
  {
    "LEADER_ID": 155,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "พยาบาลวิชาชีพ",
    "LEADER_TOP_NAME": "",
    "updated_at": "2021-12-08 07:44:32",
    "created_at": "2021-12-08 07:44:32"
  },
  {
    "LEADER_ID": 95,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "นักวิทยาคลินิก",
    "LEADER_TOP_NAME": "",
    "updated_at": "2021-12-08 07:44:43",
    "created_at": "2021-12-08 07:44:43"
  },
  {
    "LEADER_ID": 103,
    "LEADER_NAME": "[MASKED_FULLNAME]",
    "LEADER_POSITION": "นักสังคมสงเคราะห์",
    "LEADER_TOP_NAME": "",
    "updated_at": "2021-12-08 07:44:53",
    "created_at": "2021-12-08 07:44:53"
  }
]
```
