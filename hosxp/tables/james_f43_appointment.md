# `james_f43_appointment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| CLINIC | varchar(5) | YES |  | NULL |  |  |
| APDATE | varchar(8) | YES |  | NULL |  |  |
| APTYPE | varchar(3) | YES |  | NULL |  |  |
| APDIAG | varchar(6) | YES |  | NULL |  |  |
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
    "PID": "560001906",
    "AN": "",
    "SEQ": "392879",
    "DATE_SERV": "20131101",
    "CLINIC": "000",
    "APDATE": "20140113",
    "APTYPE": "151",
    "APDIAG": "Z620",
    "PROVIDER": "063",
    "D_UPDATE": "20131101104934"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001905",
    "AN": "",
    "SEQ": "392880",
    "DATE_SERV": "20131101",
    "CLINIC": "000",
    "APDATE": "20140106",
    "APTYPE": "151",
    "APDIAG": "F900",
    "PROVIDER": "063",
    "D_UPDATE": "20131101142535"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001905",
    "AN": "",
    "SEQ": "392880",
    "DATE_SERV": "20131101",
    "CLINIC": "011",
    "APDATE": "20140807",
    "APTYPE": "151",
    "APDIAG": "F900",
    "PROVIDER": "094",
    "D_UPDATE": "20131101142535"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001905",
    "AN": "",
    "SEQ": "392880",
    "DATE_SERV": "20131101",
    "CLINIC": "010",
    "APDATE": "20140206",
    "APTYPE": "151",
    "APDIAG": "F900",
    "PROVIDER": "259",
    "D_UPDATE": "20131101142535"
  },
  {
    "HOSPCODE": "12251",
    "PID": "004161",
    "AN": "",
    "SEQ": "392746",
    "DATE_SERV": "20131101",
    "CLINIC": "000",
    "APDATE": "20140228",
    "APTYPE": "151",
    "APDIAG": "F840",
    "PROVIDER": "256",
    "D_UPDATE": "20131101142533"
  },
  {
    "HOSPCODE": "12251",
    "PID": "004161",
    "AN": "",
    "SEQ": "392746",
    "DATE_SERV": "20131101",
    "CLINIC": "003",
    "APDATE": "20140108",
    "APTYPE": "151",
    "APDIAG": "F840",
    "PROVIDER": "115",
    "D_UPDATE": "20131101142533"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "AN": "",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "000",
    "APDATE": "20140207",
    "APTYPE": "151",
    "APDIAG": "F840",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001887",
    "AN": "",
    "SEQ": "392789",
    "DATE_SERV": "20131101",
    "CLINIC": "000",
    "APDATE": "20131209",
    "APTYPE": "151",
    "APDIAG": "F848",
    "PROVIDER": "066",
    "D_UPDATE": "20131101134315"
  }
]
```
