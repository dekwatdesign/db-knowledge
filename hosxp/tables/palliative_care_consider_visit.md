# `palliative_care_consider_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_consider_visit_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_consider_visit_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_consider_visit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "palliative_care_consider_visit_id": 1,
    "palliative_care_consider_visit_name": "เยี่ยมโดย รพศ. รพท.",
    "hos_guid": null
  },
  {
    "palliative_care_consider_visit_id": 2,
    "palliative_care_consider_visit_name": "เยี่ยมโดย รพช.",
    "hos_guid": null
  },
  {
    "palliative_care_consider_visit_id": 3,
    "palliative_care_consider_visit_name": "เยี่ยมร่วมกัน",
    "hos_guid": null
  },
  {
    "palliative_care_consider_visit_id": 4,
    "palliative_care_consider_visit_name": "ไม่เยี่ยม",
    "hos_guid": null
  }
]
```
