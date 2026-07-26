# `opitemrece_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | YES | MUL | NULL |  |  |
| rxdate | date | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| opitemrece_id | int(11) | YES | MUL | NULL |  |  |
| opitemrece_did | varchar(24) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_opitemrece_id | opitemrece_id | no | 1 |
| ix_rxdate | rxdate | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "590106140006",
    "rxdate": "2016-01-06",
    "icode": "1000143",
    "income": "03",
    "qty": 90,
    "sum_price": 293.0,
    "department": "OPD",
    "hos_guid": "{00000150-6A36-478A-BF28-AC905B6973C5}",
    "opitemrece_id": 1869761,
    "opitemrece_did": "124929000003281121781506",
    "hos_guid_ext": null
  },
  {
    "vn": "680520090050",
    "rxdate": "2025-05-20",
    "icode": "3000001",
    "income": "12",
    "qty": 1,
    "sum_price": 50.0,
    "department": "OPD",
    "hos_guid": "{0000021E-B93F-46CC-8C3B-88B654869FC5}",
    "opitemrece_id": null,
    "opitemrece_did": "",
    "hos_guid_ext": null
  },
  {
    "vn": "620529091927",
    "rxdate": "2019-05-29",
    "icode": "1000097",
    "income": "03",
    "qty": 40,
    "sum_price": 240.0,
    "department": "OPD",
    "hos_guid": "{000002F8-FE5D-412A-85D0-1555FF188F06}",
    "opitemrece_id": 17702311,
    "opitemrece_did": "180021000003620120381414",
    "hos_guid_ext": null
  },
  {
    "vn": "651207140056",
    "rxdate": "2022-12-07",
    "icode": "3001998",
    "income": "09",
    "qty": 1,
    "sum_price": 370.0,
    "department": "OPD",
    "hos_guid": "{00000A81-B78E-42C6-A86A-937E6A7E77F7}",
    "opitemrece_id": 24297251,
    "opitemrece_did": "",
    "hos_guid_ext": null
  },
  {
    "vn": "670123083204",
    "rxdate": "2024-01-23",
    "icode": "1600005",
    "income": "03",
    "qty": 180,
    "sum_price": 405.0,
    "department": "OPD",
    "hos_guid": "{00001038-5E66-4B96-BBA8-B526DDAAA925}",
    "opitemrece_id": 25716488,
    "opitemrece_did": "124929000003281121781341",
    "hos_guid_ext": null
  },
  {
    "vn": "570001489",
    "rxdate": "2014-10-01",
    "icode": "3000003",
    "income": "12",
    "qty": 1,
    "sum_price": 300.0,
    "department": "IPD",
    "hos_guid": "{00001559-163B-4758-BCE6-05211136C85A}",
    "opitemrece_id": 830199,
    "opitemrece_did": "",
    "hos_guid_ext": null
  },
  {
    "vn": "600328090044",
    "rxdate": "2017-03-28",
    "icode": "1000154",
    "income": "03",
    "qty": 60,
    "sum_price": 330.0,
    "department": "OPD",
    "hos_guid": "{00001C97-FFAE-44BD-8023-0DF4311CAEB3}",
    "opitemrece_id": 5706442,
    "opitemrece_did": "",
    "hos_guid_ext": null
  },
  {
    "vn": "560927103026",
    "rxdate": "2013-09-27",
    "icode": "3000001",
    "income": "12",
    "qty": 1,
    "sum_price": 50.0,
    "department": "OPD",
    "hos_guid": "{000020EE-ADB9-4B57-B019-482E31E14870}",
    "opitemrece_id": 453749,
    "opitemrece_did": "",
    "hos_guid_ext": null
  }
]
```
