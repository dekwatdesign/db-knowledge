# `village_survey_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_survey_item_id | int(11) | NO | PRI | 0 |  |  |
| village_survey_item_name | varchar(200) | YES | UNI | NULL |  |  |
| count_sql | varchar(250) | YES |  | NULL |  |  |
| item_group | int(11) | YES | MUL | NULL |  |  |
| unit_name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_item_group | item_group | no | 1 |
| ix_unique | village_survey_item_name | yes | 1 |
| PRIMARY | village_survey_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_survey_item_id": 1,
    "village_survey_item_name": "จำนวนโรงเรียนอนุบาลทุกสังกัด",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 2,
    "village_survey_item_name": "จำนวนโรงเรียนประถมศึกษา",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 3,
    "village_survey_item_name": "จำนวนโรงอาหารในโรงเรียนประถมศึกษา",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 4,
    "village_survey_item_name": "จำนวนโรงเรียนมัธยมศึกษาทุกสังกัด",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 5,
    "village_survey_item_name": "จำนวนโรงอาหารในโรงเรียนมัธยมทุกสังกัด",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 6,
    "village_survey_item_name": "จำนวนศูนย์เลี้ยงเด็กก่อนวัยเรียนทุกสังกัด",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 7,
    "village_survey_item_name": "จำนวนวัด",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  },
  {
    "village_survey_item_id": 8,
    "village_survey_item_name": "จำนวนพระ",
    "count_sql": null,
    "item_group": 1,
    "unit_name": null,
    "hos_guid": null
  }
]
```
