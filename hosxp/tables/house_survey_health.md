# `house_survey_health`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_health_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_survey_health_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "house_survey_health_id": 1,
    "name": "สุขภาพดี",
    "hos_guid": null
  },
  {
    "house_survey_health_id": 2,
    "name": "มีภาวะเสี่ยง",
    "hos_guid": null
  },
  {
    "house_survey_health_id": 3,
    "name": "มีปัญหา",
    "hos_guid": null
  }
]
```
