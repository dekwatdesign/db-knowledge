# `stock_ovst`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| department | char(3) | YES | MUL | NULL |  |  |
| department_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| entry_date_time | datetime | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| department | department | no | 1 |
| department_id | department_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |
| staff | staff | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541207130001",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2012-01-11 16:26:11",
    "hos_guid": null
  },
  {
    "vn": "541220060002",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 09:22:23",
    "hos_guid": null
  },
  {
    "vn": "541220060004",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 11:26:58",
    "hos_guid": null
  },
  {
    "vn": "541220060007",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 12:24:07",
    "hos_guid": null
  },
  {
    "vn": "541220060008",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 12:24:57",
    "hos_guid": null
  },
  {
    "vn": "541220060016",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 10:17:04",
    "hos_guid": null
  },
  {
    "vn": "541220060017",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 14:01:45",
    "hos_guid": null
  },
  {
    "vn": "541220060018",
    "department": "OPD",
    "department_id": 1,
    "staff": "[MASKED_FULLNAME]",
    "entry_date_time": "2011-12-20 13:44:22",
    "hos_guid": null
  }
]
```
