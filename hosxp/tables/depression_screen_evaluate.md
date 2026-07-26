# `depression_screen_evaluate`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depression_screen_evaluate_id | int(11) | NO | PRI | 0 |  |  |
| depression_screen_evaluate_name | varchar(250) | YES | UNI | NULL |  |  |
| min_score | int(11) | YES |  | NULL |  |  |
| max_score | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depression_screen_evaluate_name | depression_screen_evaluate_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | depression_screen_evaluate_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "depression_screen_evaluate_id": 1,
    "depression_screen_evaluate_name": "เป็นโรคซึมเศร้าระดับน้อย (Major Depression, mild)",
    "min_score": 7,
    "max_score": 12,
    "hos_guid": null
  },
  {
    "depression_screen_evaluate_id": 2,
    "depression_screen_evaluate_name": "เป็นโรคซึมเศร้าระดับปานกลาง (Major Depression, moderate)",
    "min_score": 13,
    "max_score": 18,
    "hos_guid": null
  },
  {
    "depression_screen_evaluate_id": 3,
    "depression_screen_evaluate_name": "เป็นโรคซึมเศร้าระดับรุนแรง (Major Depression, severe)",
    "min_score": 19,
    "max_score": 999999,
    "hos_guid": null
  },
  {
    "depression_screen_evaluate_id": 9,
    "depression_screen_evaluate_name": "ไม่เป็นโรคซึมเศร้า",
    "min_score": 0,
    "max_score": 6,
    "hos_guid": null
  }
]
```
