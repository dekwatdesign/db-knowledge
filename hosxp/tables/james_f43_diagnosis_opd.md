# `james_f43_diagnosis_opd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| DIAGTYPE | varchar(1) | YES |  | NULL |  |  |
| DIAGCODE | varchar(6) | YES |  | NULL |  |  |
| CLINIC | varchar(5) | YES |  | NULL |  |  |
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
    "PID": "560001793",
    "SEQ": "392877",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "1",
    "DIAGCODE": "F840",
    "CLINIC": "00901",
    "PROVIDER": "063",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "392877",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "2",
    "DIAGCODE": "Z621",
    "CLINIC": "00901",
    "PROVIDER": "063",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "392877",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "2",
    "DIAGCODE": "R620",
    "CLINIC": "00901",
    "PROVIDER": "063",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "392877",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "2",
    "DIAGCODE": "G400",
    "CLINIC": "00901",
    "PROVIDER": "063",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "392878",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "1",
    "DIAGCODE": "F900",
    "CLINIC": "00901",
    "PROVIDER": "269",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "392878",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "2",
    "DIAGCODE": "F913",
    "CLINIC": "00901",
    "PROVIDER": "269",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "392878",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "2",
    "DIAGCODE": "Z628",
    "CLINIC": "00901",
    "PROVIDER": "269",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001906",
    "SEQ": "392879",
    "DATE_SERV": "20131101",
    "DIAGTYPE": "1",
    "DIAGCODE": "Z620",
    "CLINIC": "00901",
    "PROVIDER": "063",
    "D_UPDATE": "20131101104934"
  }
]
```
