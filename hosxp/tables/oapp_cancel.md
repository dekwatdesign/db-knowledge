# `oapp_cancel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_cancel_id | int(11) | NO | PRI | 0 |  |  |
| oapp_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |
| oapp_cancel_type_id | int(11) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| vstdate | date | YES |  | NULL |  |  |
| nextdate | date | YES |  | NULL |  |  |
| nexttime | time | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| cancel_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | oapp_cancel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "oapp_cancel_id": 1,
    "oapp_id": 144,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 12:41:59",
    "oapp_cancel_type_id": 1,
    "hn": "0068910",
    "vn": "521126092318",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-01-28",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 2,
    "oapp_id": 138,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 12:46:37",
    "oapp_cancel_type_id": 1,
    "hn": "0069367",
    "vn": "521126113937",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-01-28",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 3,
    "oapp_id": 139,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 12:47:54",
    "oapp_cancel_type_id": 1,
    "hn": "0069367",
    "vn": "521126113937",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-01-28",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 4,
    "oapp_id": 147,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 12:58:20",
    "oapp_cancel_type_id": 1,
    "hn": "0069367",
    "vn": "521126011443",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-01-28",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 5,
    "oapp_id": 148,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 12:58:32",
    "oapp_cancel_type_id": 1,
    "hn": "0069367",
    "vn": "521126011443",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-01-28",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 6,
    "oapp_id": 162,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 14:34:43",
    "oapp_cancel_type_id": 1,
    "hn": "0065501",
    "vn": "521126133431",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-09-16",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 7,
    "oapp_id": 161,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 14:34:54",
    "oapp_cancel_type_id": 1,
    "hn": "0065501",
    "vn": "521126133431",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-09-16",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  },
  {
    "oapp_cancel_id": 8,
    "oapp_id": 150,
    "staff": "[MASKED_FULLNAME]",
    "cancel_datetime": "2009-11-26 14:40:34",
    "oapp_cancel_type_id": 1,
    "hn": "0066574",
    "vn": "521126130607",
    "doctor": "003",
    "spclty": null,
    "depcode": "016",
    "vstdate": "2009-11-26",
    "nextdate": "2010-09-16",
    "nexttime": "9:00:00",
    "hos_guid": null,
    "cancel_note": null
  }
]
```
