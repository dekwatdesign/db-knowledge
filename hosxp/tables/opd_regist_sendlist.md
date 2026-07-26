# `opd_regist_sendlist`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_regist_sendlist_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| send_to_depcode | char(3) | YES |  | NULL |  |  |
| send_datetime | datetime | YES |  | NULL |  |  |
| send_from_depcode | char(3) | YES |  | NULL |  |  |
| send_to_spclty | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opd_regist_sendlist_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opd_regist_sendlist_id": 1,
    "vn": "540921070000",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "000",
    "send_datetime": "2011-09-24 10:45:33",
    "send_from_depcode": "000",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 2,
    "vn": "540927093353",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "011",
    "send_datetime": "2011-09-27 09:33:55",
    "send_from_depcode": "043",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 3,
    "vn": "541005183503",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "017",
    "send_datetime": "2011-10-05 18:35:08",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 4,
    "vn": "541006083401",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "023",
    "send_datetime": "2011-10-06 08:34:04",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 5,
    "vn": "541006083424",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "023",
    "send_datetime": "2011-10-06 08:34:26",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 6,
    "vn": "541006084725",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "023",
    "send_datetime": "2011-10-06 08:47:27",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 7,
    "vn": "541006092052",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "023",
    "send_datetime": "2011-10-06 09:20:54",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  },
  {
    "opd_regist_sendlist_id": 8,
    "vn": "541006095125",
    "staff": "[MASKED_FULLNAME]",
    "send_to_depcode": "023",
    "send_datetime": "2011-10-06 09:51:27",
    "send_from_depcode": "013",
    "send_to_spclty": "99",
    "hos_guid": null
  }
]
```
