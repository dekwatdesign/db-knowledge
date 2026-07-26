# `beauty_treatment_area`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_treatment_area_id | int(11) | NO | PRI | 0 |  |  |
| beauty_treatment_area_name | varchar(100) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_treatment_area_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "beauty_treatment_area_id": 1,
    "beauty_treatment_area_name": "จมูก",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 2,
    "beauty_treatment_area_name": "ใต้ตา",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 3,
    "beauty_treatment_area_name": "คอ",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 4,
    "beauty_treatment_area_name": "แก้ม",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 5,
    "beauty_treatment_area_name": "ปาก",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 6,
    "beauty_treatment_area_name": "ใบหน้า",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 7,
    "beauty_treatment_area_name": "รักแร้",
    "active_status": "Y"
  },
  {
    "beauty_treatment_area_id": 8,
    "beauty_treatment_area_name": "ทั่วร่างกาย",
    "active_status": "Y"
  }
]
```
