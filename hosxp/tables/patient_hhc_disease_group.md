# `patient_hhc_disease_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_disease_group_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_disease_group_name | varchar(250) | YES |  | NULL |  |  |
| patient_hhc_app_mission_id | int(11) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_disease_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_hhc_disease_group_id": 1,
    "patient_hhc_disease_group_name": "โรคความดันโลหิตสูง",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 2,
    "patient_hhc_disease_group_name": "ผู้ป่วยติดเตียง / อัมพาต",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 3,
    "patient_hhc_disease_group_name": "โรคเบาหวาน",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 4,
    "patient_hhc_disease_group_name": "โรคหลอดเลือดสมอง (Stroke)",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 5,
    "patient_hhc_disease_group_name": "โรคไตเรื้อรัง",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 6,
    "patient_hhc_disease_group_name": "โรคปอดเรื้อรัง (COPD / หอบหืด)",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 7,
    "patient_hhc_disease_group_name": "โรคซึมเศร้าในผู้สูงอายุ",
    "patient_hhc_app_mission_id": null,
    "active": null
  },
  {
    "patient_hhc_disease_group_id": 8,
    "patient_hhc_disease_group_name": "เยี่ยมหลังคลอด",
    "patient_hhc_app_mission_id": null,
    "active": null
  }
]
```
