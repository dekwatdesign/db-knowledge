# `palliative_care_respiration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_respiration_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_respiration_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_respiration_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "palliative_care_respiration_id": 1,
    "palliative_care_respiration_name": "ปกติ",
    "hos_guid": null
  },
  {
    "palliative_care_respiration_id": 2,
    "palliative_care_respiration_name": "ลำบาก",
    "hos_guid": null
  },
  {
    "palliative_care_respiration_id": 3,
    "palliative_care_respiration_name": "เหนื่อยหอบ",
    "hos_guid": null
  },
  {
    "palliative_care_respiration_id": 4,
    "palliative_care_respiration_name": "ไม่สะดวก",
    "hos_guid": null
  }
]
```
