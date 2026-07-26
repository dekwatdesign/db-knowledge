# `ipt_admit_queue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| request_date_time | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES | MUL | NULL |  |  |
| admited | char(1) | YES | MUL | NULL |  |  |
| request_an | varchar(9) | YES | MUL | NULL |  |  |
| admit_date_time | datetime | YES |  | NULL |  |  |
| request_ward | varchar(4) | YES |  | NULL |  |  |
| request_cc | varchar(250) | YES |  | NULL |  |  |
| request_queue | int(11) | YES |  | NULL |  |  |
| request_pe | longtext | YES |  | NULL |  |  |
| request_depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| admited | admited | no | 1 |
| doctor | doctor | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |
| request_an | request_an | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541010060208",
    "hn": "530146954",
    "request_date_time": "2011-10-11 15:47:54",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "069",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-13 12:45:33",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 9,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "013",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010081148",
    "hn": "530161654",
    "request_date_time": "2011-10-26 13:12:34",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "247",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-26 13:13:51",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 129,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "008",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010081550",
    "hn": "530036054",
    "request_date_time": "2011-10-11 15:46:32",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "212",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-13 11:28:41",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 13,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "013",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010082159",
    "hn": "530080054",
    "request_date_time": "2011-10-11 15:46:59",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "212",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-13 12:40:36",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 14,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "013",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010082336",
    "hn": "530081554",
    "request_date_time": "2011-10-11 15:47:24",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "212",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-13 13:12:47",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 15,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "013",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010124422",
    "hn": "530074354",
    "request_date_time": "2011-10-26 13:07:44",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "247",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-26 13:09:35",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 128,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "008",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010125821",
    "hn": "530005254",
    "request_date_time": "2011-10-26 12:58:32",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "247",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-26 13:00:12",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 127,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "008",
    "hos_guid": null,
    "note": null
  },
  {
    "vn": "541010154845",
    "hn": "530097354",
    "request_date_time": "2011-10-11 15:49:16",
    "staff": "[MASKED_FULLNAME]",
    "doctor": "212",
    "admited": "Y",
    "request_an": "",
    "admit_date_time": "2011-10-13 13:15:29",
    "request_ward": "01",
    "request_cc": "",
    "request_queue": 16,
    "request_pe": "{\\rtf1\\ansi\\ansicpg874\\deff0\\deflang1054{\\fonttbl{\\f0\\fnil\\fcharset222{\\*\\fname MS Sans Serif;}Helv;}}\r\n\\viewkind4\\uc1\\pard\\f0\\fs20\\par\r\n}\r\n\u0000",
    "request_depcode": "013",
    "hos_guid": null,
    "note": null
  }
]
```
