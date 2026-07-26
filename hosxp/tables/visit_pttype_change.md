# `visit_pttype_change`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_pttype_change_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| old_pttype | char(2) | YES |  | NULL |  |  |
| new_pttype | char(2) | YES |  | NULL |  |  |
| old_paid_amount | double(15,3) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| station | varchar(25) | YES |  | NULL |  |  |
| change_datetime | datetime | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_vn | vn | no | 1 |
| PRIMARY | visit_pttype_change_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "visit_pttype_change_id": 1,
    "vn": "541006084725",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "11",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-06 10:36:31",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 2,
    "vn": "541006092052",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "11",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-06 10:43:18",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 3,
    "vn": "541006110157",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "11",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-06 13:08:01",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 4,
    "vn": "541007091925",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "02",
    "old_paid_amount": 21350.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-07 10:07:40",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 5,
    "vn": "541007092153",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "11",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-07 10:12:15",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 6,
    "vn": "541007091946",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "74",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-07 10:15:56",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 7,
    "vn": "541007092100",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "74",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-07 10:19:08",
    "hos_guid": null
  },
  {
    "visit_pttype_change_id": 8,
    "vn": "541007092302",
    "department": "OPD",
    "old_pttype": "10",
    "new_pttype": "11",
    "old_paid_amount": 50.0,
    "staff": "[MASKED_FULLNAME]",
    "station": "USER-HP",
    "change_datetime": "2011-10-07 10:20:36",
    "hos_guid": null
  }
]
```
