# `rcpt_debt_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| debt_cancel_id | int(11) | NO | PRI | 0 |  |  |
| debt_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| debt_date | date | YES |  | NULL |  |  |
| debt_time | time | YES |  | NULL |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| cancel_staff | varchar(15) | YES | MUL | NULL |  |  |
| amount | double(15,3) | YES |  | NULL |  |  |
| pt_type | char(3) | YES |  | NULL |  |  |
| computer | varchar(25) | YES |  | NULL |  |  |
| cancel_computer | varchar(25) | YES |  | NULL |  |  |
| discount_amount | double(15,3) | YES |  | NULL |  |  |
| total_amount | double(15,3) | YES |  | NULL |  |  |
| reason | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cancel_staff | cancel_staff | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | debt_cancel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "debt_cancel_id": 1,
    "debt_id": 31,
    "vn": "541011133813",
    "hn": "530122954",
    "debt_date": "2011-10-11",
    "debt_time": "14:31:42",
    "cancel_datetime": "2011-10-11 15:08:56",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa018",
    "amount": 3653.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 3653.0,
    "reason": "ระบุสิทธิ์ผิด",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 2,
    "debt_id": 18,
    "vn": "541010060048",
    "hn": "600000757",
    "debt_date": "2011-10-10",
    "debt_time": "14:40:22",
    "cancel_datetime": "2011-10-11 15:58:18",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa018",
    "amount": 3250.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 3250.0,
    "reason": "บันทึกผิดประเภท",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 3,
    "debt_id": 19,
    "vn": "541010060048",
    "hn": "600000757",
    "debt_date": "2011-10-10",
    "debt_time": "15:09:42",
    "cancel_datetime": "2011-10-11 15:58:30",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa018",
    "amount": 1300.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 1300.0,
    "reason": "บันทึกผิดประเภท",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 4,
    "debt_id": 38,
    "vn": "541010060048",
    "hn": "600000757",
    "debt_date": "2011-10-11",
    "debt_time": "16:31:18",
    "cancel_datetime": "2011-10-11 16:35:16",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa123",
    "amount": 10950.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 10950.0,
    "reason": "บันทึกผิดประเภท",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 5,
    "debt_id": 46,
    "vn": "541012101312",
    "hn": "530186548",
    "debt_date": "2011-10-12",
    "debt_time": "11:05:26",
    "cancel_datetime": "2011-10-12 11:18:17",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa118",
    "amount": 410.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 410.0,
    "reason": "คิดราคาผิด",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 6,
    "debt_id": 48,
    "vn": "541012060107",
    "hn": "610001073",
    "debt_date": "2011-10-12",
    "debt_time": "12:50:32",
    "cancel_datetime": "2011-10-12 12:51:02",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa118",
    "amount": 3335.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 3335.0,
    "reason": "คิดราคาผิด",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 7,
    "debt_id": 39,
    "vn": "541010060048",
    "hn": "600000757",
    "debt_date": "2011-10-11",
    "debt_time": "16:44:26",
    "cancel_datetime": "2011-10-14 10:26:55",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa128",
    "amount": 10950.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 10950.0,
    "reason": "คิดราคาผิด",
    "hos_guid": null
  },
  {
    "debt_cancel_id": 8,
    "debt_id": 130,
    "vn": "541017060130",
    "hn": "550002277",
    "debt_date": "2011-10-17",
    "debt_time": "10:04:52",
    "cancel_datetime": "2011-10-17 10:20:23",
    "staff": "[MASKED_FULLNAME]",
    "cancel_staff": "yuwa123",
    "amount": 1670.0,
    "pt_type": "OPD",
    "computer": "FINANCE-YUWA00",
    "cancel_computer": "FINANCE-YUWA00",
    "discount_amount": 0.0,
    "total_amount": 1670.0,
    "reason": "คิดราคาผิด",
    "hos_guid": null
  }
]
```
