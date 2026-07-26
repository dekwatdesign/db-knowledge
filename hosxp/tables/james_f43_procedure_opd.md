# `james_f43_procedure_opd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| CLINIC | varchar(5) | YES |  | NULL |  |  |
| PROCEDCODE | varchar(7) | YES |  | NULL |  |  |
| SERVICEPRICE | varchar(11) | YES |  | NULL |  |  |
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
    "PID": "013978",
    "SEQ": "392802",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "5199",
    "SERVICEPRICE": "500.00",
    "PROVIDER": "207",
    "D_UPDATE": "20131101152728"
  },
  {
    "HOSPCODE": "12251",
    "PID": "008106",
    "SEQ": "392803",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "5199",
    "SERVICEPRICE": "500.00",
    "PROVIDER": "207",
    "D_UPDATE": "20131101152745"
  },
  {
    "HOSPCODE": "12251",
    "PID": "008158",
    "SEQ": "392797",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "5199",
    "SERVICEPRICE": "500.00",
    "PROVIDER": "207",
    "D_UPDATE": "20131101162013"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000583",
    "SEQ": "392798",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "5199",
    "SERVICEPRICE": "500.00",
    "PROVIDER": "207",
    "D_UPDATE": "20131101152713"
  },
  {
    "HOSPCODE": "12251",
    "PID": "018182",
    "SEQ": "392799",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "5199",
    "SERVICEPRICE": "500.00",
    "PROVIDER": "207",
    "D_UPDATE": "20131101162235"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001797",
    "SEQ": "392817",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "9438",
    "SERVICEPRICE": "150.00",
    "PROVIDER": "141",
    "D_UPDATE": "20131101162155"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021901",
    "SEQ": "392819",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "9383",
    "SERVICEPRICE": "150.00",
    "PROVIDER": "125",
    "D_UPDATE": "20131101162225"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021901",
    "SEQ": "392819",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "PROCEDCODE": "9438",
    "SERVICEPRICE": "150.00",
    "PROVIDER": "125",
    "D_UPDATE": "20131101162225"
  }
]
```
