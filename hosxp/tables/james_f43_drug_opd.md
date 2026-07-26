# `james_f43_drug_opd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| CLINIC | varchar(5) | YES |  | NULL |  |  |
| DIDSTD | varchar(24) | YES |  | NULL |  |  |
| DNAME | varchar(255) | YES |  | NULL |  |  |
| AMOUNT | varchar(12) | YES |  | NULL |  |  |
| UNIT | varchar(3) | YES |  | NULL |  |  |
| UNIT_PACKING | varchar(20) | YES |  | NULL |  |  |
| DRUGPRICE | varchar(10) | YES |  | NULL |  |  |
| DRUGCOST | varchar(10) | YES |  | NULL |  |  |
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
    "PID": "001947",
    "SEQ": "392878",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "",
    "DNAME": "Methylphenidate(RITALIN:ริตาลิน),10,mg,เม็ด",
    "AMOUNT": "135",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "6.00",
    "DRUGCOST": "4.50",
    "PROVIDER": "269",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001905",
    "SEQ": "392880",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "",
    "DNAME": "Methylphenidate(RITALIN:ริตาลิน),10,mg,เม็ด",
    "AMOUNT": "65",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "6.00",
    "DRUGCOST": "4.50",
    "PROVIDER": "063",
    "D_UPDATE": "20131101142535"
  },
  {
    "HOSPCODE": "12251",
    "PID": "004161",
    "SEQ": "392746",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "124929000000531330881652",
    "DNAME": "RisPERdal,,soln,1,mg/ml,ขวด,(30,ml.)",
    "AMOUNT": "0",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "1090.00",
    "DRUGCOST": "941.60",
    "PROVIDER": "256",
    "D_UPDATE": "20131101142533"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "144219000003670120381408",
    "DNAME": "ABILIFY,(Aripiprazole),15,mg,เม็ด",
    "AMOUNT": "100",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "190.00",
    "DRUGCOST": "160.50",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "102235000003211220381252",
    "DNAME": "CloNAzepam,(Prenarpil),0.5,mg,เม็ด",
    "AMOUNT": "0",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "1.00",
    "DRUGCOST": "0.50",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "101870000003521120381506",
    "DNAME": "folic,acid,5,mg,เม็ด",
    "AMOUNT": "100",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "0.50",
    "DRUGCOST": "0.09",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "100823000003361120381506",
    "DNAME": "Haloperidol,2,mg,เม็ด",
    "AMOUNT": "260",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "1.00",
    "DRUGCOST": "0.40",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  },
  {
    "HOSPCODE": "12251",
    "PID": "013516",
    "SEQ": "392754",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "DIDSTD": "",
    "DNAME": "Sertaline,GPO,50,mg,เม็ด",
    "AMOUNT": "100",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "5.50",
    "DRUGCOST": "4.00",
    "PROVIDER": "256",
    "D_UPDATE": "20131101093711"
  }
]
```
