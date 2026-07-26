# `james_f43_charge_opd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| SEQ | varchar(16) | YES |  | NULL |  |  |
| DATE_SERV | varchar(8) | YES |  | NULL |  |  |
| CLINIC | varchar(5) | YES |  | NULL |  |  |
| CHARGEITEM | varchar(2) | YES |  | NULL |  |  |
| CHARGELIST | varchar(10) | YES |  | NULL |  |  |
| QUANTITY | varchar(11) | YES |  | NULL |  |  |
| INSTYPE | varchar(4) | YES |  | NULL |  |  |
| COST | varchar(11) | YES |  | NULL |  |  |
| PRICE | varchar(11) | YES |  | NULL |  |  |
| PAYPRICE | varchar(11) | YES |  | NULL |  |  |
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
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "14",
    "CHARGELIST": "300000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "50.00",
    "PAYPRICE": "50.00",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "13",
    "CHARGELIST": "300003",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "14",
    "CHARGELIST": "300000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "100.00",
    "PAYPRICE": "100.00",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001793",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "13",
    "CHARGELIST": "300003",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20131101100000"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "14",
    "CHARGELIST": "300035",
    "QUANTITY": "1",
    "INSTYPE": "0100",
    "COST": "0.00",
    "PRICE": "160.00",
    "PAYPRICE": "160.00",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "12",
    "CHARGELIST": "100009",
    "QUANTITY": "135",
    "INSTYPE": "0100",
    "COST": "4.50",
    "PRICE": "810.00",
    "PAYPRICE": "0.00",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "001947",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "14",
    "CHARGELIST": "300000",
    "QUANTITY": "1",
    "INSTYPE": "0100",
    "COST": "0.00",
    "PRICE": "50.00",
    "PAYPRICE": "0.00",
    "D_UPDATE": "20131101092125"
  },
  {
    "HOSPCODE": "12251",
    "PID": "560001906",
    "SEQ": "",
    "DATE_SERV": "20131101",
    "CLINIC": "00901",
    "CHARGEITEM": "14",
    "CHARGELIST": "300029",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "20.00",
    "PAYPRICE": "20.00",
    "D_UPDATE": "20131101104934"
  }
]
```
