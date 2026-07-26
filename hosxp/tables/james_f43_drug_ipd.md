# `james_f43_drug_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| WARDSTAY | varchar(5) | YES |  | NULL |  |  |
| TYPEDRUG | varchar(1) | YES |  | NULL |  |  |
| DIDSTD | varchar(24) | YES |  | NULL |  |  |
| DNAME | varchar(255) | YES |  | NULL |  |  |
| DATESTART | varchar(8) | YES |  | NULL |  |  |
| DATEFINISH | varchar(8) | YES |  | NULL |  |  |
| AMOUNT | varchar(12) | YES |  | NULL |  |  |
| UNIT | varchar(3) | YES |  | NULL |  |  |
| UNIT_PACKING | varchar(20) | YES |  | NULL |  |  |
| DRUGPRICE | varchar(11) | YES |  | NULL |  |  |
| DRUGCOST | varchar(11) | YES |  | NULL |  |  |
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
    "PID": "020218",
    "AN": "560001326",
    "DATETIME_ADMIT": "20131001080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "",
    "DNAME": "Methylphenidate(RITALIN:ริตาลิน)",
    "DATESTART": "20131022",
    "DATEFINISH": "20131022",
    "AMOUNT": "15",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "6.00",
    "DRUGCOST": "4.50",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "020218",
    "AN": "560001326",
    "DATETIME_ADMIT": "20131001080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "124929000000531330881652",
    "DNAME": "RisPERdal,,soln",
    "DATESTART": "20131022",
    "DATEFINISH": "20131022",
    "AMOUNT": "1",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "1090.00",
    "DRUGCOST": "941.60",
    "PROVIDER": "069",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "009622",
    "AN": "560001351",
    "DATETIME_ADMIT": "20131005080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "",
    "DNAME": "Methylphenidate(RITALIN:ริตาลิน)",
    "DATESTART": "20131021",
    "DATEFINISH": "20131021",
    "AMOUNT": "40",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "6.00",
    "DRUGCOST": "4.50",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021570",
    "AN": "560001371",
    "DATETIME_ADMIT": "20131007204500",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "100864000003211220381169",
    "DNAME": "LORazepam",
    "DATESTART": "20131008",
    "DATEFINISH": "20131008",
    "AMOUNT": "3",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "0.75",
    "DRUGCOST": "0.22",
    "PROVIDER": "063",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "021570",
    "AN": "560001371",
    "DATETIME_ADMIT": "20131007204500",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "100864000003211220381169",
    "DNAME": "LORazepam",
    "DATESTART": "20131010",
    "DATEFINISH": "20131010",
    "AMOUNT": "8",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "0.75",
    "DRUGCOST": "0.22",
    "PROVIDER": "063",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "018239",
    "AN": "560001405",
    "DATETIME_ADMIT": "20131014080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "",
    "DNAME": "Risperidone,GPO",
    "DATESTART": "20131028",
    "DATEFINISH": "20131028",
    "AMOUNT": "23",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "3.25",
    "DRUGCOST": "2.40",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "018239",
    "AN": "560001405",
    "DATETIME_ADMIT": "20131014080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "",
    "DNAME": "Risperidone,GPO",
    "DATESTART": "20131028",
    "DATEFINISH": "20131028",
    "AMOUNT": "15",
    "UNIT": "003",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "5.00",
    "DRUGCOST": "3.80",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "018239",
    "AN": "560001405",
    "DATETIME_ADMIT": "20131014080000",
    "WARDSTAY": "10901",
    "TYPEDRUG": "1",
    "DIDSTD": "100776255001460930881602",
    "DNAME": "Depakine,SOL",
    "DATESTART": "20131028",
    "DATEFINISH": "20131028",
    "AMOUNT": "1",
    "UNIT": "006",
    "UNIT_PACKING": "1",
    "DRUGPRICE": "260.00",
    "DRUGCOST": "223.63",
    "PROVIDER": "256",
    "D_UPDATE": "18991230000000"
  }
]
```
