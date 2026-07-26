# `james_f43_diagnosis_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| WARDDIAG | varchar(5) | YES |  | NULL |  |  |
| DIAGTYPE | varchar(1) | YES |  | NULL |  |  |
| DIAGCODE | varchar(6) | YES |  | NULL |  |  |
| PROVIDER | varchar(15) | YES |  | NULL |  |  |
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
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021917",
    "AN": "560001138",
    "DATETIME_ADMIT": "20130827080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "257",
    "D_UPDATE": "20130903100832"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021509",
    "AN": "560001146",
    "DATETIME_ADMIT": "20130827080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000000000",
    "AN": "560001148",
    "DATETIME_ADMIT": "20130827080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "068",
    "D_UPDATE": "20130903101238"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021834",
    "AN": "560001277",
    "DATETIME_ADMIT": "20130918080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "2",
    "DIAGCODE": "F791",
    "PROVIDER": "064",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021834",
    "AN": "560001277",
    "DATETIME_ADMIT": "20130918080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "064",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "006814",
    "AN": "560001322",
    "DATETIME_ADMIT": "20130930080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "020218",
    "AN": "560001326",
    "DATETIME_ADMIT": "20131001080000",
    "WARDDIAG": "10901",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  }
]
```
