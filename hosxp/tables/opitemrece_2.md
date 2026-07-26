# `opitemrece_2`

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
| staff | varchar(10) | YES |  | NULL |  |  |
| doctor_lock | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| item_no | tinyint(4) | YES |  | NULL |  |  |
| last_modified | datetime | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| oldcode | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_rxdate_icode | an | no | 1 |
| ix_an_rxdate_icode | rxdate | no | 2 |
| ix_an_rxdate_icode | icode | no | 3 |
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
    "hos_guid": "{000009A8-E554-4D1D-9716-78B79F6477BB}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000146875",
    "an": "",
    "icode": "1000221",
    "qty": 20,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 1.13,
    "vstdate": "2011-02-20",
    "vsttime": "21:22:00",
    "doctor": "9623",
    "rxdate": "2011-02-20",
    "rxtime": null,
    "sp_use": "0000806",
    "hcode": null,
    "print": null,
    "dep_code": "1",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "02",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "01",
    "item_no": null,
    "last_modified": null,
    "sum_price": 23.0,
    "cost": 0.9,
    "stock_department_id": null,
    "oldcode": "5402200490"
  },
  {
    "hos_guid": "{00002C48-9305-486D-98AE-2A000ABB8063}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000142495",
    "an": "",
    "icode": "1000168",
    "qty": 20,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 0.3,
    "vstdate": "2011-06-15",
    "vsttime": "7:40:00",
    "doctor": "25239",
    "rxdate": "2011-06-15",
    "rxtime": null,
    "sp_use": "0000806",
    "hcode": null,
    "print": null,
    "dep_code": "7",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "72",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 6.0,
    "cost": 0.24,
    "stock_department_id": null,
    "oldcode": "5406150128"
  },
  {
    "hos_guid": "{00003204-6DEB-40DB-A9FB-0F27F9A25E17}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000313427",
    "an": "",
    "icode": "1000221",
    "qty": 180,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 1.13,
    "vstdate": "2011-05-24",
    "vsttime": "8:13:00",
    "doctor": "27608",
    "rxdate": "2011-05-24",
    "rxtime": null,
    "sp_use": "0000806",
    "hcode": null,
    "print": null,
    "dep_code": "7",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "34",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 203.0,
    "cost": 0.9,
    "stock_department_id": null,
    "oldcode": "5405240118"
  },
  {
    "hos_guid": "{00007A46-D786-4891-B2BF-7DD2E929BA6C}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000015440",
    "an": "",
    "icode": "1000125",
    "qty": 30,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 9.75,
    "vstdate": "2011-02-23",
    "vsttime": "9:12:00",
    "doctor": "16958",
    "rxdate": "2011-02-23",
    "rxtime": null,
    "sp_use": "0000845",
    "hcode": null,
    "print": null,
    "dep_code": "7",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "34",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 293.0,
    "cost": 7.8,
    "stock_department_id": null,
    "oldcode": "5402230933"
  },
  {
    "hos_guid": "{000087CD-55BE-4DF5-A3BF-C871A5867568}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000132352",
    "an": "",
    "icode": "1000530",
    "qty": 1,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 10.31,
    "vstdate": "2011-05-05",
    "vsttime": "8:51:00",
    "doctor": "22771",
    "rxdate": "2011-05-05",
    "rxtime": null,
    "sp_use": "0001102",
    "hcode": null,
    "print": null,
    "dep_code": "2",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "89",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 10.0,
    "cost": 8.25,
    "stock_department_id": null,
    "oldcode": "5405050172"
  },
  {
    "hos_guid": "{00008807-799C-4ABD-8BE2-9B6E321DC1AE}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000342899",
    "an": "",
    "icode": "1000446",
    "qty": 1,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 362.5,
    "vstdate": "2011-07-11",
    "vsttime": "16:49:00",
    "doctor": "25511",
    "rxdate": "2011-07-11",
    "rxtime": null,
    "sp_use": "0001312",
    "hcode": null,
    "print": null,
    "dep_code": "1",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "71",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 363.0,
    "cost": 290.0,
    "stock_department_id": null,
    "oldcode": "5407110950"
  },
  {
    "hos_guid": "{00009978-998C-4EDA-A7DE-03CBADB40E6E}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000130141",
    "an": "",
    "icode": "1000036",
    "qty": 90,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 0.45,
    "vstdate": "2011-05-04",
    "vsttime": "8:00:00",
    "doctor": "16958",
    "rxdate": "2011-05-04",
    "rxtime": null,
    "sp_use": "0000834",
    "hcode": null,
    "print": null,
    "dep_code": "10",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "21",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 41.0,
    "cost": 0.36,
    "stock_department_id": null,
    "oldcode": "5405040318"
  },
  {
    "hos_guid": "{0000A443-DD2A-4725-B813-303762F7A361}",
    "vn": "1xxxxxxxxxxxx",
    "hn": "000164287",
    "an": "",
    "icode": "1000018",
    "qty": 60,
    "drugusage": null,
    "idr": "N/A",
    "iperday": null,
    "iperdose": null,
    "recetime": null,
    "unitprice": 1.06,
    "vstdate": "2011-05-10",
    "vsttime": "19:21:00",
    "doctor": "25239",
    "rxdate": "2011-05-10",
    "rxtime": null,
    "sp_use": "0000827",
    "hcode": null,
    "print": null,
    "dep_code": "2",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": null,
    "sub_type": "1",
    "pttype": "44",
    "income": "03",
    "remain": null,
    "item_type": null,
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": null,
    "last_modified": null,
    "sum_price": 64.0,
    "cost": 1.2,
    "stock_department_id": null,
    "oldcode": "5405101021"
  }
]
```
