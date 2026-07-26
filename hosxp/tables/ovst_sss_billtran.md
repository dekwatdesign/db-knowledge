# `ovst_sss_billtran`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | NO | PRI |  |  |  |
| station | varchar(50) | YES |  | NULL |  |  |
| authcode | varchar(50) | YES |  | NULL |  |  |
| dttran | datetime | YES |  | NULL |  |  |
| hcode | char(5) | YES |  | NULL |  |  |
| invno | varchar(25) | YES | MUL | NULL |  |  |
| billno | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| memberno | varchar(50) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paid | double(15,3) | YES |  | NULL |  |  |
| vercode | varchar(25) | YES |  | NULL |  |  |
| tflag | varchar(25) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| hmain | varchar(5) | YES |  | NULL |  |  |
| payplan | varchar(2) | YES |  | NULL |  |  |
| claimamt | double(15,3) | YES |  | NULL |  |  |
| otherpayplan | varchar(2) | YES |  | NULL |  |  |
| otherpay | double(15,3) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |
| error_code | varchar(30) | YES |  | NULL |  |  |
| sss_accept_no | varchar(10) | YES |  | NULL |  |  |
| sss_amount | double(22,3) | YES |  | NULL |  |  |
| reply_datetime | datetime | YES |  | NULL |  |  |
| internal_error_msg | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_invno | invno | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "650223060123",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:23",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "hn": "530238933",
    "memberno": null,
    "amount": 500.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "11687",
    "payplan": "80",
    "claimamt": 500.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:03",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060126",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:26",
    "hcode": "12251",
    "invno": "349985",
    "billno": "",
    "hn": "640000299",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "10685",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:03",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060137",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:37",
    "hcode": "12251",
    "invno": "349995",
    "billno": "",
    "hn": "530222744",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "11761",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:03",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060138",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:38",
    "hcode": "12251",
    "invno": "349996",
    "billno": "",
    "hn": "530181430",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "11703",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:04",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060141",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:41",
    "hcode": "12251",
    "invno": "349999",
    "billno": "",
    "hn": "620000472",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "11743",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:04",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060142",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:42",
    "hcode": "12251",
    "invno": "350000",
    "billno": "",
    "hn": "530168446",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:05",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060145",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:45",
    "hcode": "12251",
    "invno": "350001",
    "billno": "",
    "hn": "620000507",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:05",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  },
  {
    "vn": "650223060146",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-23 06:01:46",
    "hcode": "12251",
    "invno": "350002",
    "billno": "",
    "hn": "630000398",
    "memberno": null,
    "amount": 450.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "",
    "payplan": "80",
    "claimamt": 450.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:30:06",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null,
    "internal_error_msg": ""
  }
]
```
