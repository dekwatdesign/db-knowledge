# `dxa_person_habit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dxa_person_habit_id | int(11) | YES |  | NULL |  |  |
| dxa_person_habit_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dxa_person_habit_id": 28,
    "dxa_person_habit_name": "มีประวัติถ่ายเป็นมูกเลือด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 27,
    "dxa_person_habit_name": "คนยากจน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 26,
    "dxa_person_habit_name": "ผู้สูงอายุ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 25,
    "dxa_person_habit_name": "งดกินเนื้อสัตว์มานาน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 24,
    "dxa_person_habit_name": "มีอาชีพเกี่ยวข้องกับสารตะกั่ว",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 23,
    "dxa_person_habit_name": "ทำงานในโรงงานแบตเตอรี่",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 22,
    "dxa_person_habit_name": "ซีดเหลืองมาตั้งแต่เล็ก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "dxa_person_habit_id": 21,
    "dxa_person_habit_name": "มีประวัติเป็นโรคเบาหวานมานาน",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
