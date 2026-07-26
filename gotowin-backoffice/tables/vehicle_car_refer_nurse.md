# `vehicle_car_refer_nurse`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int | NO | PRI | NULL | auto_increment |  |
| REFER_ID | varchar(20) | YES |  |  |  |  |
| NURSE_HR_ID | varchar(20) | YES |  |  |  |  |
| NURSE_HR_NAME | varchar(100) | YES |  |  |  |  |
| NURSE_HR_POSITION | varchar(100) | YES |  |  |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "REFER_ID": "3",
    "NURSE_HR_ID": "183",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-09-19 10:41:37",
    "created_at": "2022-09-19 10:41:37"
  },
  {
    "ID": 2,
    "REFER_ID": "4",
    "NURSE_HR_ID": "185",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-11-07 15:26:35",
    "created_at": "2022-11-07 15:26:35"
  },
  {
    "ID": 3,
    "REFER_ID": "5",
    "NURSE_HR_ID": "185",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-11-07 15:26:38",
    "created_at": "2022-11-07 15:26:38"
  },
  {
    "ID": 4,
    "REFER_ID": "6",
    "NURSE_HR_ID": "185",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-11-07 15:26:41",
    "created_at": "2022-11-07 15:26:41"
  },
  {
    "ID": 5,
    "REFER_ID": "7",
    "NURSE_HR_ID": "189",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-11-11 11:20:58",
    "created_at": "2022-11-11 11:20:58"
  },
  {
    "ID": 6,
    "REFER_ID": "7",
    "NURSE_HR_ID": "196",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พนักงานช่วยเหลือคนไข้",
    "updated_at": "2022-11-11 11:20:58",
    "created_at": "2022-11-11 11:20:58"
  },
  {
    "ID": 7,
    "REFER_ID": "8",
    "NURSE_HR_ID": "191",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พยาบาลวิชาชีพ",
    "updated_at": "2022-11-22 16:17:33",
    "created_at": "2022-11-22 16:17:33"
  },
  {
    "ID": 8,
    "REFER_ID": "8",
    "NURSE_HR_ID": "199",
    "NURSE_HR_NAME": "[MASKED_FULLNAME]",
    "NURSE_HR_POSITION": "พนักงานช่วยเหลือคนไข้",
    "updated_at": "2022-11-22 16:17:33",
    "created_at": "2022-11-22 16:17:33"
  }
]
```
