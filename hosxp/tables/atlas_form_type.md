# `atlas_form_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| atlas_form_type_id | smallint(6) | NO | PRI | 0 |  |  |
| atlas_form_type_name | varchar(250) | YES |  | NULL |  |  |
| clinic | varchar(3) | YES |  | NULL |  |  |
| atlas_form_type_detail | varchar(250) | YES |  | NULL |  |  |
| atlas_form_type_frequency | smallint(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | atlas_form_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "atlas_form_type_id": 2,
    "atlas_form_type_name": "Palliative Care",
    "clinic": "099",
    "atlas_form_type_detail": "การดูแลแบบประคับประคอง เป็นการดูแลผู้ป่วยที่มีโรคเรื้อรัง โดยเน้นการบรรเทาอาการเจ็บปวด",
    "atlas_form_type_frequency": 5
  },
  {
    "atlas_form_type_id": 1,
    "atlas_form_type_name": "IN HOME SSS",
    "clinic": null,
    "atlas_form_type_detail": null,
    "atlas_form_type_frequency": 4
  },
  {
    "atlas_form_type_id": 3,
    "atlas_form_type_name": "แบบประเมินกิจวัตรประจําวัน ADL",
    "clinic": null,
    "atlas_form_type_detail": "กิจกรรมต่างๆ ที่เราทำในชีวิตประจำวัน เช่น การกิน การอาบน้ำ การแต่งตัว การใช้ห้องน้ำ การเคลื่อนไหวร่างกาย และการควบคุมการขับถ่าย",
    "atlas_form_type_frequency": 4
  }
]
```
