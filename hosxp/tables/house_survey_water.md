# `house_survey_water`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_survey_water_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | house_survey_water_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "house_survey_water_id": 1,
    "name": "น้ำประปา",
    "hos_guid": null
  },
  {
    "house_survey_water_id": 2,
    "name": "บ่อน้ำถูกหลักสุขาภิบาล",
    "hos_guid": null
  },
  {
    "house_survey_water_id": 3,
    "name": "ภาชนะเก็บน้ำฝน",
    "hos_guid": null
  },
  {
    "house_survey_water_id": 4,
    "name": "น้ำที่ผ่านการปรับปรุงคุณภาพ",
    "hos_guid": null
  }
]
```
