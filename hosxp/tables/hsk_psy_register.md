# `hsk_psy_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(30) | NO | PRI |  |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| an | varchar(9) | NO | PRI |  |  |  |
| regdate | date | YES |  | NULL |  |  |
| redtime | time | YES |  | NULL |  |  |
| department | varchar(20) | YES |  | NULL |  |  |
| complex_suicide | varchar(50) | YES |  | NULL |  |  |
| complex_smiv | varchar(50) | YES |  | NULL |  |  |
| psy_type | varchar(5) | YES | MUL | NULL |  |  |
| psy_typereport | varchar(10) | YES | MUL | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| regstaff | varchar(10) | YES |  | NULL |  |  |
| pdx | varchar(10) | YES |  | NULL |  |  |
| st_report | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | hn | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | an | yes | 3 |
| psy_type | psy_type | no | 1 |
| psy_typereport | psy_typereport | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "641207082620",
    "hn": "640004197",
    "an": "",
    "regdate": "2024-09-02",
    "redtime": "9:01:22",
    "department": "OPD",
    "complex_suicide": "Suicide Idea",
    "complex_smiv": "",
    "psy_type": "2",
    "psy_typereport": "R01",
    "doctor": "08",
    "regstaff": "00252",
    "pdx": "G442",
    "st_report": null
  },
  {
    "vn": "641222080436",
    "hn": "640004153",
    "an": "",
    "regdate": "2021-12-24",
    "redtime": "11:48:13",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "1",
    "psy_typereport": "R02",
    "doctor": "00311",
    "regstaff": "00397",
    "pdx": "F322",
    "st_report": null
  },
  {
    "vn": "641223084429",
    "hn": "640004484",
    "an": "",
    "regdate": "2021-12-24",
    "redtime": "11:54:30",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "6",
    "psy_typereport": "R01",
    "doctor": "00050",
    "regstaff": "00397",
    "pdx": "Z027",
    "st_report": null
  },
  {
    "vn": "641223084654",
    "hn": "640004485",
    "an": "",
    "regdate": "2021-12-24",
    "redtime": "11:55:50",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "6",
    "psy_typereport": "R01",
    "doctor": "00050",
    "regstaff": "00397",
    "pdx": "Z027",
    "st_report": null
  },
  {
    "vn": "641220083106",
    "hn": "640002777",
    "an": "",
    "regdate": "2021-12-24",
    "redtime": "11:59:39",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "2",
    "psy_typereport": "R02",
    "doctor": "00050",
    "regstaff": "00397",
    "pdx": "F3211",
    "st_report": null
  },
  {
    "vn": "641228083823",
    "hn": "630002307",
    "an": "",
    "regdate": "2022-02-10",
    "redtime": "13:27:39",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "1",
    "psy_typereport": "R03",
    "doctor": "00313",
    "regstaff": "00313",
    "pdx": "F322",
    "st_report": null
  },
  {
    "vn": "641228091711",
    "hn": "630001484",
    "an": "",
    "regdate": "2021-12-28",
    "redtime": "11:30:34",
    "department": "OPD",
    "complex_suicide": "",
    "complex_smiv": "",
    "psy_type": "2",
    "psy_typereport": "R02",
    "doctor": "00340",
    "regstaff": "00313",
    "pdx": "F845",
    "st_report": null
  },
  {
    "vn": "641228091415",
    "hn": "640000114",
    "an": "",
    "regdate": "2021-12-30",
    "redtime": "10:22:33",
    "department": "OPD",
    "complex_suicide": "Suicide Idea",
    "complex_smiv": "SMI-V",
    "psy_type": "6",
    "psy_typereport": "R02",
    "doctor": "00340",
    "regstaff": "00358",
    "pdx": "F1550",
    "st_report": null
  }
]
```
