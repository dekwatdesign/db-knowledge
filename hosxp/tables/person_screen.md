# `person_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_screen_id | int(11) | NO | PRI | 0 |  |  |
| person_screen_name | varchar(250) | YES | UNI | NULL |  |  |
| person_screen_unit | varchar(100) | YES |  | NULL |  |  |
| person_screen_result_type | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_screen_name | person_screen_name | yes | 1 |
| PRIMARY | person_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "person_screen_id": 1,
    "person_screen_name": "ความดันโลหิต (Systolic)",
    "person_screen_unit": null,
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 2,
    "person_screen_name": "ความดันโลหิต (Diastolic)",
    "person_screen_unit": null,
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 3,
    "person_screen_name": "น้ำหนัก",
    "person_screen_unit": "Kg.",
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 4,
    "person_screen_name": "ส่วนสูง",
    "person_screen_unit": "Cm.",
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 5,
    "person_screen_name": "อุณหภูมิ",
    "person_screen_unit": "C.",
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 6,
    "person_screen_name": "ความยาวรอบเอว",
    "person_screen_unit": "Cm.",
    "person_screen_result_type": 1,
    "hos_guid": null
  },
  {
    "person_screen_id": 7,
    "person_screen_name": "ระดับน้ำตาลในเลือด",
    "person_screen_unit": "mg./dl.",
    "person_screen_result_type": null,
    "hos_guid": null
  },
  {
    "person_screen_id": 8,
    "person_screen_name": "ตรวจเต้านม",
    "person_screen_unit": null,
    "person_screen_result_type": null,
    "hos_guid": null
  }
]
```
