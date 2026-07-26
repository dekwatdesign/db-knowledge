# `beauty_staff_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| beauty_staff_position_id | int(11) | NO | PRI | 0 |  |  |
| beauty_staff_pos_name | varchar(200) | YES |  | NULL |  |  |
| beauty_staff_pos_date | date | YES |  | NULL |  |  |
| beauty_staff_pos_last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | beauty_staff_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "beauty_staff_position_id": 1,
    "beauty_staff_pos_name": "แพทย์ผู้ทำหลัก ในเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  },
  {
    "beauty_staff_position_id": 2,
    "beauty_staff_pos_name": "ผู้ช่วย นอกเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  },
  {
    "beauty_staff_position_id": 3,
    "beauty_staff_pos_name": "ผู้ช่วย ในเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  },
  {
    "beauty_staff_position_id": 4,
    "beauty_staff_pos_name": "พยาบาลผู้ทำหลัก นอกเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  },
  {
    "beauty_staff_position_id": 5,
    "beauty_staff_pos_name": "พยาบาลผู้ช่วย นอกเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  },
  {
    "beauty_staff_position_id": 6,
    "beauty_staff_pos_name": "แพทย์ผู้ทำหลัก นอกเวลา",
    "beauty_staff_pos_date": null,
    "beauty_staff_pos_last_update": null
  }
]
```
