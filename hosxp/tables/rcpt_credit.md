# `rcpt_credit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| credit_id | int(11) | NO | PRI | 0 |  |  |
| finance_number | varchar(200) | YES | MUL | NULL |  |  |
| rcpno | varchar(200) | YES |  | NULL |  |  |
| credit_date | date | YES |  | NULL |  |  |
| credit_time | time | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| credit_card_id | int(11) | YES |  | NULL |  |  |
| credit_card_owner | varchar(200) | YES |  | NULL |  |  |
| credit_card_no | varchar(50) | YES |  | NULL |  |  |
| credit_card_expire | varchar(20) | YES |  | NULL |  |  |
| credit_card_note | varchar(250) | YES |  | NULL |  |  |
| paid | char(1) | YES |  | NULL |  |  |
| discount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_finance_number | finance_number | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | credit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "credit_id": 1,
    "finance_number": "0239963",
    "rcpno": "0145:055",
    "credit_date": "2018-06-14",
    "credit_time": "10:01:40",
    "vn": "610614094539",
    "hn": "530190744",
    "staff": "[MASKED_FULLNAME]",
    "amount": 2630.0,
    "pt_type": "OPD",
    "credit_card_id": 1,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "4093448700281810",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 2630.0,
    "hos_guid": null
  },
  {
    "credit_id": 2,
    "finance_number": "0239989",
    "rcpno": "0145:081",
    "credit_date": "2018-06-14",
    "credit_time": "15:28:16",
    "vn": "610614100030",
    "hn": "550000566",
    "staff": "[MASKED_FULLNAME]",
    "amount": 770.0,
    "pt_type": "OPD",
    "credit_card_id": 1,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "4552051801514552",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 770.0,
    "hos_guid": null
  },
  {
    "credit_id": 3,
    "finance_number": "0239997",
    "rcpno": "0145:089",
    "credit_date": "2018-06-15",
    "credit_time": "10:24:41",
    "vn": "610615101126",
    "hn": "530199953",
    "staff": "[MASKED_FULLNAME]",
    "amount": 8600.0,
    "pt_type": "OPD",
    "credit_card_id": 1,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "4417701002841163",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 8600.0,
    "hos_guid": null
  },
  {
    "credit_id": 4,
    "finance_number": "0240015",
    "rcpno": "0146:007",
    "credit_date": "2018-06-15",
    "credit_time": "14:42:53",
    "vn": "610615142309",
    "hn": "570001816",
    "staff": "[MASKED_FULLNAME]",
    "amount": 7130.0,
    "pt_type": "OPD",
    "credit_card_id": 1,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "4532156432467743",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 7130.0,
    "hos_guid": null
  },
  {
    "credit_id": 5,
    "finance_number": "0240114",
    "rcpno": "0147:005",
    "credit_date": "2018-06-19",
    "credit_time": "12:09:59",
    "vn": "610619083102",
    "hn": "600001172",
    "staff": "[MASKED_FULLNAME]",
    "amount": 500.0,
    "pt_type": "OPD",
    "credit_card_id": 1,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "4283800088175032",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 500.0,
    "hos_guid": null
  },
  {
    "credit_id": 6,
    "finance_number": "0240316",
    "rcpno": "0149:004",
    "credit_date": "2018-06-26",
    "credit_time": "9:43:36",
    "vn": "610626080449",
    "hn": "530145147",
    "staff": "[MASKED_FULLNAME]",
    "amount": 530.0,
    "pt_type": "OPD",
    "credit_card_id": 2,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "5577552961830546",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 530.0,
    "hos_guid": null
  },
  {
    "credit_id": 7,
    "finance_number": "0240405",
    "rcpno": "0149:093",
    "credit_date": "2018-06-27",
    "credit_time": "11:12:05",
    "vn": "610627100024",
    "hn": "570001655",
    "staff": "[MASKED_FULLNAME]",
    "amount": 7080.0,
    "pt_type": "OPD",
    "credit_card_id": 2,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "5577552958761050",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 7080.0,
    "hos_guid": null
  },
  {
    "credit_id": 8,
    "finance_number": "0240685",
    "rcpno": "0152:069",
    "credit_date": "2018-07-04",
    "credit_time": "11:16:12",
    "vn": "610000309",
    "hn": "610000309",
    "staff": "[MASKED_FULLNAME]",
    "amount": 2886.0,
    "pt_type": "IPD",
    "credit_card_id": 2,
    "credit_card_owner": "[MASKED_FULLNAME]",
    "credit_card_no": "5124451000790787",
    "credit_card_expire": null,
    "credit_card_note": null,
    "paid": "N",
    "discount": null,
    "total_amount": 2886.0,
    "hos_guid": null
  }
]
```
