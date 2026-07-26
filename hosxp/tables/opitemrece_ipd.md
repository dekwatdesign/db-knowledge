# `opitemrece_ipd`

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
| staff | varchar(15) | YES |  | NULL |  |  |
| doctor_lock | char(1) | YES |  | NULL |  |  |
| paidst | char(2) | YES |  | NULL |  |  |
| item_no | tinyint(4) | YES |  | NULL |  |  |
| last_modified | datetime | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| cost | double(15,3) | YES |  | NULL |  |  |
| stock_department_id | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
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
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
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
    "hos_guid": "{0082DE38-3AA4-4FD0-AED5-2CD41283A30D}",
    "vn": null,
    "hn": "610001050",
    "an": "550000485",
    "icode": "3000003",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 300.0,
    "vstdate": "2012-05-26",
    "vsttime": null,
    "doctor": "066",
    "rxdate": "2012-05-26",
    "rxtime": "22:04:02",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "040",
    "finance_number": "16797",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 10149,
    "sub_type": "3",
    "pttype": "02",
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
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00C50521-6E9F-4501-AF3F-5D742FBFD6C8}",
    "vn": null,
    "hn": "530164954",
    "an": "550000453",
    "icode": "3000306",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 80.0,
    "vstdate": "2012-05-15",
    "vsttime": null,
    "doctor": "067",
    "rxdate": "2012-05-15",
    "rxtime": "9:17:51",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "036",
    "finance_number": "0155787",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 9491,
    "sub_type": "3",
    "pttype": "10",
    "income": "14",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "03",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 80.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00DDC0D6-4440-4EF8-88D9-E7FEC16C84C3}",
    "vn": null,
    "hn": "550000218",
    "an": "550000258",
    "icode": "3000306",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 80.0,
    "vstdate": "2012-03-06",
    "vsttime": null,
    "doctor": "068",
    "rxdate": "2012-03-06",
    "rxtime": "9:32:30",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "037",
    "finance_number": "0152861",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 6757,
    "sub_type": "3",
    "pttype": "10",
    "income": "14",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "03",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 80.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{01A9AA6F-BFD6-4A43-B789-A45970A576CC}",
    "vn": null,
    "hn": "530222150",
    "an": "570001232",
    "icode": "3000306",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 150.0,
    "vstdate": "2014-07-29",
    "vsttime": null,
    "doctor": "063",
    "rxdate": "2014-07-29",
    "rxtime": "11:43:25",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "036",
    "finance_number": "",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 61185,
    "sub_type": "3",
    "pttype": "74",
    "income": "14",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 150.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{023CF951-559F-44C3-95A9-B3318E806C65}",
    "vn": null,
    "hn": "610001050",
    "an": "550000485",
    "icode": "3000020",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 300.0,
    "vstdate": "2012-05-22",
    "vsttime": null,
    "doctor": "066",
    "rxdate": "2012-05-22",
    "rxtime": "10:12:10",
    "sp_use": "",
    "hcode": "12251",
    "print": "N",
    "dep_code": "040",
    "finance_number": "16797",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 9849,
    "sub_type": "3",
    "pttype": "02",
    "income": "14",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 300.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{024D9031-3B95-470C-8E3F-64B71254DE78}",
    "vn": null,
    "hn": "610001050",
    "an": "550000485",
    "icode": "1000153",
    "qty": 0,
    "drugusage": "0011",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 5.5,
    "vstdate": "2012-05-31",
    "vsttime": null,
    "doctor": "066",
    "rxdate": "2012-05-31",
    "rxtime": "12:07:41",
    "sp_use": "",
    "hcode": "12251",
    "print": "Y",
    "dep_code": "030",
    "finance_number": "16797",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 10354,
    "sub_type": "1",
    "pttype": "02",
    "income": "03",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "02",
    "item_no": 3,
    "last_modified": null,
    "sum_price": 0.0,
    "cost": 4.2,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{03816BEC-305E-4F48-B799-0DA424AE7FC9}",
    "vn": null,
    "hn": "560001904",
    "an": "560001505",
    "icode": "3000296",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 20.0,
    "vstdate": "2013-10-31",
    "vsttime": "10:00:09",
    "doctor": "",
    "rxdate": "2013-10-31",
    "rxtime": "15:52:32",
    "sp_use": null,
    "hcode": "12251",
    "print": null,
    "dep_code": "013",
    "finance_number": null,
    "discount": 0.0,
    "use_right": null,
    "node_id": "",
    "order_no": 38317,
    "sub_type": "3",
    "pttype": "10",
    "income": "16",
    "remain": null,
    "item_type": null,
    "staff": "[MASKED_FULLNAME]",
    "doctor_lock": null,
    "paidst": "03",
    "item_no": null,
    "last_modified": null,
    "sum_price": 20.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{03A8C194-4896-4046-A269-7B169D7E5B5F}",
    "vn": null,
    "hn": "530164954",
    "an": "550000453",
    "icode": "3000043",
    "qty": 1,
    "drugusage": "",
    "idr": "N/A",
    "iperday": 0,
    "iperdose": 0.0,
    "recetime": null,
    "unitprice": 100.0,
    "vstdate": "2012-07-19",
    "vsttime": null,
    "doctor": "067",
    "rxdate": "2012-07-19",
    "rxtime": "10:18:15",
    "sp_use": "",
    "hcode": "12251",
    "print": "N",
    "dep_code": "037",
    "finance_number": "0159495",
    "discount": 0.0,
    "use_right": null,
    "node_id": null,
    "order_no": 12969,
    "sub_type": "3",
    "pttype": "10",
    "income": "01",
    "remain": null,
    "item_type": "P",
    "staff": null,
    "doctor_lock": null,
    "paidst": "03",
    "item_no": 2,
    "last_modified": null,
    "sum_price": 100.0,
    "cost": 0.0,
    "stock_department_id": null,
    "hos_guid_ext": null
  }
]
```
