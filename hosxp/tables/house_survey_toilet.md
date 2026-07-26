# `house_survey_toilet`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_toilet_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_survey_toilet_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "house_survey_toilet_id": 1,
    "name": "มีส้วมราดน้ำ",
    "hos_guid": null
  },
  {
    "house_survey_toilet_id": 2,
    "name": "มีส้วมหลุมถูกหลักสุขาภิบาล",
    "hos_guid": null
  },
  {
    "house_survey_toilet_id": 3,
    "name": "ไม่มีส้วมถูกหลักสุขาภิบาล",
    "hos_guid": null
  }
]
```
