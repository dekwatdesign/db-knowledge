# `depression_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| depression_screen_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| screen_datetime | datetime | YES |  | NULL |  |  |
| feel_depression_2_week | char(1) | YES |  | NULL |  |  |
| feel_boring_2_week | char(1) | YES |  | NULL |  |  |
| depression_score | int(11) | YES |  | NULL |  |  |
| depression_screen_evaluate_id | int(11) | YES |  | NULL |  |  |
| suicide_score | int(11) | YES |  | NULL |  |  |
| suicide_screen_evaluate_id | int(11) | YES |  | NULL |  |  |
| patient_depression_id | int(11) | YES | MUL | NULL |  |  |
| score_9q_1 | int(11) | YES |  | NULL |  |  |
| score_9q_2 | int(11) | YES |  | NULL |  |  |
| score_9q_3 | int(11) | YES |  | NULL |  |  |
| score_9q_4 | int(11) | YES |  | NULL |  |  |
| score_9q_5 | int(11) | YES |  | NULL |  |  |
| score_9q_6 | int(11) | YES |  | NULL |  |  |
| score_9q_7 | int(11) | YES |  | NULL |  |  |
| score_9q_8 | int(11) | YES |  | NULL |  |  |
| score_9q_9 | int(11) | YES |  | NULL |  |  |
| score_8q_1 | int(11) | YES |  | NULL |  |  |
| score_8q_2 | int(11) | YES |  | NULL |  |  |
| score_8q_3 | int(11) | YES |  | NULL |  |  |
| score_8q_4 | int(11) | YES |  | NULL |  |  |
| score_8q_5 | int(11) | YES |  | NULL |  |  |
| score_8q_6 | int(11) | YES |  | NULL |  |  |
| score_8q_7 | int(11) | YES |  | NULL |  |  |
| score_8q_8 | int(11) | YES |  | NULL |  |  |
| score_8q_9 | int(11) | YES |  | NULL |  |  |
| no_depression | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| dep | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_patient_depression_id | patient_depression_id | no | 1 |
| PRIMARY | depression_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "depression_screen_id": 6,
    "vn": "680203081211",
    "staff": "[MASKED_FULLNAME]",
    "screen_datetime": "2025-02-03 12:59:46",
    "feel_depression_2_week": "N",
    "feel_boring_2_week": "N",
    "depression_score": 0,
    "depression_screen_evaluate_id": 9,
    "suicide_score": 0,
    "suicide_screen_evaluate_id": 0,
    "patient_depression_id": 0,
    "score_9q_1": 0,
    "score_9q_2": 0,
    "score_9q_3": 0,
    "score_9q_4": 0,
    "score_9q_5": 0,
    "score_9q_6": 0,
    "score_9q_7": 0,
    "score_9q_8": 0,
    "score_9q_9": 0,
    "score_8q_1": 0,
    "score_8q_2": 0,
    "score_8q_3": 0,
    "score_8q_4": 0,
    "score_8q_5": 0,
    "score_8q_6": 0,
    "score_8q_7": 0,
    "score_8q_8": 0,
    "score_8q_9": 0,
    "no_depression": null,
    "hos_guid": null,
    "dep": "3"
  },
  {
    "depression_screen_id": 7,
    "vn": "680203081446",
    "staff": "[MASKED_FULLNAME]",
    "screen_datetime": "2025-02-03 13:02:25",
    "feel_depression_2_week": "N",
    "feel_boring_2_week": "N",
    "depression_score": 0,
    "depression_screen_evaluate_id": 9,
    "suicide_score": 0,
    "suicide_screen_evaluate_id": 0,
    "patient_depression_id": 0,
    "score_9q_1": 0,
    "score_9q_2": 0,
    "score_9q_3": 0,
    "score_9q_4": 0,
    "score_9q_5": 0,
    "score_9q_6": 0,
    "score_9q_7": 0,
    "score_9q_8": 0,
    "score_9q_9": 0,
    "score_8q_1": 0,
    "score_8q_2": 0,
    "score_8q_3": 0,
    "score_8q_4": 0,
    "score_8q_5": 0,
    "score_8q_6": 0,
    "score_8q_7": 0,
    "score_8q_8": 0,
    "score_8q_9": 0,
    "no_depression": null,
    "hos_guid": null,
    "dep": "3"
  }
]
```
