# `james_f43_disability`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| DISABID | varchar(13) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| DISABTYPE | varchar(1) | YES |  | NULL |  |  |
| DISABCAUSE | varchar(1) | YES |  | NULL |  |  |
| DIAGCODE | varchar(6) | YES |  | NULL |  |  |
| DATE_DETECT | varchar(8) | YES |  | NULL |  |  |
| DATE_DISAB | varchar(8) | YES |  | NULL |  |  |
| D_UPDATE | varchar(14) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PID | PID | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "006927",
    "DISABTYPE": "3",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20131225081425"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "007444",
    "DISABTYPE": "5",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "008113",
    "DISABTYPE": "5",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "007593",
    "DISABTYPE": "2",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "008045",
    "DISABTYPE": "3",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "009558",
    "DISABTYPE": "3",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "004400",
    "DISABTYPE": "4",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20130304182436"
  },
  {
    "HOSPCODE": "12251",
    "DISABID": "",
    "PID": "009672",
    "DISABTYPE": "4",
    "DISABCAUSE": "",
    "DIAGCODE": "",
    "DATE_DETECT": "18991230",
    "DATE_DISAB": "18991230",
    "D_UPDATE": "20131119100710"
  }
]
```
