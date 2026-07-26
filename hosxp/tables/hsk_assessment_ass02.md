# `hsk_assessment_ass02`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(10) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| ck_1 | int(1) | YES |  | NULL |  |  |
| ck_2 | int(1) | YES |  | NULL |  |  |
| ck_3 | int(1) | YES |  | NULL |  |  |
| ck_4 | int(1) | YES |  | NULL |  |  |
| ck_5 | int(1) | YES |  | NULL |  |  |
| ck_6 | int(1) | YES |  | NULL |  |  |
| ck_7 | int(1) | YES |  | NULL |  |  |
| ck_8 | int(1) | YES |  | NULL |  |  |
| ck_9 | int(1) | YES |  | NULL |  |  |
| ck_9_1 | int(1) | YES |  | NULL |  |  |
| ck_9_2 | int(1) | YES |  | NULL |  |  |
| ck_9_3 | int(1) | YES |  | NULL |  |  |
| ck_9_4 | int(1) | YES |  | NULL |  |  |
| ck_10 | int(1) | YES |  | NULL |  |  |
| ck_11 | int(1) | YES |  | NULL |  |  |
| ck_12 | int(1) | YES |  | NULL |  |  |
| ck_p1 | int(1) | YES |  | NULL |  |  |
| ck_p2 | int(1) | YES |  | NULL |  |  |
| ck_p2_other | varchar(100) | YES |  | NULL |  |  |
| staff_doctor | varchar(50) | YES |  | NULL |  |  |
| staff_register | varchar(100) | YES |  | NULL |  |  |
| d_update | timestamp | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "id": 2527,
    "hn": "650005914",
    "an": "670001419",
    "vstdate": "2024-09-04",
    "vsttime": "13:50:33",
    "ck_1": 1,
    "ck_2": 0,
    "ck_3": 1,
    "ck_4": 0,
    "ck_5": 0,
    "ck_6": 0,
    "ck_7": 0,
    "ck_8": 0,
    "ck_9": 1,
    "ck_9_1": 0,
    "ck_9_2": 0,
    "ck_9_3": 0,
    "ck_9_4": 0,
    "ck_10": 0,
    "ck_11": 0,
    "ck_12": 0,
    "ck_p1": 0,
    "ck_p2": 0,
    "ck_p2_other": "",
    "staff_doctor": "[MASKED_FULLNAME]",
    "staff_register": "nathee",
    "d_update": "2024-09-04 13:50:33"
  },
  {
    "id": 2528,
    "hn": "660001255",
    "an": "670001257",
    "vstdate": "2024-09-05",
    "vsttime": "10:26:46",
    "ck_1": 1,
    "ck_2": 1,
    "ck_3": 1,
    "ck_4": 1,
    "ck_5": 1,
    "ck_6": 0,
    "ck_7": 0,
    "ck_8": 0,
    "ck_9": 1,
    "ck_9_1": 1,
    "ck_9_2": 1,
    "ck_9_3": 0,
    "ck_9_4": 0,
    "ck_10": 1,
    "ck_11": 1,
    "ck_12": 0,
    "ck_p1": 1,
    "ck_p2": 0,
    "ck_p2_other": "",
    "staff_doctor": "[MASKED_FULLNAME]",
    "staff_register": "nathee",
    "d_update": "2024-09-05 10:26:46"
  },
  {
    "id": 2529,
    "hn": "680001290",
    "an": "680001985",
    "vstdate": "2026-01-05",
    "vsttime": "21:33:56",
    "ck_1": 0,
    "ck_2": 0,
    "ck_3": 0,
    "ck_4": 0,
    "ck_5": 0,
    "ck_6": 0,
    "ck_7": 0,
    "ck_8": 0,
    "ck_9": 0,
    "ck_9_1": 1,
    "ck_9_2": 0,
    "ck_9_3": 0,
    "ck_9_4": 0,
    "ck_10": 0,
    "ck_11": 0,
    "ck_12": 0,
    "ck_p1": 1,
    "ck_p2": 0,
    "ck_p2_other": "",
    "staff_doctor": "[MASKED_FULLNAME]",
    "staff_register": "yuwa228",
    "d_update": "2026-01-05 21:33:56"
  },
  {
    "id": 2530,
    "hn": "670000403",
    "an": "680002005",
    "vstdate": "2026-01-06",
    "vsttime": "22:30:28",
    "ck_1": 0,
    "ck_2": 0,
    "ck_3": 0,
    "ck_4": 0,
    "ck_5": 0,
    "ck_6": 0,
    "ck_7": 0,
    "ck_8": 0,
    "ck_9": 0,
    "ck_9_1": 0,
    "ck_9_2": 0,
    "ck_9_3": 0,
    "ck_9_4": 0,
    "ck_10": 0,
    "ck_11": 0,
    "ck_12": 0,
    "ck_p1": 1,
    "ck_p2": 0,
    "ck_p2_other": "",
    "staff_doctor": "[MASKED_FULLNAME]",
    "staff_register": "yuwa423",
    "d_update": "2026-01-06 22:30:28"
  }
]
```
