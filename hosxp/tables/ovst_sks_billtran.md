# `ovst_sks_billtran`

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
| memberno | varchar(50) | YES |  | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| paid | double(15,3) | YES |  | NULL |  |  |
| vercode | varchar(25) | YES |  | NULL |  |  |
| tflag | varchar(25) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| process_ok | char(1) | YES |  | NULL |  |  |
| reply_datetime | datetime | YES |  | NULL |  |  |
| error_code | varchar(30) | YES |  | NULL |  |  |
| sks_accept_no | varchar(10) | YES |  | NULL |  |  |
| sks_amount | double(15,3) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hmain | varchar(5) | YES |  | NULL |  |  |
| payplan | varchar(2) | YES |  | NULL |  |  |
| claimamt | double(15,3) | YES |  | NULL |  |  |
| otherpayplan | varchar(2) | YES |  | NULL |  |  |
| otherpay | double(15,3) | YES |  | NULL |  |  |
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
    "vn": "630000130",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-17 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "530144150",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "วรวรรณ ลิ้มจิรวัฒนา",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000134",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-17 18:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "550001555",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "อนุชา เฉยพันธ์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000137",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-17 18:00:00",
    "hcode": "12251",
    "invno": "296256",
    "billno": "0354/068",
    "memberno": null,
    "amount": 7600.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "630000207",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "ภูดิท โสมะภีร์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 7600.0,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000154",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-19 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "530295142",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "กฤชณัฐ เนตรพระวงศ์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000127",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-23 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "630000182",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "วรชิต สร้อยแก้ว",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000160",
    "station": null,
    "authcode": "",
    "dttran": "2020-03-27 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "530216851",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "คณาธิป ชูศักดิ์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000185",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-10 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "530216851",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "คณาธิป ชูศักดิ์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  },
  {
    "vn": "630000187",
    "station": null,
    "authcode": "",
    "dttran": "2020-05-15 16:00:00",
    "hcode": "12251",
    "invno": "",
    "billno": "",
    "memberno": null,
    "amount": 0.0,
    "paid": 0.0,
    "vercode": "",
    "tflag": null,
    "hn": "530216851",
    "update_datetime": "2021-07-21 11:46:36",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "คณาธิป ชูศักดิ์",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": null,
    "otherpayplan": null,
    "otherpay": null,
    "internal_error_msg": ""
  }
]
```
