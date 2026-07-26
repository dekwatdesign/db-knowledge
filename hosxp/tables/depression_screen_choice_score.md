# `depression_screen_choice_score`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depression_screen_choice_score_id | int(11) | NO | PRI | 0 |  |  |
| depression_screen_choice_score_name | varchar(250) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depression_screen_choice_score_name | depression_screen_choice_score_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | depression_screen_choice_score_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "depression_screen_choice_score_id": 1,
    "depression_screen_choice_score_name": "ไม่มีเลย",
    "score": 0,
    "hos_guid": null
  },
  {
    "depression_screen_choice_score_id": 2,
    "depression_screen_choice_score_name": "เป็นบางวัน (1-7 วัน)",
    "score": 1,
    "hos_guid": null
  },
  {
    "depression_screen_choice_score_id": 3,
    "depression_screen_choice_score_name": "เป็นบ่อย (>7 วัน)",
    "score": 2,
    "hos_guid": null
  },
  {
    "depression_screen_choice_score_id": 4,
    "depression_screen_choice_score_name": "เป็นทุกวัน",
    "score": 3,
    "hos_guid": null
  }
]
```
