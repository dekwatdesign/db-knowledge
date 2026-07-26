# `opi_time_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| time_code | varchar(10) | NO | PRI |  |  |  |
| time_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| eng_time_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| doctor_use | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| is_ac | char(1) | YES |  | NULL |  |  |
| is_pc | char(1) | YES |  | NULL |  |  |
| time_breakfast | char(1) | YES |  | NULL |  |  |
| time_lunch | char(1) | YES |  | NULL |  |  |
| time_dinner | char(1) | YES |  | NULL |  |  |
| time_bedtime | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_time_name | time_name | yes | 1 |
| PRIMARY | time_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "time_code": "19",
    "time_name": "เวลา 19.00 น.",
    "hos_guid": "{87F6046F-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "1PM",
    "time_name": "2 AMP IV ก่อนให้ยาเคมีบำบัด",
    "hos_guid": "{87F609E9-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "20",
    "time_name": "เวลา 20.00น.",
    "hos_guid": "{87F60D99-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "21",
    "time_name": "เวลา 21.00น.",
    "hos_guid": "{87F6110C-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "22",
    "time_name": "เวลา 22.00น.",
    "hos_guid": "{87F6147F-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "2D",
    "time_name": "2 วัน",
    "hos_guid": "{87F617F7-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "3D",
    "time_name": "3 วัน",
    "hos_guid": "{87F61B74-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  },
  {
    "time_code": "5D",
    "time_name": "5 วัน",
    "hos_guid": "{87F61EE7-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_time_name": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "is_ac": null,
    "is_pc": null,
    "time_breakfast": null,
    "time_lunch": null,
    "time_dinner": null,
    "time_bedtime": null
  }
]
```
