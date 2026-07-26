# `hsk_assessment_ass01`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| ward | varchar(100) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| ck_1_1 | int(1) | YES |  | NULL |  |  |
| ck_2_1 | int(1) | YES |  | NULL |  |  |
| ck_2_2 | int(1) | YES |  | NULL |  |  |
| ck_2_3 | int(1) | YES |  | NULL |  |  |
| ck_2_4 | int(1) | YES |  | NULL |  |  |
| ck_2_5 | int(1) | YES |  | NULL |  |  |
| ck_2_6 | int(1) | YES |  | NULL |  |  |
| ck_2_6_other | varchar(100) | YES |  | NULL |  |  |
| ck_3_1 | int(1) | YES |  | NULL |  |  |
| ck_4_1 | int(1) | YES |  | NULL |  |  |
| ck_4_2 | int(1) | YES |  | NULL |  |  |
| ck_4_3 | int(1) | YES |  | NULL |  |  |
| ck_4_4 | int(1) | YES |  | NULL |  |  |
| ck_4_4_other | varchar(100) | YES |  | NULL |  |  |
| ck_5_1 | int(1) | YES |  | NULL |  |  |
| ck_5_2 | int(1) | YES |  | NULL |  |  |
| ck_5_3 | int(1) | YES |  | NULL |  |  |
| ck_5_4 | int(1) | YES |  | NULL |  |  |
| ck_5_4_other | varchar(100) | YES |  | NULL |  |  |
| ck_6 | char(1) | YES |  | NULL |  |  |
| ck_6_other | varchar(100) | YES |  | NULL |  |  |
| ck_7 | char(1) | YES |  | NULL |  |  |
| ck_8_1_5 | int(1) | YES |  | NULL |  |  |
| ck_8_1_10 | int(1) | YES |  | NULL |  |  |
| ck_8_1_at | datetime | YES |  | NULL |  |  |
| ck_8_1_at2 | datetime | YES |  | NULL |  |  |
| ck_8_2_25 | int(1) | YES |  | NULL |  |  |
| ck_8_2_50 | int(1) | YES |  | NULL |  |  |
| ck_8_2_at | datetime | YES |  | NULL |  |  |
| ck_8_2_at2 | datetime | YES |  | NULL |  |  |
| ck_8_3_5 | int(1) | YES |  | NULL |  |  |
| ck_8_3_10 | int(1) | YES |  | NULL |  |  |
| ck_8_3_at | datetime | YES |  | NULL |  |  |
| ck_8_3_at2 | datetime | YES |  | NULL |  |  |
| ck_8_4 | int(1) | YES |  | NULL |  |  |
| ck_8_4_other | varchar(200) | YES |  | NULL |  |  |
| ck_10_1 | int(1) | YES |  | NULL |  |  |
| ck_10_2 | int(1) | YES |  | NULL |  |  |
| ck_10_3 | int(1) | YES |  | NULL |  |  |
| ck_10_3_2 | int(1) | YES |  | NULL |  |  |
| ck_10_3_nurse | varchar(200) | YES |  | NULL |  |  |
| ck_10_3_assistant | varchar(200) | YES |  | NULL |  |  |
| ck_10_4 | int(1) | YES |  | NULL |  |  |
| ck_10_4_person_delivery | varchar(200) | YES |  | NULL |  |  |
| staff_er | varchar(200) | YES |  | NULL |  |  |
| staff_er_calltime_start | time | YES |  | NULL |  |  |
| staff_er_calltime_end | time | YES |  | NULL |  |  |
| staff_ward | varchar(200) | YES |  | NULL |  |  |
| staff_ward_time | time | YES |  | NULL |  |  |
| staff_register | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1917,
    "hn": "680001290",
    "an": "680001985",
    "ward": "หอผู้ป่วยใน 5 (IPD5)",
    "vstdate": "2026-01-05",
    "vsttime": "21:31:37",
    "ck_1_1": 1,
    "ck_2_1": 1,
    "ck_2_2": 0,
    "ck_2_3": 1,
    "ck_2_4": 0,
    "ck_2_5": 1,
    "ck_2_6": 0,
    "ck_2_6_other": "",
    "ck_3_1": 1,
    "ck_4_1": 0,
    "ck_4_2": 0,
    "ck_4_3": 0,
    "ck_4_4": 0,
    "ck_4_4_other": "",
    "ck_5_1": 0,
    "ck_5_2": 0,
    "ck_5_3": 0,
    "ck_5_4": 0,
    "ck_5_4_other": "",
    "ck_6": "N",
    "ck_6_other": "",
    "ck_7": "N",
    "ck_8_1_5": 0,
    "ck_8_1_10": 0,
    "ck_8_1_at": null,
    "ck_8_1_at2": null,
    "ck_8_2_25": 0,
    "ck_8_2_50": 0,
    "ck_8_2_at": null,
    "ck_8_2_at2": null,
    "ck_8_3_5": 0,
    "ck_8_3_10": 0,
    "ck_8_3_at": null,
    "ck_8_3_at2": null,
    "ck_8_4": 0,
    "ck_8_4_other": "",
    "ck_10_1": 0,
    "ck_10_2": 0,
    "ck_10_3": 0,
    "ck_10_3_2": 0,
    "ck_10_3_nurse": "",
    "ck_10_3_assistant": "",
    "ck_10_4": 1,
    "ck_10_4_person_delivery": "",
    "staff_er": "[MASKED_FULLNAME]",
    "staff_er_calltime_start": "8:00:00",
    "staff_er_calltime_end": "8:30:00",
    "staff_ward": "มณีนุช อินทร์หม่อม",
    "staff_ward_time": "8:30:00",
    "staff_register": "yuwa228"
  }
]
```
