# `ovst_sks_billtran_list`

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

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_invno | invno | no | 1 |
| ix_vn | vn | no | 1 |
| ix_vn_invno | invno | no | 1 |
| ix_vn_invno | vn | no | 2 |
| PRIMARY | vn_key | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn_key": "610627090026:229817",
    "vn": "610627090026",
    "station": null,
    "authcode": "",
    "dttran": "2018-06-27 09:00:26",
    "hcode": "12251",
    "invno": "229817",
    "billno": "",
    "memberno": null,
    "amount": 200.0,
    "paid": 0.0,
    "vercode": "005146916",
    "tflag": null,
    "hn": "530048447",
    "update_datetime": "2019-09-14 14:48:35",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "ณัฐวุฒิ อักษรเสนาะ",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 200.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "610627091528:229965",
    "vn": "610627091528",
    "station": null,
    "authcode": "",
    "dttran": "2018-06-27 09:15:28",
    "hcode": "12251",
    "invno": "229965",
    "billno": "",
    "memberno": null,
    "amount": 240.0,
    "paid": 0.0,
    "vercode": "005226286",
    "tflag": null,
    "hn": "570000119",
    "update_datetime": "2019-09-14 14:48:35",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "สุรีย์รัตน์ สุนันสา",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 240.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408060002:299069",
    "vn": "630408060002",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 06:00:02",
    "hcode": "12251",
    "invno": "299069",
    "billno": "",
    "memberno": null,
    "amount": 19416.0,
    "paid": 0.0,
    "vercode": "069849238",
    "tflag": null,
    "hn": "600001552",
    "update_datetime": "2021-07-21 11:39:19",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "ณฐนนท์ นิลบัวคลี่",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 19416.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408060004:299070",
    "vn": "630408060004",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 06:00:04",
    "hcode": "12251",
    "invno": "299070",
    "billno": "",
    "memberno": null,
    "amount": 13438.0,
    "paid": 0.0,
    "vercode": "069848954",
    "tflag": null,
    "hn": "530008851",
    "update_datetime": "2021-07-21 11:39:20",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "ณณิชา แก้วถิ่นดง",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 13438.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408060009:299068",
    "vn": "630408060009",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 06:00:09",
    "hcode": "12251",
    "invno": "299068",
    "billno": "",
    "memberno": null,
    "amount": 19679.0,
    "paid": 0.0,
    "vercode": "069849475",
    "tflag": null,
    "hn": "530217349",
    "update_datetime": "2021-07-21 11:39:20",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "พชรมน เจริญยิ่ง",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 19679.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408060015:299065",
    "vn": "630408060015",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 06:00:15",
    "hcode": "12251",
    "invno": "299065",
    "billno": "",
    "memberno": null,
    "amount": 1028.0,
    "paid": 0.0,
    "vercode": "610001368",
    "tflag": null,
    "hn": "610001368",
    "update_datetime": "2021-07-21 11:39:21",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "พลกฤต ฉิมพลี",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 1028.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408074921:299064",
    "vn": "630408074921",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 07:49:21",
    "hcode": "12251",
    "invno": "299064",
    "billno": "",
    "memberno": null,
    "amount": 12694.0,
    "paid": 0.0,
    "vercode": "069846519",
    "tflag": null,
    "hn": "610001050",
    "update_datetime": "2021-07-21 11:39:21",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "บุญญวรรณ แช่มขุนทด",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 12694.0,
    "otherpayplan": "",
    "otherpay": 0.0
  },
  {
    "vn_key": "630408074940:299066",
    "vn": "630408074940",
    "station": null,
    "authcode": "",
    "dttran": "2020-04-08 07:49:40",
    "hcode": "12251",
    "invno": "299066",
    "billno": "",
    "memberno": null,
    "amount": 5030.0,
    "paid": 0.0,
    "vercode": "069845741",
    "tflag": null,
    "hn": "560001424",
    "update_datetime": "2021-07-21 11:39:22",
    "process_ok": "N",
    "reply_datetime": null,
    "error_code": null,
    "sks_accept_no": null,
    "sks_amount": null,
    "pid": "1xxxxxxxxxxxx",
    "name": "กฤษฎาพงษ์ ฉิมแก้ว",
    "hmain": "12251",
    "payplan": "10",
    "claimamt": 5030.0,
    "otherpayplan": "",
    "otherpay": 0.0
  }
]
```
