# `james_f43_admission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| WARDADMIT | varchar(5) | YES |  | NULL |  |  |
| INSTYPE | varchar(4) | YES |  | NULL |  |  |
| TYPEIN | varchar(1) | YES |  | NULL |  |  |
| REFERINHOSP | varchar(5) | YES |  | NULL |  |  |
| CAUSEIN | varchar(1) | YES |  | NULL |  |  |
| ADMITWEIGHT | varchar(5) | YES |  | NULL |  |  |
| ADMITHEIGHT | varchar(3) | YES |  | NULL |  |  |
| DATETIME_DISCH | varchar(14) | YES |  | NULL |  |  |
| WARDDISCH | varchar(5) | YES |  | NULL |  |  |
| DISCHSTATUS | varchar(1) | YES |  | NULL |  |  |
| DISCHTYPE | varchar(1) | YES |  | NULL |  |  |
| REFEROUTHOSP | varchar(5) | YES |  | NULL |  |  |
| CAUSEOUT | varchar(1) | YES |  | NULL |  |  |
| COST | varchar(11) | YES |  | NULL |  |  |
| PRICE | varchar(11) | YES |  | NULL |  |  |
| PAYPRICE | varchar(11) | YES |  | NULL |  |  |
| ACTUALPAY | varchar(11) | YES |  | NULL |  |  |
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
    "SEQ": "361433",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDADMIT": "10901",
    "INSTYPE": "9100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131126160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "24000.00",
    "PAYPRICE": "24000.00",
    "ACTUALPAY": "24000",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021917",
    "SEQ": "380181",
    "AN": "560001138",
    "DATETIME_ADMIT": "20130827080000",
    "WARDADMIT": "10901",
    "INSTYPE": "9100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131113160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "1800.00",
    "PAYPRICE": "1800.00",
    "ACTUALPAY": "900",
    "PROVIDER": "257",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021509",
    "SEQ": "380213",
    "AN": "560001146",
    "DATETIME_ADMIT": "20130827080000",
    "WARDADMIT": "10901",
    "INSTYPE": "9100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131122160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "18300.00",
    "PAYPRICE": "18300.00",
    "ACTUALPAY": "18300",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001394",
    "SEQ": "380218",
    "AN": "560001148",
    "DATETIME_ADMIT": "20130827080000",
    "WARDADMIT": "10901",
    "INSTYPE": "9100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131113160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "3600.00",
    "PAYPRICE": "3600.00",
    "ACTUALPAY": "3600",
    "PROVIDER": "068",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021834",
    "SEQ": "384800",
    "AN": "560001277",
    "DATETIME_ADMIT": "20130918080000",
    "WARDADMIT": "10901",
    "INSTYPE": "9100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131115160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "1050.00",
    "PAYPRICE": "1050.00",
    "ACTUALPAY": "0",
    "PROVIDER": "064",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "006814",
    "SEQ": "386607",
    "AN": "560001322",
    "DATETIME_ADMIT": "20130930080000",
    "WARDADMIT": "10901",
    "INSTYPE": "0100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131108160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "3450.00",
    "PAYPRICE": "0.00",
    "ACTUALPAY": "0",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "020218",
    "SEQ": "386857",
    "AN": "560001326",
    "DATETIME_ADMIT": "20131001080000",
    "WARDADMIT": "10901",
    "INSTYPE": "0100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131104160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "1009.10",
    "PRICE": "7630.00",
    "PAYPRICE": "0.00",
    "ACTUALPAY": "0",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "000282",
    "SEQ": "387868",
    "AN": "560001348",
    "DATETIME_ADMIT": "20131005080000",
    "WARDADMIT": "10901",
    "INSTYPE": "0100",
    "TYPEIN": "1",
    "REFERINHOSP": "",
    "CAUSEIN": "",
    "ADMITWEIGHT": "0.0",
    "ADMITHEIGHT": "0",
    "DATETIME_DISCH": "20131106160000",
    "WARDDISCH": "10901",
    "DISCHSTATUS": "2",
    "DISCHTYPE": "1",
    "REFEROUTHOSP": "",
    "CAUSEOUT": "",
    "COST": "0.00",
    "PRICE": "7650.00",
    "PAYPRICE": "0.00",
    "ACTUALPAY": "0",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  }
]
```
