# `physic_main`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| type1 | char(1) | YES |  | NULL |  |  |
| type2 | char(1) | YES |  | NULL |  |  |
| type3 | char(1) | YES |  | NULL |  |  |
| service_text | varchar(250) | YES |  | NULL |  |  |
| physic_chronic_id | int(11) | YES | MUL | NULL |  |  |
| problem_text | longtext | YES |  | NULL |  |  |
| plan_text | longtext | YES |  | NULL |  |  |
| progress_text | longtext | YES |  | NULL |  |  |
| doctor_text | varchar(250) | YES |  | NULL |  |  |
| type_text | varchar(250) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| service_time | time | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_vstdate | vstdate | no | 1 |
| ix_physic_chronic_id | physic_chronic_id | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vn": "640308093026",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "Speech defect training (9409620)",
    "physic_chronic_id": null,
    "problem_text": null,
    "plan_text": null,
    "progress_text": null,
    "doctor_text": null,
    "type_text": null,
    "vstdate": "2021-03-08",
    "service_time": "16:07:07",
    "hn": "530033952",
    "hos_guid": null
  },
  {
    "vn": "640308140014",
    "type1": null,
    "type2": null,
    "type3": null,
    "service_text": "Speech defect training (9409620)",
    "physic_chronic_id": null,
    "problem_text": "speech:\r\nMotor:\r\nImpression:",
    "plan_text": null,
    "progress_text": null,
    "doctor_text": null,
    "type_text": null,
    "vstdate": "2021-03-08",
    "service_time": "15:49:26",
    "hn": "620000314",
    "hos_guid": null
  }
]
```
