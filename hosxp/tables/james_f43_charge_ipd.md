# `james_f43_charge_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HOSPCODE | varchar(5) | YES |  | NULL |  |  |
| PID | varchar(15) | YES | MUL | NULL |  |  |
| AN | varchar(9) | YES |  | NULL |  |  |
| DATETIME_ADMIT | varchar(14) | YES |  | NULL |  |  |
| WARDSTAY | varchar(5) | YES |  | NULL |  |  |
| CHARGEITEM | varchar(2) | YES |  | NULL |  |  |
| CHARGELIST | varchar(6) | YES |  | NULL |  |  |
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
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "14",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130514132635"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "13",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130514132635"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "16",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130514132635"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "14",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130515132701"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "13",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130515132701"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "16",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130515132701"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "14",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130527081548"
  },
  {
    "HOSPCODE": "12251",
    "PID": "015597",
    "AN": "560000597",
    "DATETIME_ADMIT": "20130514080000",
    "WARDSTAY": "10901",
    "CHARGEITEM": "13",
    "CHARGELIST": "000000",
    "QUANTITY": "1",
    "INSTYPE": "9100",
    "COST": "0.00",
    "PRICE": "300.00",
    "PAYPRICE": "300.00",
    "D_UPDATE": "20130527081548"
  }
]
```
