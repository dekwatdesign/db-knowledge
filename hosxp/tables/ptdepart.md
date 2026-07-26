# `ptdepart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(12) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| intime | time | YES |  | NULL |  |  |
| outdepcode | char(3) | YES |  | NULL |  |  |
| outtime | time | YES |  | NULL |  |  |
| status | char(1) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| outdate | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| depcode | depcode | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| status | status | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "540921070000",
    "depcode": "000",
    "hn": "",
    "intime": "10:45:09",
    "outdepcode": "000",
    "outtime": "10:45:33",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-24",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "540000097597",
    "depcode": "043",
    "hn": "530104054",
    "intime": "8:48:21",
    "outdepcode": "",
    "outtime": "8:48:21",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-26",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "540000097597",
    "depcode": "043",
    "hn": "530104054",
    "intime": "9:12:31",
    "outdepcode": "",
    "outtime": "9:12:31",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-26",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "540000097597",
    "depcode": "043",
    "hn": "530104054",
    "intime": "10:10:41",
    "outdepcode": "",
    "outtime": "10:10:41",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-26",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "540000097597",
    "depcode": "043",
    "hn": "530104054",
    "intime": "10:28:22",
    "outdepcode": "",
    "outtime": "10:28:22",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-26",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "540000097597",
    "depcode": "043",
    "hn": "530104054",
    "intime": "10:39:31",
    "outdepcode": "",
    "outtime": "10:39:31",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-09-26",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541005183503",
    "depcode": "013",
    "hn": "530207648",
    "intime": "18:33:10",
    "outdepcode": "017",
    "outtime": "18:35:07",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-10-05",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541005183503",
    "depcode": "030",
    "hn": "530207648",
    "intime": "20:58:47",
    "outdepcode": "999",
    "outtime": "20:58:57",
    "status": null,
    "staff": "[MASKED_FULLNAME]",
    "outdate": "2011-10-05",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
