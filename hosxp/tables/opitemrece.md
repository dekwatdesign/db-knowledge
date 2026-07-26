# `opitemrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES | MUL | NULL |  |  |
| idr | varchar(30) | YES |  | NULL |  |  |
| iperday | int(11) | YES |  | NULL |  |  |
| iperdose | double(12,3) | YES |  | NULL |  |  |
| recetime | time | YES |  | NULL |  |  |
| unitprice | double(12,3) | YES |  | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| vsttime | time | YES |  | NULL |  |  |
| doctor | varchar(10) | YES | MUL | NULL |  |  |
| rxdate | date | YES | MUL | NULL |  |  |
| rxtime | time | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| hcode | varchar(5) | YES | MUL | NULL |  |  |
| print | char(1) | YES |  | NULL |  |  |
| dep_code | char(3) | YES |  | NULL |  |  |
| finance_number | varchar(7) | YES | MUL | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| use_right | char(1) | YES |  | NULL |  |  |
| node_id | char(1) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| sub_type | char(1) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| remain | char(1) | YES |  | NULL |  |  |
| item_type | char(1) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| doctor_lock | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| item_no | tinyint(4) | YES |  | NULL |  |  |
| last_modified | datetime | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| command_doctor | varchar(10) | YES |  | NULL |  |  |
| opi_doctor_finance_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_order_no | an | no | 1 |
| ix_an_order_no | order_no | no | 2 |
| ix_an_rxdate_icode | an | no | 1 |
| ix_an_rxdate_icode | rxdate | no | 2 |
| ix_an_rxdate_icode | icode | no | 3 |
| ix_an_rxdate_icode_index | an | no | 1 |
| ix_an_rxdate_icode_index | icode | no | 2 |
| ix_an_rxdate_icode_index | rxdate | no | 3 |
| ix_doctor | doctor | no | 1 |
| ix_drugusage | drugusage | no | 1 |
| ix_finance_number | finance_number | no | 1 |
| ix_hcode | hcode | no | 1 |
| ix_hn | hn | no | 1 |
| ix_icode | icode | no | 1 |
| ix_item_type | item_type | no | 1 |
| ix_pttype | pttype | no | 1 |
| ix_rxdate | rxdate | no | 1 |
| ix_sub_type | sub_type | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{00000150-6A36-478A-BF28-AC905B6973C5}",
    "vn": "590106140006",
    "hn": "560001933",
    "an": null,
    "icode": "1000143",
    "qty": 90,
    "drugusage": "0335",
    "idr": null,
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 3.25,
    "vstdate": "2016-01-06",
    "vsttime": "14:00:06",
    "doctor": "087",
    "rxdate": "2016-01-06",
    "rxtime": "14:42:07",
    "sp_use": "",
    "hcode": "12251",
    "print": "N",
    "dep_code": "030",
    "finance_number": "143788",
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": 5,
    "sub_type": "1",
    "pttype": "11",
    "income": "03",
    "remain": null,
    "item_type": "",
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": "",
    "paidst": "02",
    "item_no": 5,
    "last_modified": null,
    "sum_price": 293.0,
    "cost": 2.4,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{000002F8-FE5D-412A-85D0-1555FF188F06}",
    "vn": "620529091927",
    "hn": "620000106",
    "an": null,
    "icode": "1000097",
    "qty": 40,
    "drugusage": "0317",
    "idr": null,
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 6.0,
    "vstdate": "2019-05-29",
    "vsttime": "9:19:27",
    "doctor": "063",
    "rxdate": "2019-05-29",
    "rxtime": "9:52:22",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "030",
    "finance_number": "266248",
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": 246252,
    "sub_type": "1",
    "pttype": "11",
    "income": "03",
    "remain": null,
    "item_type": "",
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": "",
    "paidst": "02",
    "item_no": 2,
    "last_modified": null,
    "sum_price": 240.0,
    "cost": 4.5,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{00000A81-B78E-42C6-A86A-937E6A7E77F7}",
    "vn": "651207140056",
    "hn": "650005287",
    "an": null,
    "icode": "3001998",
    "qty": 1,
    "drugusage": "",
    "idr": null,
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 370.0,
    "vstdate": "2022-12-07",
    "vsttime": "15:33:26",
    "doctor": null,
    "rxdate": "2022-12-07",
    "rxtime": "15:33:26",
    "sp_use": "",
    "hcode": null,
    "print": null,
    "dep_code": "016",
    "finance_number": "0281578",
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "3",
    "pttype": "12",
    "income": "09",
    "remain": null,
    "item_type": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": null,
    "paidst": "03",
    "item_no": 6,
    "last_modified": null,
    "sum_price": 370.0,
    "cost": 0.0,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{00001038-5E66-4B96-BBA8-B526DDAAA925}",
    "vn": "670123083204",
    "hn": "560000855",
    "an": null,
    "icode": "1600005",
    "qty": 180,
    "drugusage": "0000840",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 2.25,
    "vstdate": "2024-01-23",
    "vsttime": "8:32:04",
    "doctor": "367",
    "rxdate": "2024-01-23",
    "rxtime": "9:18:03",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "019",
    "finance_number": "415013",
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "74",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": "N",
    "paidst": "02",
    "item_no": 6,
    "last_modified": "2024-01-23 09:22:23",
    "sum_price": 405.0,
    "cost": 1.6,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{0000105E-D664-4815-8F55-8077BE38136D}",
    "vn": null,
    "hn": "680001185",
    "an": "690000703",
    "icode": "3001905",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 300.0,
    "vstdate": "2026-05-27",
    "vsttime": "0:00:00",
    "doctor": null,
    "rxdate": "2026-05-27",
    "rxtime": "0:00:00",
    "sp_use": "",
    "hcode": null,
    "print": null,
    "dep_code": "075",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 517028,
    "sub_type": "3",
    "pttype": "74",
    "income": "14",
    "remain": null,
    "item_type": "",
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": null,
    "paidst": "02",
    "item_no": -1,
    "last_modified": null,
    "sum_price": 300.0,
    "cost": 0.0,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{00001073-2A5E-44BE-BE6E-4020838AB79F}",
    "vn": null,
    "hn": "570001038",
    "an": "660001263",
    "icode": "1000097",
    "qty": 0,
    "drugusage": "0000810",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 5.25,
    "vstdate": "2023-10-03",
    "vsttime": null,
    "doctor": "065",
    "rxdate": "2023-10-03",
    "rxtime": "11:49:31",
    "sp_use": "",
    "hcode": "12251",
    "print": "N",
    "dep_code": "030",
    "finance_number": "",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 389933,
    "sub_type": "1",
    "pttype": "74",
    "income": "03",
    "remain": null,
    "item_type": "P",
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": null,
    "paidst": "02",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 0.0,
    "cost": 4.0,
    "stock_department_id": 0,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{00001559-163B-4758-BCE6-05211136C85A}",
    "vn": null,
    "hn": "530109249",
    "an": "570001489",
    "icode": "3000003",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 300.0,
    "vstdate": "2014-10-01",
    "vsttime": null,
    "doctor": "066",
    "rxdate": "2014-10-01",
    "rxtime": "11:03:23",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "040",
    "finance_number": "",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 69253,
    "sub_type": "3",
    "pttype": "74",
    "income": "12",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": 2,
    "last_modified": null,
    "sum_price": 300.0,
    "cost": 0.0,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  },
  {
    "hos_guid": "{00001C97-FFAE-44BD-8023-0DF4311CAEB3}",
    "vn": "600328090044",
    "hn": "530184453",
    "an": null,
    "icode": "1000154",
    "qty": 60,
    "drugusage": "0263",
    "idr": null,
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 5.5,
    "vstdate": "2017-03-28",
    "vsttime": "9:00:44",
    "doctor": "067",
    "rxdate": "2017-03-28",
    "rxtime": "9:46:50",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "035",
    "finance_number": "184905",
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": 5,
    "sub_type": "1",
    "pttype": "02",
    "income": "03",
    "remain": null,
    "item_type": "",
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": "N",
    "paidst": "02",
    "item_no": 5,
    "last_modified": null,
    "sum_price": 330.0,
    "cost": 4.0,
    "stock_department_id": null,
    "command_doctor": null,
    "opi_doctor_finance_type_id": null
  }
]
```
