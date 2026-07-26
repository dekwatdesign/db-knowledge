# `palliative_care_esas_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_esas_choice_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_esas_choice_score | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_esas_choice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_esas_choice_id": 1,
    "palliative_care_esas_choice_score": "1",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 2,
    "palliative_care_esas_choice_score": "2",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 3,
    "palliative_care_esas_choice_score": "3",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 4,
    "palliative_care_esas_choice_score": "4",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 5,
    "palliative_care_esas_choice_score": "5",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 6,
    "palliative_care_esas_choice_score": "6",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 7,
    "palliative_care_esas_choice_score": "7",
    "hos_guid": null
  },
  {
    "palliative_care_esas_choice_id": 8,
    "palliative_care_esas_choice_score": "8",
    "hos_guid": null
  }
]
```
