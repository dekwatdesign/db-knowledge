# `opd_ipd_transfer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oitr_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| item_no | int(11) | YES |  | NULL |  |  |
| unitprice | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guod | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | oitr_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oitr_id": 1,
    "vn": "541010160908",
    "an": "540000786",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 2,
    "vn": "541010161007",
    "an": "540000787",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 3,
    "vn": "541013081512",
    "an": "540000788",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 4,
    "vn": "541012165450",
    "an": "540000789",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 5,
    "vn": "541012165401",
    "an": "540000791",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 6,
    "vn": "541012165323",
    "an": "540000792",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 7,
    "vn": "541010155128",
    "an": "540000793",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  },
  {
    "oitr_id": 8,
    "vn": "541010081550",
    "an": "540000794",
    "icode": "3000001",
    "qty": 1,
    "drugusage": "",
    "sp_use": "",
    "price": 50.0,
    "sum_price": 50.0,
    "doctor": "",
    "item_no": 0,
    "unitprice": 50.0,
    "hos_guid": null,
    "discount": null
  }
]
```
