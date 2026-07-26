# `rcpt_arrear`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| arrear_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| arrear_date | date | YES | MUL | NULL |  |  |
| arrear_time | time | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| rcpno | varchar(50) | YES |  | NULL |  |  |
| finance_number | varchar(50) | YES |  | NULL |  |  |
| paid | char(1) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| receive_money_date | date | YES |  | NULL |  |  |
| receive_money_time | time | YES |  | NULL |  |  |
| receive_money_staff | varchar(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_arrear_date | arrear_date | no | 1 |
| ix_ix_vn | vn | no | 1 |
| PRIMARY | arrear_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "arrear_id": 3,
    "vn": "541027091405",
    "arrear_date": "2011-11-03",
    "arrear_time": "11:53:23",
    "amount": 150.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0145263",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530050051",
    "receive_money_date": "2011-11-03",
    "receive_money_time": "11:54:05",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 6,
    "vn": "541107130002",
    "arrear_date": "2011-11-07",
    "arrear_time": "14:40:49",
    "amount": 500.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0145364",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530140754",
    "receive_money_date": "2011-12-28",
    "receive_money_time": "16:30:18",
    "receive_money_staff": "yuwa090",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 7,
    "vn": "541115092939",
    "arrear_date": "2011-11-15",
    "arrear_time": "15:21:06",
    "amount": 250.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0145834",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530065643",
    "receive_money_date": "2011-12-01",
    "receive_money_time": "13:59:13",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 8,
    "vn": "541115101820",
    "arrear_date": "2011-11-16",
    "arrear_time": "9:56:44",
    "amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0145841",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530150450",
    "receive_money_date": "2011-12-27",
    "receive_money_time": "14:36:26",
    "receive_money_staff": "yuwa018",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 10,
    "vn": "541116112243",
    "arrear_date": "2011-11-17",
    "arrear_time": "8:26:43",
    "amount": 1140.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0145889",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530119343",
    "receive_money_date": "2011-11-17",
    "receive_money_time": "9:32:05",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 13,
    "vn": "541122162304",
    "arrear_date": "2011-11-23",
    "arrear_time": "9:10:05",
    "amount": 20.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0146192",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "540002000",
    "receive_money_date": "2011-11-24",
    "receive_money_time": "10:30:59",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 14,
    "vn": "541122161003",
    "arrear_date": "2011-11-23",
    "arrear_time": "9:11:46",
    "amount": 20.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0146193",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "540001999",
    "receive_money_date": "2011-11-24",
    "receive_money_time": "10:30:15",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  },
  {
    "arrear_id": 15,
    "vn": "541124084538",
    "arrear_date": "2011-11-25",
    "arrear_time": "11:41:03",
    "amount": 730.0,
    "staff": "[MASKED_FULLNAME]",
    "rcpno": "",
    "finance_number": "0146321",
    "paid": "Y",
    "pt_type": "OPD",
    "hn": "530003752",
    "receive_money_date": "2011-11-25",
    "receive_money_time": "12:13:24",
    "receive_money_staff": "yuwa123",
    "hos_guid": null,
    "an": null
  }
]
```
