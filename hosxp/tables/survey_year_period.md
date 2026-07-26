# `survey_year_period`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| survey_year_period_id | int(11) | NO | PRI | 0 |  |  |
| survey_year_period_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_survey_year_period_name | survey_year_period_name | yes | 1 |
| PRIMARY | survey_year_period_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "survey_year_period_id": 1,
    "survey_year_period_name": "ไตรมาสที่ 1 (ตค. - ธค.)",
    "hos_guid": null
  },
  {
    "survey_year_period_id": 2,
    "survey_year_period_name": "ไตรมาสที่ 2 (มค. - มีค.)",
    "hos_guid": null
  },
  {
    "survey_year_period_id": 3,
    "survey_year_period_name": "ไตรมาสที่ 3 (เมย. - มิย.)",
    "hos_guid": null
  },
  {
    "survey_year_period_id": 4,
    "survey_year_period_name": "ไตรมาสที่ 4 (กค. - กย.)",
    "hos_guid": null
  }
]
```
