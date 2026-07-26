# `palliative_care_equipment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| palliative_care_equipment_type_id | int(11) | NO | PRI | 0 |  |  |
| palliative_care_equipment_type_name | varchar(255) | YES |  | NULL |  |  |
| palliative_care_equipment_type_class | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | palliative_care_equipment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "palliative_care_equipment_type_id": 1,
    "palliative_care_equipment_type_name": "เครื่องผลิตออกซิเจน / ถังออกซอเจน",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 2,
    "palliative_care_equipment_type_name": "ที่นอนลม",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 3,
    "palliative_care_equipment_type_name": "เครื่องดูดเสมหะ",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 4,
    "palliative_care_equipment_type_name": "อุปกรณ์ทำแผล (ชุด Dressing)",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 5,
    "palliative_care_equipment_type_name": "เครื่องพ่นยา",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 6,
    "palliative_care_equipment_type_name": "Tracheostomy tube",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 7,
    "palliative_care_equipment_type_name": "Cystostomy",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  },
  {
    "palliative_care_equipment_type_id": 8,
    "palliative_care_equipment_type_name": "Colostomy",
    "palliative_care_equipment_type_class": null,
    "hos_guid": null
  }
]
```
