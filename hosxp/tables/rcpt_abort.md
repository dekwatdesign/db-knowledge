# `rcpt_abort`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rcpno | varchar(20) | NO | PRI |  |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| rcpamt | double(22,3) | YES |  | NULL |  |  |
| user | varchar(15) | YES | MUL | NULL |  |  |
| approve_by | varchar(15) | YES | MUL | NULL |  |  |
| reason | varchar(250) | YES |  | NULL |  |  |
| abort_date | date | YES |  | NULL |  |  |
| abort_time | time | YES |  | NULL |  |  |
| computer | varchar(15) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| reason_text | longtext | YES |  | NULL |  |  |
| abort_staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| approve_by | approve_by | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | rcpno | yes | 1 |
| user | user | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "rcpno": " 004:505",
    "vn": "550601165910",
    "hn": "530193851",
    "rcpamt": 765.0,
    "user": "yuwa134",
    "approve_by": "yuwa134",
    "reason": "คิดค่าบริการเป็นในเวลา",
    "abort_date": "2012-06-01",
    "abort_time": "17:57:06",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00001:071",
    "vn": "581005085008",
    "hn": "580001417",
    "rcpamt": 70.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "หมอตรวจผู้ป่วยใหม่วันนี้",
    "abort_date": "2015-10-05",
    "abort_time": "9:17:04",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00002:070",
    "vn": "581006074539",
    "hn": "550001710",
    "rcpamt": 236.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "เปลี่ยนวิธีกินยา",
    "abort_date": "2015-10-06",
    "abort_time": "11:06:50",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00004:045",
    "vn": "581009102947",
    "hn": "560001228",
    "rcpamt": 380.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "  pt ขอเพิ่มยา",
    "abort_date": "2015-10-09",
    "abort_time": "11:00:24",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00004:059",
    "vn": "581009132325",
    "hn": "530087653",
    "rcpamt": 3200.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "เครื่องปริ้นต์ค้าง ไม่มีใบเสร็จปริ้นต์ออกมาค่ะ",
    "abort_date": "2015-10-09",
    "abort_time": "13:53:18",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00004:061",
    "vn": "581009151139",
    "hn": "580000149",
    "rcpamt": 675.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "ใบเสร็จค้าง",
    "abort_date": "2015-10-09",
    "abort_time": "15:27:56",
    "computer": "FINANCE3-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00004:075",
    "vn": "581012075026",
    "hn": "580001192",
    "rcpamt": 450.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "เพิ่มค่าบัตร",
    "abort_date": "2015-10-12",
    "abort_time": "10:05:37",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  },
  {
    "rcpno": "00005:018",
    "vn": "581013073233",
    "hn": "550000103",
    "rcpamt": 988.0,
    "user": "yuwa207",
    "approve_by": "yuwa017",
    "reason": "เปลี่ยนวิธีกินยา",
    "abort_date": "2015-10-13",
    "abort_time": "9:02:05",
    "computer": "FINANCE1-YUWA",
    "hos_guid": null,
    "hos_guid_ext": null,
    "reason_text": null,
    "abort_staff": null
  }
]
```
