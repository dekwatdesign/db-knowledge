# `screen_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| staff | varchar(25) | NO | PRI |  |  |  |
| rx_time | time | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor_queue | int(11) | YES |  | NULL |  |  |
| doctor_depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | staff | yes | 1 |
| PRIMARY | vn | yes | 2 |
| staff | staff | no | 1 |
| vn | vn | no | 1 |
| vn_staff_unique | vn | yes | 1 |
| vn_staff_unique | staff | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "540927093353",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "15:36:56",
    "depcode": "043",
    "doctor_queue": 1,
    "doctor_depcode": "011",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060014",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "13:39:36",
    "depcode": "025",
    "doctor_queue": 144,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060015",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "13:55:26",
    "depcode": "025",
    "doctor_queue": 150,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060018",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "14:03:39",
    "depcode": "025",
    "doctor_queue": 151,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060020",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "13:43:14",
    "depcode": "025",
    "doctor_queue": 146,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060026",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "14:15:10",
    "depcode": "025",
    "doctor_queue": 154,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010060045",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "13:25:31",
    "depcode": "025",
    "doctor_queue": 143,
    "doctor_depcode": "030",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "541010103005",
    "staff": "[MASKED_FULLNAME]",
    "rx_time": "13:51:00",
    "depcode": "025",
    "doctor_queue": 148,
    "doctor_depcode": "016",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
