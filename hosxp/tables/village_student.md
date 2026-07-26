# `village_student`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_student_id | int(11) | NO | PRI | 0 |  |  |
| village_school_id | int(11) | YES | MUL | NULL |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| village_school_class_id | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| village_school_room_id | int(11) | YES |  | NULL |  |  |
| school_room_no | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| out_region | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| nutrition_level | int(11) | YES |  | NULL |  |  |
| bmi_level | int(11) | YES |  | NULL |  |  |
| education_year | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_last_update | last_update | no | 1 |
| ix_person_id_unique_unique | person_id | yes | 1 |
| ix_village_school_id | village_school_id | no | 1 |
| PRIMARY | village_student_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_student_id": 3,
    "village_school_id": 22370,
    "person_id": 51789,
    "village_school_class_id": 3,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-07-17 15:05:57",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 4,
    "village_school_id": 22370,
    "person_id": 49569,
    "village_school_class_id": 1,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-09-10 14:41:07",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 5,
    "village_school_id": 22335,
    "person_id": 51817,
    "village_school_class_id": 4,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-09-10 14:57:54",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 10,
    "village_school_id": 22336,
    "person_id": 55897,
    "village_school_class_id": 9,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-09-15 11:23:08",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 11,
    "village_school_id": 22338,
    "person_id": 56134,
    "village_school_class_id": 11,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-09-15 11:25:15",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 12,
    "village_school_id": 22606,
    "person_id": 56546,
    "village_school_class_id": 9,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-09-15 11:26:46",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 13,
    "village_school_id": 22541,
    "person_id": 47599,
    "village_school_class_id": 6,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-10-01 15:00:53",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  },
  {
    "village_student_id": 15,
    "village_school_id": 22341,
    "person_id": 55446,
    "village_school_class_id": 4,
    "discharge": "N",
    "discharge_date": null,
    "village_school_room_id": null,
    "school_room_no": 0,
    "hos_guid": null,
    "out_region": "Y",
    "last_update": "2020-10-01 15:03:06",
    "nutrition_level": null,
    "bmi_level": null,
    "education_year": null
  }
]
```
