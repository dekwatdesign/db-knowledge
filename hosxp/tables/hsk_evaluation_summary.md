# `hsk_evaluation_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eid | int(11) | NO | PRI | 0 |  |  |
| login | varchar(20) | YES | MUL | NULL |  |  |
| e_date | date | YES |  | NULL |  |  |
| e_time | time | YES |  | NULL |  |  |
| e1 | int(1) | YES |  | NULL |  |  |
| e2 | int(1) | YES |  | NULL |  |  |
| e3 | int(1) | YES |  | NULL |  |  |
| e4 | int(1) | YES |  | NULL |  |  |
| e5 | int(1) | YES |  | NULL |  |  |
| e6 | int(1) | YES |  | NULL |  |  |
| e7 | int(1) | YES |  | NULL |  |  |
| etotal | int(2) | YES |  | NULL |  |  |
| e_text | text | YES |  | NULL |  |  |
| tdate | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | eid | yes | 1 |
| uk | login | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "eid": 459,
    "login": "regis1",
    "e_date": "2024-08-20",
    "e_time": "18:19:13",
    "e1": 5,
    "e2": 5,
    "e3": 5,
    "e4": 5,
    "e5": 5,
    "e6": 5,
    "e7": 5,
    "etotal": null,
    "e_text": "-",
    "tdate": "2024-02-28"
  },
  {
    "eid": 460,
    "login": "chatchawal",
    "e_date": "2024-08-20",
    "e_time": "19:28:10",
    "e1": 5,
    "e2": 5,
    "e3": 5,
    "e4": 5,
    "e5": 5,
    "e6": 5,
    "e7": 5,
    "etotal": null,
    "e_text": "อยากให้พัฒนาระบบต่อไปให้ครอบคลุมงานบริการผู้ป่วย",
    "tdate": "2024-02-28"
  },
  {
    "eid": 461,
    "login": "yuwa273",
    "e_date": "2024-09-04",
    "e_time": "8:43:28",
    "e1": 4,
    "e2": 3,
    "e3": 4,
    "e4": 4,
    "e5": 4,
    "e6": 4,
    "e7": 4,
    "etotal": null,
    "e_text": ". ",
    "tdate": "2024-02-28"
  },
  {
    "eid": 462,
    "login": "nathee",
    "e_date": "2024-09-04",
    "e_time": "9:56:18",
    "e1": 3,
    "e2": 3,
    "e3": 3,
    "e4": 3,
    "e5": 3,
    "e6": 3,
    "e7": 4,
    "etotal": null,
    "e_text": "-",
    "tdate": "2024-02-28"
  },
  {
    "eid": 463,
    "login": "yuwa231",
    "e_date": "2024-09-04",
    "e_time": "10:28:48",
    "e1": 5,
    "e2": 5,
    "e3": 5,
    "e4": 5,
    "e5": 5,
    "e6": 5,
    "e7": 5,
    "etotal": null,
    "e_text": "ไม่มี",
    "tdate": "2024-02-28"
  },
  {
    "eid": 464,
    "login": "yuwa319",
    "e_date": "2024-09-04",
    "e_time": "12:22:34",
    "e1": 5,
    "e2": 5,
    "e3": 5,
    "e4": 5,
    "e5": 5,
    "e6": 5,
    "e7": 5,
    "etotal": null,
    "e_text": ".",
    "tdate": "2024-02-28"
  },
  {
    "eid": 465,
    "login": "yuwa277",
    "e_date": "2024-09-05",
    "e_time": "10:24:34",
    "e1": 4,
    "e2": 4,
    "e3": 4,
    "e4": 4,
    "e5": 4,
    "e6": 4,
    "e7": 4,
    "etotal": null,
    "e_text": "-",
    "tdate": "2024-02-28"
  },
  {
    "eid": 466,
    "login": "puttapan_ycap",
    "e_date": "2024-09-05",
    "e_time": "13:58:24",
    "e1": 5,
    "e2": 5,
    "e3": 5,
    "e4": 5,
    "e5": 5,
    "e6": 5,
    "e7": 5,
    "etotal": null,
    "e_text": "-",
    "tdate": "2024-02-28"
  }
]
```
