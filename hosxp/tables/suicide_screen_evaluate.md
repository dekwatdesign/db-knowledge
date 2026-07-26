# `suicide_screen_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| suicide_screen_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| suicide_screen_evaluate_name | varchar(250) | YES | UNI | NULL |  |  |
| min_score | int(11) | YES |  | NULL |  |  |
| max_score | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_suicide_screen_evaluate_name | suicide_screen_evaluate_name | yes | 1 |
| PRIMARY | suicide_screen_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "suicide_screen_evaluate_id": 1,
    "suicide_screen_evaluate_name": "น้อย",
    "min_score": 1,
    "max_score": 8,
    "hos_guid": null
  },
  {
    "suicide_screen_evaluate_id": 2,
    "suicide_screen_evaluate_name": "ปานกลาง",
    "min_score": 9,
    "max_score": 16,
    "hos_guid": null
  },
  {
    "suicide_screen_evaluate_id": 3,
    "suicide_screen_evaluate_name": "สูง",
    "min_score": 17,
    "max_score": 99999,
    "hos_guid": null
  },
  {
    "suicide_screen_evaluate_id": 9,
    "suicide_screen_evaluate_name": "ไม่มี",
    "min_score": 0,
    "max_score": 0,
    "hos_guid": null
  }
]
```
