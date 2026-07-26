# `house_survey_yesno`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_yesno_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_survey_yesno_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "house_survey_yesno_id": 1,
    "name": "ใช่",
    "hos_guid": null
  },
  {
    "house_survey_yesno_id": 2,
    "name": "ไม่ใช่",
    "hos_guid": null
  }
]
```
