# `itempay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| itempay_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(50) | YES |  | NULL |  |  |
| unitprice | varchar(50) | YES |  | NULL |  |  |
| discount | varchar(50) | YES |  | NULL |  |  |
| sum_price | varchar(50) | YES |  | NULL |  |  |
| qty | varchar(50) | YES |  | NULL |  |  |
| cost | varchar(50) | YES |  | NULL |  |  |
| freq | varchar(50) | YES |  | NULL |  |  |
| unit_use | varchar(50) | YES |  | NULL |  |  |
| times | varchar(50) | YES |  | NULL |  |  |
| oldcode | varchar(50) | YES |  | NULL |  |  |
| method | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | itempay_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "itempay_id": 1,
    "icode": "ORS2",
    "unitprice": "2.01",
    "discount": "0",
    "sum_price": "11",
    "qty": "5",
    "cost": "1.61",
    "freq": null,
    "unit_use": null,
    "times": "OR5",
    "oldcode": "5407120001",
    "method": "X2"
  },
  {
    "itempay_id": 2,
    "icode": "CLML",
    "unitprice": "10.63",
    "discount": "0",
    "sum_price": "11",
    "qty": "1",
    "cost": "8.5",
    "freq": "BID",
    "unit_use": null,
    "times": "T02",
    "oldcode": "5407120001",
    "method": "R25"
  },
  {
    "itempay_id": 3,
    "icode": "ZSMCD",
    "unitprice": "26.75",
    "discount": "0",
    "sum_price": "27",
    "qty": "1",
    "cost": "21.4",
    "freq": null,
    "unit_use": null,
    "times": null,
    "oldcode": "5407120001",
    "method": null
  },
  {
    "itempay_id": 4,
    "icode": "LRZPT",
    "unitprice": "0.28",
    "discount": "0",
    "sum_price": "3",
    "qty": "10",
    "cost": "0.22",
    "freq": "OD",
    "unit_use": "1",
    "times": "HS",
    "oldcode": "5407120002",
    "method": "OR1"
  },
  {
    "itempay_id": 5,
    "icode": "MOML2",
    "unitprice": "18.75",
    "discount": "0",
    "sum_price": "19",
    "qty": "1",
    "cost": "15",
    "freq": "OD",
    "unit_use": "2",
    "times": "HS",
    "oldcode": "5407120002",
    "method": "OR1"
  },
  {
    "itempay_id": 6,
    "icode": "MPI",
    "unitprice": "7.5",
    "discount": "0",
    "sum_price": "8",
    "qty": "1",
    "cost": "6",
    "freq": null,
    "unit_use": null,
    "times": null,
    "oldcode": "5407120003",
    "method": null
  },
  {
    "itempay_id": 7,
    "icode": "CFZLI",
    "unitprice": "28.09",
    "discount": "0",
    "sum_price": "29",
    "qty": "1",
    "cost": "22.47",
    "freq": "OR",
    "unit_use": "1",
    "times": null,
    "oldcode": "5407120003",
    "method": "IV"
  },
  {
    "itempay_id": 8,
    "icode": "D5S2",
    "unitprice": "40",
    "discount": "0",
    "sum_price": "80",
    "qty": "2",
    "cost": "32",
    "freq": null,
    "unit_use": null,
    "times": null,
    "oldcode": "5407120003",
    "method": null
  }
]
```
