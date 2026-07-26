# `james_f43_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| HN | varchar(15) | YES |  | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| TIME_SERV | varchar(6) | YES |  | NULL |  |  |
| LOCATION | varchar(10) | YES |  | NULL |  |  |
| INTIME | varchar(10) | YES |  | NULL |  |  |
| INSTYPE | varchar(10) | YES |  | NULL |  |  |
| INSID | varchar(18) | YES |  | NULL |  |  |
| MAIN | varchar(5) | YES |  | NULL |  |  |
| TYPEIN | varchar(10) | YES |  | NULL |  |  |
| REFERINHOSP | varchar(5) | YES |  | NULL |  |  |
| CAUSEIN | varchar(10) | YES |  | NULL |  |  |
| CHIEFCOMP | varchar(255) | YES |  | NULL |  |  |
| SERVPLACE | varchar(10) | YES |  | NULL |  |  |
| BTEMP | varchar(10) | YES |  | NULL |  |  |
| SBP | varchar(5) | YES |  | NULL |  |  |
| DBP | varchar(5) | YES |  | NULL |  |  |
| PR | varchar(5) | YES |  | NULL |  |  |
| RR | varchar(5) | YES |  | NULL |  |  |
| TYPEOUT | varchar(10) | YES |  | NULL |  |  |
| REFEROUTHOSP | varchar(5) | YES |  | NULL |  |  |
| CAUSEOUT | varchar(10) | YES |  | NULL |  |  |
| COST | varchar(11) | YES |  | NULL |  |  |
| PRICE | varchar(11) | YES |  | NULL |  |  |
| PAYPRICE | varchar(11) | YES |  | NULL |  |  |
| ACTUALPAY | varchar(11) | YES |  | NULL |  |  |
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
    "HN": "560001793",
    "SEQ": "392877",
    "DATE_SERV": "20131101",
    "TIME_SERV": "075526",
    "LOCATION": "1",
    "INTIME": "1",
    "INSTYPE": "9100",
    "INSID": "",
    "MAIN": "",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.0",
    "SBP": "98",
    "DBP": "60",
    "PR": "100",
    "RR": "22",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "750.00",
    "PRICE": "750.00",
    "PAYPRICE": "750.00",
    "ACTUALPAY": "750.00",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "HN": "550001845",
    "SEQ": "392878",
    "DATE_SERV": "20131101",
    "TIME_SERV": "081837",
    "LOCATION": "2",
    "INTIME": "1",
    "INSTYPE": "0100",
    "INSID": "ท7161119449",
    "MAIN": "10772",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "",
    "SERVPLACE": "1",
    "BTEMP": "0.0",
    "SBP": "0",
    "DBP": "0",
    "PR": "0",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "607.50",
    "PRICE": "1020.00",
    "PAYPRICE": "160.00",
    "ACTUALPAY": "160.00",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001906",
    "HN": "560001906",
    "SEQ": "392879",
    "DATE_SERV": "20131101",
    "TIME_SERV": "081949",
    "LOCATION": "1",
    "INTIME": "1",
    "INSTYPE": "9100",
    "INSID": "",
    "MAIN": "",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.5",
    "SBP": "0",
    "DBP": "0",
    "PR": "0",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "470.00",
    "PRICE": "470.00",
    "PAYPRICE": "470.00",
    "ACTUALPAY": "470.00",
    "D_UPDATE": "20131101104934"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001905",
    "HN": "560001905",
    "SEQ": "392880",
    "DATE_SERV": "20131101",
    "TIME_SERV": "082316",
    "LOCATION": "1",
    "INTIME": "1",
    "INSTYPE": "9100",
    "INSID": "",
    "MAIN": "",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.5",
    "SBP": "116",
    "DBP": "67",
    "PR": "92",
    "RR": "22",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "292.50",
    "PRICE": "860.00",
    "PAYPRICE": "860.00",
    "ACTUALPAY": "860.00",
    "D_UPDATE": "20131101142535"
  },
  {
    "HOSPCODE": "12251",
    "PID": "004161",
    "HN": "560000140",
    "SEQ": "392746",
    "DATE_SERV": "20131101",
    "TIME_SERV": "083000",
    "LOCATION": "2",
    "INTIME": "2",
    "INSTYPE": "9100",
    "INSID": "",
    "MAIN": "",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.0",
    "SBP": "0",
    "DBP": "0",
    "PR": "0",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "350.00",
    "PRICE": "350.00",
    "PAYPRICE": "350.00",
    "ACTUALPAY": "350.00",
    "D_UPDATE": "20131101142533"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "HN": "530026647",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "TIME_SERV": "083002",
    "LOCATION": "2",
    "INTIME": "2",
    "INSTYPE": "1100",
    "INSID": "",
    "MAIN": "12251",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.4",
    "SBP": "0",
    "DBP": "0",
    "PR": "0",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "20437.32",
    "PRICE": "24840.00",
    "PAYPRICE": "0.00",
    "ACTUALPAY": "0.00",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001887",
    "HN": "560001887",
    "SEQ": "392789",
    "DATE_SERV": "20131101",
    "TIME_SERV": "083004",
    "LOCATION": "1",
    "INTIME": "2",
    "INSTYPE": "0100",
    "INSID": "ท7178589481",
    "MAIN": "10754",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "[MASKED_FULLNAME]",
    "SERVPLACE": "1",
    "BTEMP": "36.0",
    "SBP": "0",
    "DBP": "0",
    "PR": "0",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "950.00",
    "PRICE": "950.00",
    "PAYPRICE": "0.00",
    "ACTUALPAY": "0.00",
    "D_UPDATE": "20131101134315"
  },
  {
    "HOSPCODE": "12251",
    "PID": "020711",
    "HN": "550001691",
    "SEQ": "392792",
    "DATE_SERV": "20131101",
    "TIME_SERV": "083006",
    "LOCATION": "2",
    "INTIME": "2",
    "INSTYPE": "9100",
    "INSID": "",
    "MAIN": "",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "1",
    "CHIEFCOMP": "มาตามทันตแพทย์นัด",
    "SERVPLACE": "1",
    "BTEMP": "0.0",
    "SBP": "145",
    "DBP": "83",
    "PR": "61",
    "RR": "0",
    "TYPEOUT": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "950.00",
    "PRICE": "950.00",
    "PAYPRICE": "950.00",
    "ACTUALPAY": "950.00",
    "D_UPDATE": "20131101085508"
  }
]
```
