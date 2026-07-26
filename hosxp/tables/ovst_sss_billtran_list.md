# `ovst_sss_billtran_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn_key | varchar(50) | NO | PRI |  |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
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

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_invno | invno | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_invno | invno | yes | 1 |
| ix_vn_invno | vn | yes | 2 |
| PRIMARY | vn_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn_key": "650201073720:348539",
    "vn": "650201073720",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-01 07:37:20",
    "hcode": "12251",
    "invno": "348539",
    "billno": "",
    "hn": "530037151",
    "memberno": null,
    "amount": 50.0,
    "paid": 0.0,
    "vercode": null,
    "tflag": "A",
    "pid": "1xxxxxxxxxxxx",
    "name": "[MASKED_FULLNAME]",
    "hmain": "11775",
    "payplan": "80",
    "claimamt": 50.0,
    "otherpayplan": null,
    "otherpay": null,
    "update_datetime": "2022-06-15 13:21:05",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650201094635:347576",
    "vn": "650201094635",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-01 09:46:35",
    "hcode": "12251",
    "invno": "347576",
    "billno": "",
    "hn": "650000715",
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
    "update_datetime": "2022-06-15 13:21:05",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650201094711:347578",
    "vn": "650201094711",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-01 09:47:11",
    "hcode": "12251",
    "invno": "347578",
    "billno": "",
    "hn": "650000714",
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
    "update_datetime": "2022-06-15 13:21:05",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650202060000:347679",
    "vn": "650202060000",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-02 06:00:00",
    "hcode": "12251",
    "invno": "347679",
    "billno": "",
    "hn": "650000721",
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
    "update_datetime": "2022-06-15 13:21:06",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650202060002:347682",
    "vn": "650202060002",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-02 06:00:02",
    "hcode": "12251",
    "invno": "347682",
    "billno": "",
    "hn": "650000723",
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
    "update_datetime": "2022-06-15 13:21:06",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650202060003:347683",
    "vn": "650202060003",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-02 06:00:03",
    "hcode": "12251",
    "invno": "347683",
    "billno": "",
    "hn": "650000724",
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
    "update_datetime": "2022-06-15 13:21:06",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650202060005:347680",
    "vn": "650202060005",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-02 06:00:05",
    "hcode": "12251",
    "invno": "347680",
    "billno": "",
    "hn": "530117148",
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
    "update_datetime": "2022-06-15 13:21:07",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  },
  {
    "vn_key": "650202101023:347685",
    "vn": "650202101023",
    "station": null,
    "authcode": "",
    "dttran": "2022-02-02 10:10:23",
    "hcode": "12251",
    "invno": "347685",
    "billno": "",
    "hn": "650000727",
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
    "update_datetime": "2022-06-15 13:21:07",
    "process_ok": "N",
    "error_code": null,
    "sss_accept_no": null,
    "sss_amount": null,
    "reply_datetime": null
  }
]
```
