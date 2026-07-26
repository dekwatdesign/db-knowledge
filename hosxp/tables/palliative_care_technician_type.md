# `palliative_care_technician_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_technician_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_technician_type_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_technician_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_technician_type_id": 1,
    "palliative_care_technician_type_name": "แพทย์",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 2,
    "palliative_care_technician_type_name": "เภสัชกร",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 3,
    "palliative_care_technician_type_name": "พยาบาล",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 4,
    "palliative_care_technician_type_name": "ตำรวจ",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 5,
    "palliative_care_technician_type_name": "เจ้าหน้าที่เทศบาล/อบต.",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 6,
    "palliative_care_technician_type_name": "เจ้าหน้าที่อำเภอ",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 7,
    "palliative_care_technician_type_name": "พระ",
    "hos_guid": null
  },
  {
    "palliative_care_technician_type_id": 8,
    "palliative_care_technician_type_name": "แพทย์แผนไทย",
    "hos_guid": null
  }
]
```
